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
export const NAV_LINKS = [
  { label: 'Citizenship', href: '/#services', dropdown: true },
  { label: 'Residency', href: '/#destinations', dropdown: true },
  { label: 'Real Estate', href: '/#properties', dropdown: true },
  { label: 'Other Service', href: '/#services', dropdown: false },
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
    name: 'Germany',
    price: 'from €250,000',
    image: '/landing-img/re-germany.png',
  },
  {
    name: 'Canada',
    price: 'from CAD 200,000',
    image: '/landing-img/re-canata.png',
  },
  {
    name: 'UAE',
    price: 'from AED 750,000',
    image: '/landing-img/re-uae.png',
  },
  {
    name: 'USA',
    price: 'from $800,000',
    image: '/landing-img/re-usa.png',
  },
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
  { icon: 'star', value: '4.8', label: 'on Google (Rating)' },
  { icon: 'people', value: '35+', label: 'Years of Experience' },
  { icon: 'people', value: '9K+', label: 'Happy Clients' },
  { icon: 'globe', value: '50+', label: 'Countries Worldwide' },
];

// Images: client-rahul.jpg, client-priya.jpg, client-arjun.jpg, client-neha.jpg
export const TESTIMONIALS = [
  {
    text: 'The team at Dream Country Visas made our citizenship journey smooth and hassle-free. Highly recommended!',
    name: 'Rahul Mehta',
    place: 'Dubai, UAE',
    image: '/images/client-rahul.png',
  },
  {
    text: 'Excellent guidance and support throughout the residency process. Very professional and transparent service.',
    name: 'Priya Sharma',
    place: 'Toronto, Canada',
    image: '/images/client-priya.png',
  },
  {
    text: 'Their real estate investment advice helped us make the right choice. Great experience!',
    name: 'Arjun Nair',
    place: 'London, UK',
    image: '/images/client-arjun.png',
  },
  {
    text: 'From documentation to approval, everything was handled seamlessly. Thank you team!',
    name: 'Neha Kapoor',
    place: 'Sydney, Australia',
    image: '/images/client-neha.png',
  },
];

// Images: team-arjun.jpg, team-meera.jpg, team-rahul.jpg, team-sneha.jpg
export const TEAM = [
  {
    name: 'Arjun Malhotra',
    role: 'Global Mobility Advisor',
    image: '/images/team-arjun.png',
  },
  {
    name: 'Meera Nair',
    role: 'Investment Specialist',
    image: '/images/team-meera.png',
  },
  {
    name: 'Rahul Fernandes',
    role: 'Real Estate Consultant',
    image: '/images/team-rahul.png',
  },
  {
    name: 'Sneha Iyer',
    role: 'Client Relationship Manager',
    image: '/images/team-sneha.png',
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
    title: 'Most Affordable EU Residency',
    subtitle: 'Greece Golden Visa from €250,000',
    image: '/menu/menu-offer.png',
    button: 'Explore Offer',
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
          image: '/menu/menu-dubai.png',
          link: '/realestate/dubai',
        },
        {
          name: 'Greece Golden Visa',
          price: 'from €250,000',
          time: 'from 4 months',
          image: '/menu/menu-greece.png',
          link: '/realestate/greece',
        },
        {
          name: 'Latvia',
          price: 'from €250,000',
          time: 'from 3 months',
          image: '/menu/menu-latvia.png',
          link: '/realestate/latvia',
        },
      ],
    },
  ],
  offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'High-ROI Dubai Properties',
    subtitle: 'Off-plan projects with 8-10% rental yield',
    image: '/menu/menu-re-offer.png',
    button: 'Explore Properties',
  },
};

// ----- Residency mega menu -----
export const RESIDENCY_MENU = {
  groups: [
    {
      title: 'RESIDENCY PROGRAMS',
      items: [
        { name: 'Canada', sub: 'Startup Visa, Quebec Immigrant Investor', image: '/menu/menu-canada.png', link: '/residency/canada' },
        { name: 'Australia', sub: 'National Innovation Visa', image: '/menu/menu-australia.png', link: '/residency/australia' },
        { name: 'New Zealand', sub: 'Investor Visa', image: '/menu/menu-nz.png', link: '/residency/new-zealand' },
        { name: 'Cyprus', sub: 'Work and Residence Permit for Non-EU Investors', image: '/menu/menu-cyprus.png', link: '/residency/cyprus' },
        { name: 'Malta', sub: 'Malta Permanent Residence Program', image: '/menu/menu-malta.png', link: '/residency/malta' },
        { name: 'Portugal', sub: 'Golden Visa', image: '/menu/menu-portugal.png', link: '/residency/portugal' },
        { name: 'Latvia', sub: 'Golden Visa', image: '/menu/menu-latvia.png', link: '/residency/latvia' },
        { name: 'Italy', sub: 'Golden Visa', image: '/menu/menu-italy.png', link: '/residency/italy' },
        { name: 'Spain', sub: 'Golden Visa', image: '/menu/menu-spain.png', link: '/residency/spain' },
      ],
    },
  ],
  offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'Most Affordable EU Residency',
    subtitle: 'Portugal Golden Visa from €250,000',
    image: '/menu/menu-res-offer.png',
    button: 'Explore Offer',
  },
};

// ----- Other Services mega menu -----
export const OTHERSERVICES_MENU = {
  allLabel: 'All Services',
  groups: [
    {
      title: 'WHAT WE SERVE',
      items: [
        { name: 'PR Visas', image: '/menu/menu-pr-visa.png', link: '/services/pr-visas' },
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
    'Citizenship by Investment',
    'Residency by Investment',
    'Real Estate Investment',
    'Global Mobility Solutions',
    'Other Services',
  ],
  destinations: ['UAE', 'Germany', 'Canada', 'USA', 'Australia'],
  copyright: '© 2026 Dream Country Visas. All Rights Reserved.',
};
