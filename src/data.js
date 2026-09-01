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
// Real Estate destination artwork
export const PROPERTIES = [
  { name: 'Dubai', price: 'from AED 5M+', image: '/landing-img/Real-Dubai.webp' },
  { name: 'Greece', price: 'from €600K+', image: '/landing-img/Real-Greece.webp' },
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
    q: 'Does Dream Country Visas help with more than just Canada and Australia?',
    a: 'Yes, beyond Canada and Australia PR, we assist with Golden Visas, Citizenship by Investment, and Residency by Investment programs across the UAE, Europe, and the Caribbean.',
  },
  {
    q: 'Is a free initial consultation available?',
    a: 'Yes, we offer a free case assessment to review your eligibility and recommend the best-fit visa or investment program before you commit to any paid service.',
  },
  {
    q: 'Does Dream Country Visas handle both traditional visas and investment-based immigration?',
    a: 'Yes, we support work, study, tourist, and migration visas alongside Golden Visa, Citizenship by Investment, and Residency by Investment programs.',
  },
  {
    q: 'Is Dream Country Visas a licensed and registered immigration consultancy?',
    a: 'Yes, our advisors operate under recognized professional registration (MARA, MARN 0100178) and follow country-specific regulatory guidelines.',
  },
  {
    q: "Can Dream Country Visas help even if I'm not sure which visa is right for me?",
    a: "Yes, our team assesses your goals, background, and budget to recommend the most suitable pathway, whether that's a work visa, study visa, or investment program.",
  },
];

export const ABOUT_FAQ_ITEMS = [
  {
    q: 'Is Dream Country Visas a licensed immigration consultancy?',
    a: 'Yes, our advisors operate under recognized professional registration (MARA, MARN 0100178) and follow country-specific regulatory guidelines.',
  },
  {
    q: 'Has Dream Country Visas helped clients since before 2020?',
    a: 'Yes, the company was established in 2019 and has since helped thousands of clients pursue their immigration goals.',
  },
  {
    q: 'Does Dream Country Visas only screen high-probability cases?',
    a: 'Yes, applications are carefully screened before being taken on, rather than accepted regardless of approval likelihood.',
  },
];

// Per-country FAQ content for Citizenship country pages
export const CITIZENSHIP_FAQ = {
  'antigua-barbuda': [
    {
      q: 'How much does Antigua and Barbuda Citizenship by Investment cost?',
      a: 'The minimum investment for Antigua and Barbuda Citizenship by Investment starts from USD 230,000 through the National Development Fund contribution route. Alternative options include approved real estate investments from USD 300,000, investments in approved businesses, and contributions to the University of the West Indies Fund. Government processing, due diligence, and passport fees are payable in addition to the investment amount.',
    },
    {
      q: 'How long does it take to get Antigua and Barbuda citizenship by investment?',
      a: 'Antigua and Barbuda offers one of the fastest citizenship-by-investment programs in the Caribbean. After submitting a complete application and successfully passing due diligence checks, applicants can receive approval and citizenship within a few months, depending on the complexity of their case and document verification process.',
    },
    {
      q: 'Can family members be included in an Antigua and Barbuda citizenship application?',
      a: 'Yes. The Antigua and Barbuda Citizenship by Investment Program allows applicants to include eligible family members in a single application. This typically includes a spouse, dependent children, parents, grandparents, and other qualifying dependants, subject to program regulations and applicable fees.',
    },
    {
      q: 'Does Antigua and Barbuda allow dual citizenship?',
      a: 'Yes. Antigua and Barbuda permits dual citizenship, which means investors can generally maintain their existing citizenship while obtaining an Antigua and Barbuda passport. Applicants should also review the dual citizenship rules of their current country of nationality before applying.',
    },
    {
      q: 'What are the benefits of Antigua and Barbuda citizenship?',
      a: 'Antigua and Barbuda citizenship offers numerous advantages, including visa-free or visa-on-arrival access to many countries, the ability to live and work in Antigua and Barbuda, family inclusion benefits, favourable tax policies, and access to a stable Caribbean jurisdiction. The program is also known for its streamlined application process and flexibility for international investors.',
    },
  ],

  'st-kitts-nevis': [
    {
      q: 'Does St. Kitts and Nevis offer one of the fastest citizenship by investment programs?',
      a: 'Yes, applications are typically processed in 3 to 6 months, covering document verification, due diligence checks, and investment approval.',
    },
    {
      q: 'Is St. Kitts and Nevis citizenship worth it for visa-free travel?',
      a: "Yes, a St. Kitts and Nevis passport grants visa-free access to around 140 countries, including the UK and the EU's Schengen Area.",
    },
    {
      q: 'Are Indian citizens eligible to apply for St. Kitts and Nevis citizenship?',
      a: 'Yes, Indian applicants are eligible, provided they meet the investment, background-check, and documentation requirements through one of the three approved investment routes.',
    },
    {
      q: 'Is St. Kitts and Nevis considered a tax haven?',
      a: 'Yes, the country has no income, inheritance, or gift tax, and property tax is as low as 0.1% — though a 10% VAT applies to certain services like hotels and restaurants.',
    },
    {
      q: 'Does St. Kitts and Nevis allow dual citizenship?',
      a: 'Yes, applicants are not required to give up their existing nationality, and citizenship can even be passed on to future generations by descent.',
    },
  ],

  malta: [
    {
      q: 'How much does Malta citizenship by investment cost?',
      a: "The total cost includes a National Development and Social Fund contribution (€600,000 after 36 months' residency, or €750,000 after 12 months), a real estate investment (minimum €700,000 purchase or €16,000/year lease), and a minimum €10,000 charitable donation — plus due diligence and processing fees.",
    },
    {
      q: 'How long does it take to get Malta citizenship by investment?',
      a: 'Processing takes 12–36 months depending on the route chosen: the fast-track option (€750,000) takes roughly 14–16 months total, while the standard route (€600,000) takes about 38–40 months.',
    },
    {
      q: "What's the difference between Malta Citizenship by Investment and the Malta Permanent Residency Program (MPRP)?",
      a: 'Citizenship by Investment grants a full EU passport with visa-free access to 180+ countries but requires 12–36 months of residency and a higher investment starting at €750,000; MPRP grants long-term residency only (Schengen travel, no EU passport) with no residency requirement and a lower entry point from €100,000.',
    },
    {
      q: 'Can Indian citizens hold dual citizenship with Malta?',
      a: 'Malta allows dual citizenship, but India does not — Indian applicants must surrender their Indian passport and can instead apply for an OCI (Overseas Citizen of India) card to retain certain rights in India.',
    },
    {
      q: 'How many countries can I visit visa-free with a Malta passport?',
      a: 'A Maltese passport offers visa-free or visa-on-arrival access to 180+ destinations, including the entire Schengen Zone, the UK, Canada, Singapore, Japan, Australia, and parts of the Middle East like the UAE and Qatar.',
    },
  ],

  vanuatu: [
    {
      q: 'Is Vanuatu the fastest citizenship by investment program in the world?',
      a: "Yes, Vanuatu's Development Support Program typically processes applications in just 2–3 months, making it one of the fastest citizenship-by-investment routes globally.",
    },
    {
      q: 'Does Vanuatu allow dual citizenship?',
      a: "Yes, Vanuatu fully permits dual citizenship, so you don't need to renounce your existing nationality to become a citizen through investment.",
    },
    {
      q: 'Is Vanuatu citizenship cheaper than Caribbean or European programs?',
      a: 'Yes, Vanuatu is one of the most affordable CBI options, with donations starting around USD 130,000 — generally lower than comparable Caribbean programs and far below European Golden Visa thresholds.',
    },
    {
      q: 'Can my spouse and children be included in my Vanuatu citizenship application?',
      a: 'Yes, the program allows full family inclusion — spouses, children under 18 (or under 25 if studying), and dependent parents can all be added to a single application.',
    },
    {
      q: 'Does a Vanuatu passport allow visa-free travel to Europe?',
      a: 'Yes, Vanuatu passport holders get visa-free or visa-on-arrival access to the EU Schengen Area, the UK, and 100+ other countries including Singapore and Hong Kong.',
    },
  ],

  nauru: [
    {
      q: 'Does Nauru allow dual citizenship?',
      a: 'Yes, Nauru permits dual citizenship, so Indian and other applicants can retain their existing passport while holding Nauruan citizenship.',
    },
    {
      q: "Is Nauru's investment threshold lower than most Caribbean CBI programs?",
      a: "Yes, Nauru's donation typically starts around USD 75,000–100,000, which is generally lower than Caribbean programs like St. Kitts & Nevis (~$150,000+).",
    },
    {
      q: 'Are there travel limitations with a Nauru passport?',
      a: 'Yes, Nauru passport holders currently do not get visa-free access to the Schengen Area or the UK, and travel benefits are largely limited to Fiji, Micronesia, Samoa, and other South Pacific nations.',
    },
    {
      q: 'Can my spouse and children be included in a Nauru citizenship application?',
      a: 'Yes, the program allows family inclusion — spouse, dependent children, and dependent parents/grandparents can be added to a single application.',
    },
    {
      q: 'Is Nauru a good option for investors seeking privacy?',
      a: "Yes, Nauru's low international profile and limited applicant volume make it appealing to investors prioritizing confidentiality and asset diversification over travel-heavy passport benefits.",
    },
  ],
};


// Per-country FAQ content for Residency country pages
export const RESIDENCY_FAQ = {
  canada: [
    {
      q: 'Does the Canada Startup Visa lead directly to permanent residency?',
      a: 'Yes, unlike temporary work visas, the Startup Visa gives you, your spouse, and dependent children direct permanent residency once your application is approved.',
    },
    {
      q: 'Can I apply for the Canada Startup Visa without a university degree?',
      a: "Yes, there's no mandatory education requirement — though holding a degree or diploma can strengthen your overall application.",
    },
    {
      q: 'Is a Letter of Support required instead of a job offer?',
      a: 'Yes, applicants need a Letter of Support from a designated Canadian venture capital fund, angel investor group, or business incubator — a job offer is not required.',
    },
    {
      q: 'Can my spouse and children move to Canada with me on this visa?',
      a: 'Yes, family inclusion is built into the program — your spouse and dependent children receive permanent residency alongside you.',
    },
    {
      q: 'Can I become a Canadian citizen after getting PR through the Startup Visa?',
      a: "Yes, after holding permanent residency and meeting Canada's residency requirements, Startup Visa PR holders become eligible to apply for Canadian citizenship after about 3 years.",
    },
  ],

  australia: [
    {
      q: 'Does the Global Talent Visa lead to permanent residency?',
      a: 'Yes, the Global Talent Visa (Subclass 858) is a direct pathway to Australian PR, and eventually citizenship, for highly skilled professionals with international recognition.',
    },
    {
      q: 'Do I need a nomination to apply for the Global Talent Visa?',
      a: 'Yes, applicants must be nominated by an Australian individual or organization with a national reputation in their field before applying.',
    },
    {
      q: 'Is there an age limit for the Global Talent Visa?',
      a: 'Yes, applicants are generally expected to be under 55, though those older can still qualify by demonstrating exceptional, internationally recognized achievements.',
    },
    {
      q: 'Can my spouse and children move to Australia with me on this visa?',
      a: 'Yes, the Global Talent Visa includes family inclusion, allowing your spouse and dependent children to gain permanent residency alongside you.',
    },
    {
      q: 'Is the Global Talent Visa one of the fastest PR pathways in Australia?',
      a: 'Yes, it typically processes in 3–6 months, making it significantly faster than most other Australian PR pathways, which can take 6–24 months.',
    },
  ],

  'new-zealand': [
    {
      q: 'Does the New Zealand Golden Visa lead to permanent residency?',
      a: 'Yes, after maintaining your investment and meeting residency requirements for 4 years, you become eligible to apply for permanent residency.',
    },
    {
      q: 'Do I need to live in New Zealand to keep this visa valid?',
      a: 'Yes, you must spend a minimum of 44 to 88 days per year in New Zealand, depending on your chosen investment pathway.',
    },
    {
      q: 'Can my family be included in my New Zealand Golden Visa application?',
      a: 'Yes, you can include your spouse or partner and dependent children, with dependent parents considered on a case-by-case basis.',
    },
    {
      q: 'Is NZD 3 million the minimum investment required?',
      a: 'Yes, applicants must have a minimum of NZD 3 million available to invest in approved assets like managed funds, bonds, equities, or startups over a 4-year period.',
    },
    {
      q: 'Does the application process take over a year?',
      a: 'Yes, the total timeline typically runs 12 to 18 months, covering document preparation, investment transfer, and government processing.',
    },
  ],

  malta: [
    {
      q: 'Is Malta PR faster than other EU residency-by-investment programs?',
      a: "Yes, the fast-track option typically takes 6–8 months, compared to 12–18 months for Portugal's Golden Visa and 6–12 months for Greece's.",
    },
    {
      q: 'Can I include extended family in my Malta PR application?',
      a: 'Yes, the MPRP allows you to include your spouse, children, and even parents and grandparents under a single application.',
    },
    {
      q: 'Can I rent property instead of buying it for Malta PR?',
      a: 'Yes, you can qualify through a property rental of €10,000–€12,000 per year instead of a €300,000+ purchase, as long as you maintain it for 5 years.',
    },
    {
      q: 'Does Malta PR lead to full citizenship?',
      a: 'Yes, Malta PR holders become eligible to apply for citizenship after 5 years of residence, subject to meeting all requirements.',
    },
    {
      q: 'Can I get Malta PR without making an investment?',
      a: 'Yes, alternative routes exist — through a work permit (5 years of legal residence) or as an international student who transitions to a post-study work permit and residence.',
    },
  ],

  portugal: [
    {
      q: 'Can I still qualify for the Portugal Golden Visa without real estate investment?',
      a: 'Yes, current eligible routes include investment funds (from €500,000), capital transfer (€1,000,000), or job creation (from €250,000–€350,000) — real estate is now largely suspended except in select low-density regions.',
    },
    {
      q: 'Does the Portugal Golden Visa lead to full citizenship?',
      a: 'Yes, after 5 years of legal residence, meeting integration requirements, and basic Portuguese language proficiency, investors and their families can apply for Portuguese citizenship.',
    },
    {
      q: 'Can my family be included in my Portugal Golden Visa application?',
      a: 'Yes, your spouse or partner, dependent children, and dependent parents can all be included under one application.',
    },
    {
      q: 'Does the Portugal Golden Visa give me Schengen travel access?',
      a: 'Yes, once approved, you gain visa-free travel access to 26+ Schengen countries.',
    },
    {
      q: 'How long does the Portugal Golden Visa take to process?',
      a: 'It typically takes 6 to 12 months, though delays can occur due to high application volumes or compliance checks — working with a licensed consultant helps avoid common bottlenecks.',
    },
  ],

   cyprus: [
    {
      q: 'Is €300,000 the minimum investment for Cyprus residency?',
      a: 'Yes, the minimum is €300,000 plus VAT for a new residential property, or alternatively you can qualify through company formation with active local business operations.',
    },
    {
      q: 'Can I qualify for Cyprus residency without buying property?',
      a: 'Yes, the company formation route is an alternative — it requires setting up an active business with genuine local operations instead of a real estate purchase.',
    },
    {
      q: 'Can my spouse and children get residency with me in Cyprus?',
      a: 'Yes, the program includes residence rights for your spouse and dependent children as part of the same application.',
    },
    {
      q: 'Does Cyprus residency lead to permanent residence or citizenship?',
      a: 'Yes, the program offers a pathway to permanent residence and, eventually, citizenship, in addition to the initial residency status.',
    },
    {
      q: 'Is Cyprus one of the fastest EU residency programs to get approved?',
      a: 'Yes, standard processing takes 2–3 months, with fast-track approvals possible in as little as 2 months — among the quickest routes to EU residency available.',
    },
  ],

  latvia: [
    {
      q: 'Is Latvia one of the cheapest EU residency-by-investment routes?',
      a: "Yes, starting from €50,000 through the business investment route, Latvia is one of the most affordable EU Golden Visa programs, well below Portugal, Greece, or Malta's thresholds.",
    },
    {
      q: 'Can I qualify for Latvia residency without buying real estate?',
      a: 'Yes, alternatives to the €250,000 property route include a €50,000 business investment plus a €10,000 state contribution, a €250,000 government bond purchase, or a €280,000 bank deposit.',
    },
    {
      q: 'Does the Latvia Golden Visa give me full Schengen travel access?',
      a: 'Yes, as an EU member state, Latvia residency grants full Schengen mobility across 25+ member countries.',
    },
    {
      q: 'Do I need to live in Latvia to get permanent residency?',
      a: 'Yes, converting to permanent residency after 5 years requires staying 183+ days per year and meeting your tax obligations, in addition to holding the investment.',
    },
    {
      q: 'Can my spouse and children be included in my Latvia residency application?',
      a: 'Yes, the program allows you to include your spouse and dependent children under the same application, with separate minimum financial proof required per dependent (€4,200 for spouse, €2,520 per dependent child).',
    },
  ],

  italy: [
    {
      q: 'Is there a minimum stay requirement for the Italy Investor Visa?',
      a: "No — Italy's Investor Visa has no minimum stay requirement, making it one of the most flexible Golden Visa programs in Europe.",
    },
    {
      q: 'Can I qualify for Italy residency without buying real estate?',
      a: 'Yes, routes include a €250,000 innovative startup investment, €500,000 in Italian company shares, a €1,000,000 philanthropic donation, or €2,000,000 in government bonds — none require property purchase.',
    },
    {
      q: 'Is there a flat-tax option for new Italian residents?',
      a: "Yes, qualifying new residents can opt into a flat tax regime of €200,000 per year on foreign income, replacing Italy's standard progressive tax rates.",
    },
    {
      q: 'Does the Italy Investor Visa lead to citizenship?',
      a: 'Yes, holders become eligible for permanent residency after 5 years, and full Italian citizenship after 10 years of continuous residence.',
    },
    {
      q: 'Can my family join me on the Italy Investor Visa?',
      a: 'Yes, your spouse and family members can join under the accompanying family visa alongside your investor application.',
    },
  ],

    spain: [
    {
      q: 'Is €500,000 the minimum investment for the Spain Golden Visa?',
      a: 'Yes, real estate investment starts at €500,000, with alternative routes available through €1,000,000 in Spanish company shares or bank deposits, or €2,000,000 in government bonds.',
    },
    {
      q: 'Can I include my parents in a Spain Golden Visa application?',
      a: "Yes, Spain's program allows you to include your spouse, dependent children, and dependent parents all under one application — a wider family scope than most other Golden Visa countries.",
    },
    {
      q: 'Do I need to live in Spain to keep my Golden Visa valid?',
      a: "Yes, there's no minimum stay requirement to renew the visa, making it one of the more flexible EU residency options for investors who travel frequently.",
    },
    {
      q: 'Can I work and study in Spain with the Golden Visa?',
      a: 'Yes, the visa allows you to live, work, and study anywhere in Spain, not just reside there.',
    },
    {
      q: 'Does the Spain Golden Visa lead to citizenship?',
      a: 'Yes, holders become eligible for permanent residency after 5 years, and full Spanish citizenship after 10 years of continuous residence.',
    },
  ],
};

// FAQ shown on the Residency Overview page (/residency)
export const RESIDENCY_OVERVIEW_FAQ = [
  {
    q: 'Which countries offer residency by investment through Dream Country Visas?',
    a: 'Yes — we offer residency-by-investment programs across Canada, Australia, New Zealand, Cyprus, Malta, Portugal, Latvia, Italy, and Spain, alongside citizenship programs in Antigua & Barbuda, St. Kitts and Nevis, Malta, Vanuatu, and Nauru.',
  },
  {
    q: 'Is there a residency option under €100,000?',
    a: "Yes, Latvia's business investment route starts from just €50,000, making it the most affordable residency-by-investment program in our portfolio.",
  },
  {
    q: 'Can I compare processing times across different countries before choosing?',
    a: 'Yes — for example, Cyprus and Spain approve in 2–3 months, Italy in 3–4 months, and Latvia in as little as 30 days, so timeline can be a key factor in choosing between programs.',
  },
  {
    q: 'Do all these residency programs lead to citizenship eventually?',
    a: 'Yes, most European programs (Cyprus, Malta, Portugal, Latvia, Italy, Spain) offer a path to citizenship after 5–10 years, though timelines and requirements vary by country.',
  },
  {
    q: 'Can my family be included across all these residency programs?',
    a: 'Yes, every program listed allows you to include your spouse and dependent children, and several — including Spain and Latvia — also allow dependent parents.',
  },
];

// FAQ shown on the Citizenship Overview page (/citizenship)
export const CITIZENSHIP_OVERVIEW_FAQ = [
  {
    q: 'Is Nauru the cheapest citizenship by investment program you offer?',
    a: "Yes, Nauru's Exclusive Pacific Citizenship Program starts from $75,000, making it the most affordable option in our current portfolio, followed by Vanuatu at $130,000.",
  },
  {
    q: 'Is Vanuatu the fastest citizenship by investment program you offer?',
    a: "Yes, Vanuatu's Development Support Program (DSP) processes in just 2–3 months, the quickest turnaround among all five programs listed.",
  },
  {
    q: 'Can I include my family in a citizenship or residency by investment application?',
    a: 'Yes, most programs allow you to include your spouse, dependent children, and in several countries, parents or grandparents, under the same application.',
  },
  {
    q: 'Do you also help with real estate investment abroad alongside citizenship applications?',
    a: 'Yes, we assist with premium property investments in Dubai, Greece, and Latvia, many of which also qualify for residency-by-investment programs.',
  },
  {
    q: 'Which citizenship program has the highest investment threshold?',
    a: 'Malta has the highest entry point at €600,000, with processing taking 12–36 months — significantly more than the Caribbean or Pacific options, reflecting its status as a full EU citizenship.',
  },
];

// FAQ shown on the Real Estate Overview page (/realestate)
export const REALESTATE_OVERVIEW_FAQ = [
  {
    q: 'Is Dubai real estate ready to move in immediately?',
    a: 'Yes, our Dubai property investments start from AED 1.5 million and are ready-to-move, unlike many off-plan options elsewhere in the market.',
  },
  {
    q: 'Does buying real estate in Greece or Latvia also qualify me for residency?',
    a: 'Yes, both the Greece Golden Visa (from €250,000) and the Latvia property route (from €250,000) grant you a residence permit alongside property ownership.',
  },
  {
    q: 'Which real estate investment has the fastest residency processing time?',
    a: 'Yes, Latvia is the fastest of the three, with residency processing starting from just 3 months, compared to 4+ months for Greece.',
  },
  {
    q: 'Do I need to live in the property I purchase?',
    a: 'No — real estate purchased under these programs is an investment vehicle for residency purposes and does not require you to live in it full-time, though usage rules vary by country and program.',
  },
  {
    q: 'Can I generate rental income from these properties while holding residency?',
    a: 'Yes, all three destinations (Dubai, Greece, and Latvia) are established rental markets, and property investors can typically rent out their units while maintaining their residency status.',
  },
];

// FAQ shown on the PR Overview page (/pr)
export const PR_OVERVIEW_FAQ = [
  {
    q: 'Which countries offer permanent residency through skilled migration?',
    a: 'Yes — we currently offer PR pathways for Australia and Canada, both through points-based skilled migration systems designed for long-term settlement.',
  },
  {
    q: 'Is Canada or Australia faster for getting PR?',
    a: "It depends on your profile — Canada PR typically processes in 6–8 months once you have an Invitation to Apply, while Australia's timeline varies more by visa subclass and occupation demand; a free consultation can clarify which suits your situation better.",
  },
  {
    q: 'Can my spouse and children be included in a PR application?',
    a: "Yes, both Australia and Canada's PR pathways allow you to include your spouse and dependent children as part of the same application.",
  },
  {
    q: 'Does PR status lead to full citizenship?',
    a: "Yes, in both Australia and Canada, permanent residents become eligible to apply for citizenship after meeting the country's required residency period and other conditions.",
  },
  {
    q: 'Do I need a job offer to qualify for PR in Australia or Canada?',
    a: "Not necessarily — Canada's Express Entry doesn't require a job offer, and several Australian skilled visa subclasses (like 189) also don't require sponsorship, though having one can strengthen certain applications.",
  },
];


// Per-country FAQ content for Real Estate country pages
export const REALESTATE_FAQ = {
  dubai: [
    {
      q: 'Is the UAE Golden Visa a residency visa rather than a path to citizenship?',
      a: 'Yes, the UAE Golden Visa grants long-term residency rights but does not lead to UAE citizenship under current law — it offers permanent-residency-style benefits without nationality.',
    },
    {
      q: 'Can I get the UAE Golden Visa without a local sponsor?',
      a: "Yes, unlike standard UAE residence visas, the Golden Visa doesn't require sponsorship from a local employer or citizen.",
    },
    {
      q: 'Can my family be included in my UAE Golden Visa application?',
      a: 'Yes, spouses and children can be included, and in some cases parents as well, all under sponsor-free residency.',
    },
    {
      q: 'Can I qualify for the UAE Golden Visa through real estate investment?',
      a: 'Yes, a minimum property investment of AED 2,000,000 (roughly USD 545,000), retained for at least 3 years, qualifies you for the real estate category.',
    },
    {
      q: 'Is the UAE Golden Visa renewable?',
      a: "Yes, it's issued for 10 years and is renewable, as long as you continue to meet the eligibility requirements for your category.",
    },
  ],

  greece: [
    {
      q: 'Is €500,000 the minimum investment for the Greece Golden Visa?',
      a: 'Yes, from 2025 the minimum property investment in prime zones (like central Athens) is €500,000, though some regions like Crete or the Peloponnese allow entry from €250,000.',
    },
    {
      q: 'Can I keep my Greek residency without living there full-time?',
      a: 'Yes, the Greece Golden Visa has no minimum stay requirement to maintain your residence permit, making it one of the more flexible EU options.',
    },
    {
      q: 'Does the Greece Golden Visa lead to full citizenship?',
      a: 'Yes, after maintaining lawful residence for 7 years and meeting integration requirements including basic Greek language knowledge, you can apply for citizenship.',
    },
    {
      q: 'Can my family be included in my Greece Golden Visa application?',
      a: 'Yes, your spouse or partner, children up to 21–24 years old, and dependent parents can all be included.',
    },
    {
      q: 'Does a Greek residence permit give access to the wider Schengen Area?',
      a: 'Yes, it grants visa-free travel across 25+ Schengen countries, not just Greece.',
    },
  ],

  latvia: [
    {
      q: 'Can I get Latvia residency by buying property?',
      a: 'Yes, a real estate investment of at least €250,000 plus a 5% state fee qualifies you for a Latvian residence permit, provided you hold onto the property for as long as you want to keep it.',
    },
    {
      q: 'Does the €50,000 business investment option require ongoing payments?',
      a: 'Yes, beyond the initial €50,000 investment, you must pay €40,000 annually to maintain residency plus a one-time €10,000 contribution to the state budget.',
    },
    {
      q: 'Is only minimal physical presence required to maintain the Latvia Golden Visa?',
      a: "Yes, day-to-day residency requirements are minimal, though to convert to permanent residency after 5 years you'll need to have spent at least 183 days per year in the country.",
    },
    {
      q: 'Does the Latvia Golden Visa offer a path to EU citizenship?',
      a: 'Yes, maintaining your investment and residency status over time can lead to Latvian citizenship and full Schengen-area rights.',
    },
    {
      q: "Is Latvia's Golden Visa processing time relatively fast?",
      a: 'Yes, processing typically takes between 30 days and 6 months, making it one of the quicker EU residency-by-investment options.',
    },
  ],
};

// Per-country FAQ content for PR country pages
export const PR_FAQ = {
  australia: [
    {
      q: 'Can I get Australia PR without needing an employer, state, or family sponsor?',
      a: 'Yes, the Subclass 189 (Skilled Independent) visa lets eligible skilled workers apply purely on points, without any sponsorship, and live and work anywhere in Australia.',
    },
    {
      q: 'Does the Subclass 190 visa require me to live in a specific state?',
      a: "Yes, since it requires nomination by an Australian state or territory, you're generally required to live and work there for a certain period after arrival.",
    },
    {
      q: 'Can the Subclass 491 regional visa lead to permanent residency?',
      a: 'Yes, after meeting regional living and working conditions for 3 years, Subclass 491 holders can apply for a permanent visa.',
    },
    {
      q: 'Is Australia PR points-based?',
      a: 'Yes, most pathways (189, 190, 491) rank candidates using a points test based on age, English proficiency, skilled work experience, and other factors, with invitations issued to top scorers.',
    },
    {
      q: 'Does Australia PR lead to citizenship?',
      a: 'Yes, PR holders become eligible to apply for Australian citizenship once they fulfil the required residency period and other eligibility conditions.',
    },
  ],

  canada: [
    {
      q: 'Is Express Entry the main pathway to Canada PR?',
      a: 'Yes, Express Entry is the primary system, covering the Federal Skilled Worker Program (FSWP) and Canadian Experience Class (CEC), with candidates ranked by their Comprehensive Ranking System (CRS) score.',
    },
    {
      q: 'Can provincial nomination improve my chances of getting Canada PR?',
      a: "Yes, a Provincial Nominee Program (PNP) nomination adds significant CRS points, and if you're nominated by a specific province based on its labour market needs, it can substantially boost your ranking in Express Entry draws.",
    },
    {
      q: 'Can I include my spouse and children in my Canada PR application?',
      a: 'Yes, the application allows you to bring your spouse and dependent children at no extra eligibility hurdle, and their profiles can also affect your combined CRS score.',
    },
    {
      q: 'Does Canada PR give me access to public healthcare?',
      a: "Yes, permanent residents gain access to Canada's public healthcare system and other social benefits, alongside the right to live, work, and study anywhere in the country.",
    },
    {
      q: 'Does Canada PR lead to full citizenship?',
      a: 'Yes, PR holders become eligible to apply for Canadian citizenship after meeting the required residency period and other eligibility conditions.',
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
  companyNumber: 'Company Incorporation Number: U74999DL2019PTC355485',
};


