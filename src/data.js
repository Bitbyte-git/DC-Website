// ---------------------------------------------------------------
// All site content + image paths in one place.
// Put your images inside:  public/images/
// Image file names used are listed in each section below.
// ---------------------------------------------------------------

export const CONTACT = {
  phone: '+91 8595968122',
  email: 'consult@dreamcountryvisas.com',
  country: 'India',
  hours: '9 am - 8 pm',
  offices: [
    {
      label: 'Head Office',
      address: 'Hemkunt Chambers, 310, 3rd Floor, Nehru Place, New Delhi, Delhi 110019',
      mapLink: 'https://maps.app.goo.gl/BhD62mYck7xi5RcM6',
    },
    {
      label: 'Second Office',
      address: 'Office Number 507, DLF Corporate Greens, Tower-1, Sector 74A, Gurugram, Haryana 122004',
      mapLink: 'https://maps.app.goo.gl/BhD62mYck7xi5RcM6',
    },
  ],
  whatsapp: 'https://wa.me/918595968122',
};

// Images: logo.png (used in navbar + footer + favicon)
export const NAV_LINKS_LEFT = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about'},
  { label: 'Permanent Residency (PR)', href: '/pr', dropdown: true },
  { label: 'Real Estate', href: '/realestate', dropdown: true },
  { label: 'Residency', href: '/residency', dropdown: true },
];

export const NAV_LINKS_RIGHT = [
  { label: 'Citizenship', href: '/citizenship', dropdown: true },
  { label: 'Other Service', href: '/other-services', dropdown: true },
  { label: 'Media', href: '/' },
  { label: 'Contact Us', href: '/contact' },
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
    image: '/landing-img/re-canata.webp',
    price: 'from CAD 200,000',
  },
  {
    name: 'Australia',
    price: 'from AUD 250,000',
    image: '/landing-img/re-australia.webp',
  },
  {
    name: 'New Zealand',
    price: 'from NZD 3M+',
    image: '/landing-img/re-new zealand.webp',
  },
  {
    name: 'Cyprus',
    price: 'from 300,000',
    image: '/landing-img/re-Cyprus.webp',
  },
  { name: 'Malta', price: 'from 150,000', image: '/landing-img/re-Malta.webp' },
  { name: 'Portugal', price: 'from 250,000', image: '/landing-img/re-portugal.webp' },
  { name: 'Latvia', price: 'from 250,000', image: '/landing-img/re-Latvia.webp' },
  { name: 'Italy', price: 'from 250,000', image: '/landing-img/re-italy.webp' },
  { name: 'Spain', price: 'from 500,000', image: '/landing-img/re-spain.webp' },
];

export const SERVICES = [
  {
    icon: 'passport',
    title: 'Citizenship by Investment',
    text: 'Gain a second citizenship and enjoy global freedom, security and lifelong benefits.',
    link: '/citizenship',
  },
    {
    icon: 'building',
    title: 'Real Estate Investment',
    text: 'Invest in premium properties worldwide and build lasting wealth for generations.',
    link: '/realestate',
  },
  {
    icon: 'certificate',
    title: 'Residency by Investment',
    text: 'Secure your future with world-class residency programs in top global destinations.',
    link: '/residency',
  },
   {
    icon: 'globe',
    title: 'Permanent Residency (PR)',
    text: 'Skilled migration and permanent residency pathways for long-term settlement abroad.',
    link: '/pr',
  },
    {
    icon: 'support',
    title: 'Other Services',
    text: 'Additional support for documentation, compliance and end-to-end assistance.',
    link: '/other-services',
  },
];

// Real Estate destination artwork
export const PROPERTIES = [
  { name: 'Dubai', price: 'from AED 5M+', image: '/landing-img/Real-Dubai.webp' },
  { name: 'Greece', price: 'from €600K+', image: '/landing-img/Real-Greece.webp' },
  { name: 'Spain', price: 'from €500K+', image: '/landing-img/Real-Spain.webp'  },
  { name: 'Latvia', price: 'from €250K+', image: '/landing-img/Real-latvia.webp' },
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
    image: '/landing-img/Amanpreet Kaur.webp',
    description: 'Amanpreet Kaur is an experienced Senior Immigration Counsellor who guides clients through every stage of their immigration journey. Known for her personalised approach and in-depth understanding of global visa processes, she delivers transparent, reliable and result-oriented solutions.',
  },
   {
    name: 'Ms. Usha',
    role: 'Founder',
    image: '/landing-img/Ms. Usha.webp',
    description: "As <strong>Founder</strong> at DreamCountry Visas Pvt Ltd, Usha leads with a commitment to simplifying global mobility. With expertise in filling all category applications, and a self-made professional journey backed by education from Delhi University and a diploma in travel and tourism, she possesses over <strong>25 years</strong> of experience in the immigration industry. Being from an immigration background, she finds fulfilment in being part of clients' dream journeys — delivering <strong>clear, compliant and efficient visa solutions</strong> tailored to each client's unique needs, whether for work or permanent migration.",
  },
      {
    name: 'Mr. Mohhit',
    role: 'Director',
    image: '/landing-img/Mohhit.webp',
    description: "I help individuals and businesses navigate global visa processes with ease and clarity. With over <strong>10 years</strong> in immigration and investment migration consulting, I specialize in <strong>Residency and Citizenship by Investment (RCBI)</strong> — working with HNIs, founders, and senior executives on second residency and citizenship programs across the UAE, New Zealand, and select global options, including due diligence, program selection, and long-term planning. I also work extensively with professionals on <strong>PR and work visa pathways</strong> — Canada, Australia, Germany's Opportunity Card, and Sweden's Job Seeker Visa — bringing the same level of rigor and personal attention to every case, regardless of pathway or investment size. What a decade in this space has taught me: the visa or investment process itself is rarely the hardest part. The hardest part is knowing which pathway genuinely fits your profile — and avoiding the misinformation and scams that flood this industry at every price point.",
  },
];

// About page Leadership section — Amanpreet Kaur excluded here on purpose
export const ABOUT_TEAM = TEAM.filter((m) => m.name !== 'Amanpreet Kaur');

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
        { name: 'Antigua & Barbuda', price: 'from $230,000', time: 'from 8 months', image: '/menu/menu-antigua.webp', link: '/citizenship/antigua-barbuda' },
        { name: 'St. Kitts and Nevis', price: 'from $250,000', time: 'from 6 months', image: '/menu/menu-stkitts.webp', link: '/citizenship/st-kitts-nevis' },
      ],
    },
    {
      title: 'OTHER',
      items: [
        {
          name: 'Malta',
          price: 'from €600,000',
          time: 'from 12 months',
          image: '/menu/menu-malta.webp',
          link: '/citizenship/malta',
        },
        {
          name: 'Vanuatu',
          price: 'from $130,000',
          time: 'from 3 months',
          image: '/menu/menu-vanuatu.webp',
          link: '/citizenship/vanuatu',
        },
        {
          name: 'Nauru',
          price: 'from $105,000',
          time: 'from 3 months',
          image: '/menu/menu-nauru.webp',
          link: '/citizenship/nauru',
        },
      ],
    },
  ],
    offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'Malta Residency by Investment',
    subtitle: 'Malta Permanent Residence Programme',
    image: '/images/res-malta.webp',
    button: 'Explore Offer',
    link: '/citizenship/malta',
    variant: 'offer-citizenship',
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
          image: '/images/re-dubai.webp',
          link: '/realestate/dubai',
        },
        {
          name: 'Greece Golden Visa',
          price: 'from €250,000',
          time: 'from 4 months',
          image: '/images/re-greece.webp',
          link: '/realestate/greece',
        },
        {
          name: 'Latvia',
          price: 'from €250,000',
          time: 'from 3 months',
          image: '/images/re-latvia.webp',
          link: '/realestate/latvia',
        },
      ],
    },
  ],
    offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'High-ROI Dubai Properties',
    subtitle: 'Off-plan projects with 8-10% rental yield',
    image: '/menu/menu-dubai.webp',
    button: 'Explore Properties',
    link: '/realestate/dubai',
    variant: 'offer-realestate',
  },
};

// ----- Residency mega menu -----
export const RESIDENCY_MENU = {
  groups: [
    {
      title: 'RESIDENCY PROGRAMS',
      items: [
        { name: 'Canada', sub: 'Startup Visa, Quebec Immigrant Investor', image: '/images/res-canada.webp', link: '/residency/canada' },
        { name: 'Australia', sub: 'National Innovation Visa', image: '/images/res-australia.webp', link: '/residency/australia' },
        { name: 'New Zealand', sub: 'Investor Visa', image: '/images/res-nz.webp', link: '/residency/new-zealand' },
{ name: 'Cyprus', sub: 'Work and Residence Permit for Non-EU Investors', image: '/images/res-cyprus.webp', link: '/residency/cyprus' },
        { name: 'Malta', sub: 'Malta Permanent Residence Program', image: '/images/res-malta.webp', link: '/residency/malta' },
        { name: 'Portugal', sub: 'Golden Visa', image: '/images/res-portugal.webp', link: '/residency/portugal' },
        { name: 'Latvia', sub: 'Golden Visa', image: '/images/res-latvia.webp', link: '/residency/latvia' },
        { name: 'Italy', sub: 'Golden Visa', image: '/images/res-italy.webp', link: '/residency/italy' },
        { name: 'Spain', sub: 'Golden Visa', image: '/images/res-spain.webp', link: '/residency/spain' },
      ],
    },
  ],
    offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'Most Affordable EU Residency',
    subtitle: 'Portugal Golden Visa from €250,000',
    image: '/menu/menu-res-offer.webp',
    button: 'Explore Offer',
    link: '/residency/portugal',
    variant: 'offer-residency',
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
          image: '/images/country-australia.webp',
          link: '/pr/australia',
        },
        {
          name: 'Canada PR',
          image: '/images/country-canada.webp',
          link: '/pr/canada',
        },
      ],
    },
  ],
      offer: {
    tag: 'EXCLUSIVE OFFER',
    title: 'Fast-Track PR to Canada',
    subtitle: 'Express Entry & PNP Pathways',
    image: '/menu/menu-pr-canada-offer.webp',
    button: 'Explore Offer',
    link: '/pr/canada',
    variant: 'offer-pr',
  },
};

// ----- Other Services mega menu -----
export const OTHERSERVICES_MENU = {
  allLabel: 'All Services',
  groups: [
    {
      title: 'WHAT WE SERVE',
      items: [
        { name: 'Work Visas', image: '/images/svc-work.webp', link: '/services/work-visas' },
        { name: 'Business Visas', image: '/images/svc-business.webp', link: '/services/business-visas' },
        { name: 'Study Visas', image: '/images/svc-study.webp', link: '/services/study-visas' },
        { name: 'Investor Visas', image: '/images/svc-investor.webp', link: '/services/investor-visas' },
        { name: 'Family & Spouse Visas', image: '/images/svc-family.webp', link: '/services/family-spouse-visas' },
        { name: 'Company Setup', image: '/images/svc-company-setup.webp', link: '/services/company-setup' },
        { name: 'Digital Nomad Visas', image: '/images/svc-digital-nomad.webp', link: '/services/digital-nomad-visas' },
      ],
    },
  ],
};


export const FAQ_ITEMS = [
  {
    q: 'Which countries can I apply for citizenship or residency by investment?',
    a: 'We offer citizenship programs in Antigua & Barbuda, St. Kitts and Nevis, Malta, Vanuatu and Nauru, plus residency programs across Canada, Australia, New Zealand, Cyprus, Malta, Portugal, Latvia, Italy and Spain.',
  },
  {
    q: 'How long does the citizenship or residency process take?',
    a: 'Timelines vary by program — some Caribbean citizenship programs take as little as 3 months, while EU residency and citizenship programs can take 6 to 36 months depending on the country and route chosen.',
  },
  {
    q: 'Can I include my family in the application?',
    a: 'Yes. Most programs allow you to include your spouse, dependent children and, in several countries, parents or grandparents as part of the same application.',
  },
  {
    q: 'Do you also help with real estate investment abroad?',
    a: 'Yes, we assist with premium property investments in Dubai, Greece, Spain and Latvia — many of which also qualify for residency-by-investment programs.',
  },
  {
    q: 'What support do you provide beyond visa approval?',
    a: 'Our team offers end-to-end support — document preparation, due diligence guidance, application submission, and ongoing assistance with work visas, business visas, study visas and family/spouse visas.',
  },
];

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
  companyNumber: 'Company Incorporation Number: U74999DL2019PTC355485',
};


