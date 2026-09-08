import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Please select',
  required = false,
  isPhoneCode = false,
  searchable = false,
  className = '',
  ariaLabel = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Normalize options
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'string') {
      return {
        value: opt,
        label: opt,
        displayLabel: opt,
        flag: '',
        code: '',
        country: opt,
      };
    }
    const val = isPhoneCode
      ? (opt.code ?? opt.value)
      : (opt.value ?? opt.country ?? opt.name ?? opt.code);
    const countryName = opt.country || opt.name || opt.value || '';
    const flagIcon = opt.flag || '';
    const dialCode = opt.code || '';
    const labelText =
      opt.label ||
      (dialCode
        ? `${flagIcon} ${countryName} (${dialCode})`
        : flagIcon
        ? `${flagIcon} ${countryName}`
        : countryName);
    const dispLabel = flagIcon ? `${flagIcon} ${countryName}` : countryName;

    return {
      value: val,
      label: labelText,
      displayLabel: dispLabel,
      flag: flagIcon,
      code: dialCode,
      country: countryName,
    };
  });

  // Find currently selected item
  const selectedItem = normalizedOptions.find((o) => o.value === value);

  // Auto enable search if more than 6 options
  const shouldSearch = searchable || normalizedOptions.length > 6;

  // Filter options based on search term
  const filteredOptions = normalizedOptions.filter((opt) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      opt.label.toLowerCase().includes(term) ||
      (opt.code && opt.code.toLowerCase().includes(term)) ||
      (opt.country && opt.country.toLowerCase().includes(term)) ||
      (opt.displayLabel && opt.displayLabel.toLowerCase().includes(term))
    );
  });

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
      if (shouldSearch && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 50);
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, shouldSearch]);

  const handleSelect = (optValue) => {
    onChange({ target: { name, value: optValue, type: 'select' } });
    setIsOpen(false);
    setSearchTerm('');
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setSearchTerm('');
  };

  // Formatted trigger label
  const renderTriggerContent = () => {
    if (isPhoneCode && selectedItem) {
      return (
        <span className="custom-select-phone-trigger">
          {selectedItem.flag && <span className="custom-select-flag">{selectedItem.flag}</span>}
          <span className="custom-select-code">{selectedItem.code || selectedItem.value}</span>
        </span>
      );
    }

    if (selectedItem) {
      return (
        <span className="custom-select-value">
          {selectedItem.flag && <span className="custom-select-flag">{selectedItem.flag}</span>}
          <span>{selectedItem.country || selectedItem.displayLabel || selectedItem.label}</span>
        </span>
      );
    }

    return <span className="custom-select-placeholder">{placeholder}</span>;
  };

  return (
    <div
      className={`custom-select-wrapper ${isPhoneCode ? 'custom-select-phone-wrap' : ''} ${className} ${
        isOpen ? 'is-open' : ''
      }`}
      ref={containerRef}
    >
      {/* Hidden input for HTML constraint validation */}
      <input
        type="text"
        name={name}
        value={value || ''}
        required={required}
        onChange={() => {}}
        tabIndex={-1}
        className="custom-select-hidden-input"
        aria-hidden="true"
      />

      <button
        type="button"
        className={`custom-select-trigger ${!value ? 'is-placeholder' : ''}`}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label={ariaLabel || name}
      >
        <span className="custom-select-trigger-text">{renderTriggerContent()}</span>
        <span className={`custom-select-arrow ${isOpen ? 'rotate' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Dropdown Menu — STRICTLY POSITIONS DOWNWARDS */}
      {isOpen && (
        <div className={`custom-select-dropdown ${isPhoneCode ? 'custom-select-dropdown-phone' : ''}`}>
          {shouldSearch && (
            <div className="custom-select-search-wrap">
              <span className="custom-select-search-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                ref={searchInputRef}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search country or program..."
                className="custom-select-search-input"
                onClick={(e) => e.stopPropagation()}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="custom-select-search-clear"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchTerm('');
                  }}
                >
                  ×
                </button>
              )}
            </div>
          )}

          <div className="custom-select-options-list" role="listbox">
            {filteredOptions.length === 0 ? (
              <div className="custom-select-no-results">No results found</div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    type="button"
                    key={opt.value + (opt.country || opt.label)}
                    className={`custom-select-option ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => handleSelect(opt.value)}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="custom-select-opt-content">
                      {opt.flag && <span className="custom-select-flag">{opt.flag}</span>}
                      <span className="custom-select-opt-label">
                        {isPhoneCode && opt.code ? `${opt.country} (${opt.code})` : opt.country || opt.label}
                      </span>
                    </span>
                    {isSelected && (
                      <span className="custom-select-check">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
