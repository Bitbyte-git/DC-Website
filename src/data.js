// ---------------------------------------------------------------
// All site content + image paths in one place.
// Put your images inside:  public/images/
// Image file names used are listed in each section below.
// ---------------------------------------------------------------

export const CONTACT = {
  phone: '+91 9876543210',
  email: 'info@dreamcountryvisas.com',
  country: 'India',
  whatsapp: 'https://wa.me/919876543210',
};

// Images: logo.png (used in navbar + footer + favicon)
export const NAV_LINKS_LEFT = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about'},
  { label: 'Permanent Residency (PR)', href: '/#services', dropdown: true },
  { label: 'Real Estate', href: '/#properties', dropdown: true },
  { label: 'Residency', href: '/#destinations', dropdown: true },
];

export const NAV_LINKS_RIGHT = [
  { label: 'Citizenship', href: '/#services', dropdown: true },
  { label: 'Other Service', href: '/#services', dropdown: true },
  // temporary — points back to the home section until a real Media page exists
  { label: 'Media', href: '/' },
  { label: 'Contact Us', href: '/#contact' },
];

// Images: hero-london.png (left), hero-dubai.png (right), world-map.png (bg)
export const HERO_PILLS = [
  { icon: 'passport', label: 'Residency by Investment' },
  { icon: 'certificate', label: 'Citizenship by Investment' },
  { icon: 'building', label: 'Real Estate Investment' },
  { icon: 'globe', label: 'Global Mobility Solutions' },
];

// Residency destination artwork includes each country's landmark and flag.
export const DESTINATIONS = [
  {
    name: 'Canada',
    image: '/landing-img/re-canata.png',
    price: 'from CAD 200,000',
  },
  {
    name: 'Australia',
    price: 'from AUD 250,000',
    image: '/landing-img/re-australia.png',
  },
  {
    name: 'New Zealand',
    price: 'from NZD 3M+',
    image: '/landing-img/re-new zealand.png',
  },
  {
    name: 'Cyprus',
    price: 'from 300,000',
    image: '/landing-img/re-Cyprus.png',
  },
  { name: 'Malta', price: 'from 150,000', image: '/landing-img/re-Malta.png' },
  { name: 'Portugal', price: 'from 250,000', image: '/landing-img/re-portugal.png' },
  { name: 'Latvia', price: 'from 250,000', image: '/landing-img/re-Latvia.png' },
  { name: 'Italy', price: 'from 250,000', image: '/landing-img/re-italy.png' },
  { name: 'Spain', price: 'from 500,000', image: '/landing-img/re-spain.png' },
];

export const SERVICES = [
  {
    icon: 'passport',
    title: 'Citizenship by Investment',
    text: 'Gain a second citizenship and enjoy global freedom, security and lifelong benefits.',
  },
  {
    icon: 'building',
    title: 'Real Estate Investment',
    text: 'Invest in premium properties worldwide and build lasting wealth for generations.',
  },
  {
    icon: 'certificate',
    title: 'Residency by Investment',
    text: 'Secure your future with world-class residency programs in top global destinations.',
  },
  {
    icon: 'globe',
    title: 'Global Mobility Solutions',
    text: 'Bespoke solutions for your global mobility, business expansion and tax efficiency.',
  },
  {
    icon: 'support',
    title: 'Other Services',
    text: 'Additional support for documentation, compliance and end-to-end assistance.',
  },
];

// Real Estate destination artwork
export const PROPERTIES = [
  { name: 'Dubai', price: 'from AED 5M+', image: '/landing-img/Real-Dubai.png' },
  { name: 'Greece', price: 'from €600K+', image: '/landing-img/Real-Greece.png' },
  { name: 'Spain', price: 'from €500K+', image: '/landing-img/Real-Spain.png' },
  { name: 'Latvia', price: 'from €250K+', image: '/landing-img/Real-latvia.png' },
];

// Image: globe-network.png (dotted globe illustration on right side)
export const STATS = [
  { icon: 'people', value: '20+', label: 'Team Members' },
  { icon: 'certificate', value: '6+', label: 'Winning Awards' },
  { icon: 'passport', value: '50+', label: 'Completed Cases' },
  { icon: 'star', value: '100+', label: 'Client Reviews' },
];

// Images: client-rahul.jpg, client-priya.jpg, client-arjun.jpg, client-neha.jpg
export const TESTIMONIALS = [
  {
    text: 'Most important thing about this organisation is: You are not treated as a client, but you are treated as a family member. That says it all. Utmost care and professionalism are the hallmarks of leadership under Usha mam. Team is available whenever you need their assistance. Thank you for your help.',
    name: 'Rahul Mehta',
    place: 'Dubai, UAE',
  },
  {
    text: 'I had got my Canadian Visa application done from DreamCountry Visas Pvt. Ltd. I have found DreamCountry Visas Pvt. Ltd to be very responsive and flexible to my needs. DreamCountry Visas Pvt. Ltd helped me get through with my application without any worries, they followed up with me.',
    name: 'Vishal Hawa',
    place: 'Toronto, Canada',
  },
  {
    text: 'My experience with Dream Visas has been exemplary. My heart felt gratitude goes especially to Usha who made sure that I reach Canada safe and quick. At the very beginning it was just a casual enquiry call that I made to her and within a years time we have become more like family. She stood by me during Covid and guided me to steer through difficult situations that came our way. She is smart and quick with action and the whole credit of me being in Canada goes to Usha. Not just me but my family trusts her too as she has helped many of my family members and friends turn their Canadian Dream into Reality.',
    name: 'Priyanka Bhambra',
    place: 'Canada',
  },
  {
    text: 'My experience with Dream Visas has been amazing. Usha\u2019s guidance made my journey to Canada smooth and fast. What started as a casual inquiry turned into a bond like family. She stood by me during COVID, helping me navigate challenges. Thanks to her quick action, I\u2019m in Canada today. My family and friends also trust her for making their Canadian dreams a reality!',
    name: 'Harwinder Singh',
    place: 'Canada',
  },
];

// Leadership team profiles
export const TEAM = [
  {
    name: 'Amanpreet Kaur',
    role: 'Senior Immigration Counsellor',
    image: '/landing-img/Amanpreet Kaur.png',
    description: 'Amanpreet Kaur is an experienced Senior Immigration Counsellor who guides clients through every stage of their immigration journey. Known for her personalised approach and in-depth understanding of global visa processes, she delivers transparent, reliable and result-oriented solutions.',
  },
  {
    name: 'Ms. Usha',
    role: 'Business Head',
    image: '/landing-img/Ms. Usha.png',
    description: 'Ms. Usha, the visionary behind Dream Country Visas, founded the company with a deep passion for helping individuals and families navigate complex immigration pathways. With a strong background in immigration law and a commitment to transparency, she ensures every client receives fair, honest and professional visa guidance.',
  },
  {
    name: 'Mr. Mohhit',
    role: 'Director',
    image: '/landing-img/Mohhit.png',
    description: 'Mr. Mohhit plays a key role in steering the strategic direction of Dream Country Visas. As Director, he brings leadership, operational expertise and a client-first mindset, helping build a strong team and expand the firm’s global outreach.',
  },
];

export const CONTACT_FEATURES = [
  {
    icon: 'guidance',
    title: 'Personalised Guidance',
    text: 'Solutions tailored to your goals',
  },
  {
    icon: 'lock',
    title: '100% Confidential',
    text: 'Your information is safe with us',
  },
  {
    icon: 'support',
    title: 'Expert Support',
    text: 'From start to success',
  },
];

// ----- Citizenship mega menu (navbar hover popup) -----
// Images: menu-antigua.jpg, menu-stkitts.jpg, menu-malta.jpg,
//         menu-vanuatu.jpg, menu-nauru.jpg, menu-offer.jpg
// ----- Citizenship mega menu -----
export const CITIZENSHIP_MENU = {
  groups: [
    {
      title: 'CARIBBEAN',
      items: [
        {
          name: 'Antigua & Barbuda',
          price: 'from $230,000',
          time: 'from 8 months',
          image: '/menu/menu-antigua.png',
          link: '/citizenship/antigua-barbuda',
        },
        {
          name: 'St. Kitts and Nevis',
          price: 'from $250,000',
          time: 'from 6 months',
          image: '/menu/menu-stkitts.png',
          link: '/citizenship/st-kitts-nevis',
        },
      ],
    },
    {
      title: 'OTHER',
      items: [
        {
          name: 'Malta',
          price: 'from €600,000',
          time: 'from 12 months',
          image: '/menu/menu-malta.png',
          link: '/citizenship/malta',
        },
        {
          name: 'Vanuatu',
          price: 'from $130,000',
          time: 'from 3 months',
          image: '/menu/menu-vanuatu.png',
          link: '/citizenship/vanuatu',
        },
        {
          name: 'Nauru',
          price: 'from $105,000',
          time: 'from 3 months',
          image: '/menu/menu-nauru.png',
          link: '/citizenship/nauru',
        },
      ],
    },
  ],
    offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'Malta Residency by Investment',
    subtitle: 'Malta Permanent Residence Programme',
    image: '/images/res-malta.png',
    button: 'Explore Offer',
    link: '/citizenship/malta',
  },
};


// ----- Real Estate mega menu -----
export const REALESTATE_MENU = {
  groups: [
    {
      title: 'TOP LOCATIONS',
      items: [
        {
          name: 'Dubai',
          price: 'from AED 1.5M',
          time: 'ready to move',
          image: '/images/re-dubai.png',
          link: '/realestate/dubai',
        },
        {
          name: 'Greece Golden Visa',
          price: 'from €250,000',
          time: 'from 4 months',
          image: '/images/re-greece.png',
          link: '/realestate/greece',
        },
        {
          name: 'Latvia',
          price: 'from €250,000',
          time: 'from 3 months',
          image: '/images/re-latvia.png',
          link: '/realestate/latvia',
        },
      ],
    },
  ],
    offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'High-ROI Dubai Properties',
    subtitle: 'Off-plan projects with 8-10% rental yield',
    image: '/menu/menu-dubai.png',
    button: 'Explore Properties',
    link: '/realestate/dubai',
  },
};

// ----- Residency mega menu -----
export const RESIDENCY_MENU = {
  groups: [
    {
      title: 'RESIDENCY PROGRAMS',
      items: [
        { name: 'Canada', sub: 'Startup Visa, Quebec Immigrant Investor', image: '/images/res-canada.png', link: '/residency/canada' },
        { name: 'Australia', sub: 'National Innovation Visa', image: '/images/res-australia.png', link: '/residency/australia' },
        { name: 'New Zealand', sub: 'Investor Visa', image: '/images/res-nz.png', link: '/residency/new-zealand' },
{ name: 'Cyprus', sub: 'Work and Residence Permit for Non-EU Investors', image: '/images/res-cyprus.png', link: '/residency/cyprus' },
        { name: 'Malta', sub: 'Malta Permanent Residence Program', image: '/images/res-malta.png', link: '/residency/malta' },
        { name: 'Portugal', sub: 'Golden Visa', image: '/images/res-portugal.png', link: '/residency/portugal' },
        { name: 'Latvia', sub: 'Golden Visa', image: '/images/res-latvia.png', link: '/residency/latvia' },
        { name: 'Italy', sub: 'Golden Visa', image: '/images/res-italy.png', link: '/residency/italy' },
        { name: 'Spain', sub: 'Golden Visa', image: '/images/res-spain.png', link: '/residency/spain' },
      ],
    },
  ],
    offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'Most Affordable EU Residency',
    subtitle: 'Portugal Golden Visa from €250,000',
    image: '/menu/menu-res-offer.png',
    button: 'Explore Offer',
    link: '/residency/portugal',
  },
};

// ----- Permanent Residency (PR) mega menu -----
export const PR_MENU = {
  allLabel: 'All PR Programs',
  groups: [
    {
      title: 'PR COUNTRIES',
      items: [
        {
          name: 'Australia PR',
          image: '/images/country-australia.png',
          link: '/pr/australia',
        },
        {
          name: 'Canada PR',
          image: '/images/country-canada.png',
          link: '/pr/canada',
        },
      ],
    },
  ],
      offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'Fast-Track PR to Australia',
    subtitle: 'Skilled Migration from AUD 4,640',
    image: '/images/country-australia.png',
    button: 'Explore Offer',
    link: '/pr/australia',
  },
};

// ----- Other Services mega menu -----
export const OTHERSERVICES_MENU = {
  allLabel: 'All Services',
  groups: [
    {
      title: 'WHAT WE SERVE',
      items: [
        { name: 'Work Visas', image: '/menu/menu-work-visa.png', link: '/services/work-visas' },
        { name: 'Business Visas', image: '/menu/menu-business-visa.png', link: '/services/business-visas' },
        { name: 'Study Visas', image: '/menu/menu-study-visa.png', link: '/services/study-visas' },
        { name: 'Investor Visas', image: '/menu/menu-investor-visa.png', link: '/services/investor-visas' },
        { name: 'Family & Spouse Visas', image: '/menu/menu-family-visa.png', link: '/services/family-spouse-visas' },
      ],
    },
  ],
};

export const FOOTER = {
  about:
    'Your trusted partner in global citizenship, residency, real estate and global mobility solutions across the world.',
  quickLinks: ['Citizenship', 'Residency', 'Real Estate', 'Other Service', 'About Us', 'Contact Us'],
  services: [
    'Citizenship (Malta)',
    'Residency (Portugal)',
    'Real Estate (Dubai)',
    'Permanent Residency (Australia)',
  ],
  destinations: ['UAE', 'Germany', 'Canada', 'USA', 'Australia'],
  copyright: '© 2026 Dream Country Visas. All Rights Reserved.',
};
