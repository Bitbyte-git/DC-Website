import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// =====================================================================
// ALL legal/policy pages live in this ONE file — same pattern as the
// other "one file per section" pages in this project.
//
//   /policies/privacy-policy      -> Privacy Policy
//   /policies/terms-of-service    -> Terms of Service
//   /policies/refund-policy       -> Refund Policy
// =====================================================================

function P({ children }) {
  return <p>{children}</p>;
}

function List({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

const POLICIES = {
  'privacy-policy': {
    title: 'Privacy Policy',
    body: (
      <>
        <P>
          Dream Country Visas is committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and disclose your
          personal information when you visit our website or interact with
          our services.
        </P>

        <h3>Information We Collect</h3>
        <P>We may collect the following types of personal information from you:</P>
        <List
          items={[
            'Information you provide: This includes details you voluntarily provide when contacting us, creating an account, or using our services. It may include your name, email address, phone number, passport information, and other relevant details for your immigration application.',
            'Information collected automatically: When you visit our website, we may automatically collect information about your device, such as IP address, browser type, operating system, and referring website. We may also use cookies and similar technologies to track your activities.',
          ]}
        />

        <h3>How We Use Your Information</h3>
        <P>We may use your personal information for the following purposes:</P>
        <List
          items={[
            'To provide our services: We use your information to process your immigration application, communicate with you, and provide updates on your application status.',
            'To improve our services: We analyze and enhance our website and services using collected data.',
            'To communicate with you: We may send important notifications, updates, and marketing communications.',
            'To comply with legal requirements: Your information may be used to meet applicable laws and regulations.',
          ]}
        />

        <h3>Disclosure of Your Information</h3>
        <P>We may disclose your personal information to:</P>
        <List
          items={[
            'Third-party service providers: We may share your information with service providers such as payment processors and immigration consultants to deliver our services.',
            'Government agencies: Information may be disclosed to government agencies when required by law or for law enforcement cooperation.',
            'Other parties with your consent: We may share your information with other entities upon your explicit consent.',
          ]}
        />

        <h3>Data Security</h3>
        <P>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, and
          destruction. However, no method of transmission over the internet
          or electronic storage is completely secure, and there is always a
          risk of unauthorized access.
        </P>

        <h3>Your Rights</h3>
        <P>You have the right to:</P>
        <List
          items={[
            'Access: Request access to the personal information we hold about you.',
            'Rectification: Request correction of any inaccurate or incomplete personal data.',
            'Erasure: Request deletion of your personal data under certain circumstances.',
            'Restriction of processing: Request limited processing of your personal information under certain conditions.',
            'Data portability: Request transfer of your personal information to another organization in a structured, machine-readable format.',
            'Object to processing: Object to the processing of your personal data for specific purposes, such as direct marketing.',
          ]}
        />
      </>
    ),
  },

  'terms-of-service': {
    title: 'Terms of Service',
    body: (
      <>
        <h3>Overview</h3>
        <P>
          This website is operated by Dreamcountry Visas Private Limited.
          Throughout the site, the terms "we", "us" and "our" refer to
          Dreamcountry Visas Private Limited. Dreamcountry Visas Private
          Limited offers this website, including all information, tools and
          services available from this site to you, the user, conditioned
          upon your acceptance of all terms, conditions, policies and
          notices stated here.
        </P>
        <P>
          By visiting our site and/or purchasing something from us, you
          engage in our "Service" and agree to be bound by the following
          terms and conditions ("Terms of Service", "Terms"), including
          those additional terms and conditions and policies referenced
          herein and/or available by hyperlink. These Terms of Service apply
          to all users of the site, including without limitation users who
          are browsers, vendors, customers, merchants, and/or contributors
          of content.
        </P>
        <P>
          Please read these Terms of Service carefully before accessing or
          using our website. By accessing or using any part of the site, you
          agree to be bound by these Terms of Service. If you do not agree
          to all the terms and conditions of this agreement, then you may
          not access the website or use any services.
        </P>

        <h3>Section 1 — Online Store Terms</h3>
        <P>
          By agreeing to these Terms of Service, you represent that you are
          at least the age of majority in your state or province of
          residence, or that you have given us your consent to allow any of
          your minor dependents to use this site.
        </P>
        <P>
          You may not use our products for any illegal or unauthorized
          purpose nor may you, in the use of the Service, violate any laws
          in your jurisdiction. You must not transmit any worms or viruses
          or any code of a destructive nature. A breach or violation of any
          of the Terms will result in an immediate termination of your
          Services.
        </P>

        <h3>Section 2 — General Conditions</h3>
        <P>
          We reserve the right to refuse service to anyone for any reason at
          any time. You agree not to reproduce, duplicate, copy, sell,
          resell or exploit any portion of the Service without express
          written permission by us.
        </P>

        <h3>Section 3 — Accuracy, Completeness and Timeliness of Information</h3>
        <P>
          We are not responsible if information made available on this site
          is not accurate, complete or current. Any reliance on the
          material on this site is at your own risk. We reserve the right to
          modify the contents of this site at any time.
        </P>

        <h3>Section 4 — Modifications to the Service and Prices</h3>
        <P>
          Prices for our products are subject to change without notice. We
          reserve the right at any time to modify or discontinue the Service
          without notice and shall not be liable for any such modification,
          suspension or discontinuance.
        </P>

        <h3>Section 5 — Products or Services</h3>
        <P>
          Certain products or services may be available exclusively online.
          We reserve the right to limit the sales of our products or
          Services to any person, geographic region or jurisdiction, and to
          discontinue any product at any time.
        </P>

        <h3>Section 6 — Accuracy of Billing and Account Information</h3>
        <P>
          You agree to provide current, complete and accurate purchase and
          account information for all purchases made through us, and to
          promptly update your information as needed.
        </P>

        <h3>Section 7 — Optional Tools</h3>
        <P>
          We may provide access to third-party tools over which we neither
          monitor nor have any control. Any use of such tools is entirely at
          your own risk.
        </P>

        <h3>Section 8 — Third-Party Links</h3>
        <P>
          Third-party links on this site may direct you to websites not
          affiliated with us. We are not responsible for the content,
          accuracy, products or services of any third-party.
        </P>

        <h3>Section 9 — User Comments, Feedback and Other Submissions</h3>
        <P>
          If you send us creative ideas, suggestions, proposals or other
          materials, you agree that we may use them in any medium without
          restriction, compensation, or obligation to respond.
        </P>

        <h3>Section 10 — Personal Information</h3>
        <P>
          Your submission of personal information through the site is
          governed by our Privacy Policy.
        </P>

        <h3>Section 11 — Errors, Inaccuracies and Omissions</h3>
        <P>
          Occasionally there may be typographical errors, inaccuracies or
          omissions on our site. We reserve the right to correct these and
          to change or update information at any time without prior notice.
        </P>

        <h3>Section 12 — Prohibited Uses</h3>
        <P>
          In addition to other prohibitions set forth in these Terms, you
          are prohibited from using the site or its content:
        </P>
        <List
          items={[
            'For any unlawful purpose',
            'To solicit others to perform or participate in any unlawful acts',
            'To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances',
            'To infringe upon or violate our intellectual property rights or the intellectual property rights of others',
            'To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate',
            'To submit false or misleading information',
            'To upload or transmit viruses or any other type of malicious code',
            'To collect or track the personal information of others',
            'To spam, phish, pharm, pretext, spider, crawl, or scrape',
            'For any obscene or immoral purpose',
            'To interfere with or circumvent the security features of the Service',
          ]}
        />

        <h3>Section 13 — Disclaimer of Warranties; Limitation of Liability</h3>
        <P>
          We do not guarantee that your use of our service will be
          uninterrupted, timely, secure or error-free. The service is
          provided "as is" and "as available" without warranties of any
          kind. In no case shall Dreamcountry Visas Private Limited be
          liable for any direct, indirect, incidental, punitive, special, or
          consequential damages arising from your use of the service.
        </P>

        <h3>Section 14 — Indemnification</h3>
        <P>
          You agree to indemnify, defend and hold harmless Dreamcountry
          Visas Private Limited and our affiliates from any claim or demand
          made by any third-party due to your breach of these Terms or
          violation of any law or the rights of a third-party.
        </P>

        <h3>Section 15 — Severability</h3>
        <P>
          In the event that any provision of these Terms of Service is
          determined to be unlawful, void or unenforceable, that provision
          shall be severed without affecting the validity of the remaining
          provisions.
        </P>

        <h3>Section 16 — Termination</h3>
        <P>
          These Terms of Service are effective unless and until terminated
          by either you or us. We may terminate this agreement at any time
          without notice if you fail to comply with any term or provision.
        </P>

        <h3>Section 17 — Entire Agreement</h3>
        <P>
          These Terms of Service and any policies posted by us constitute
          the entire agreement between you and us, superseding any prior
          agreements, whether oral or written.
        </P>

        <h3>Section 18 — Governing Law</h3>
        <P>
          These Terms of Service shall be governed by and construed in
          accordance with the laws of India and the jurisdiction of Jaipur,
          Rajasthan.
        </P>

        <h3>Section 19 — Changes to Terms of Service</h3>
        <P>
          We reserve the right, at our sole discretion, to update, change or
          replace any part of these Terms of Service by posting updates to
          our website. It is your responsibility to check our website
          periodically for changes.
        </P>

        <h3>Section 20 — Contact Information</h3>
        <P>
          Questions about the Terms of Service should be sent to us at{' '}
          info@dreamcountryvisas.com
        </P>
      </>
    ),
  },

  'refund-policy': {
    title: 'Refund Policy',
    body: (
      <>
        <P>
          Dreamcountry Visas will not, under any circumstances, issue
          refunds for early/premature service withdrawal by the Applicant.
        </P>
        <P>
          When you use this site, for any sort of information, it does not,
          by design, establish an advisor-client or consultant-client
          association between Dreamcountry Visas and you, the
          guest/reader/user. Such an association may occur only where an
          advisory/consulting charge is given to Dreamcountry Visas. If a
          visit results in an advisor-client relationship, the client
          concurs with the following refund policy for consulting:
        </P>
        <P>
          An advisor-client association is subject to a separate Contract of
          Engagement (COE) between Dreamcountry Visas and the client. The
          terms, conditions and refund policy of that agreement are fully
          autonomous of the terms of usage of this website.
        </P>
        <P>
          Since the COE may vary from one client to another, it is the
          client's responsibility to formally request a draft copy of the
          COE — including its refund policy annexure — evaluate it, and only
          then settle fees with Dreamcountry Visas.
        </P>
        <P>
          The client will provide every required document and information,
          including English translations, as sought by Dreamcountry Visas
          and the concerned Visa Office. Dreamcountry Visas' agreement is
          based on the facts and documents presented; if information is
          later found to be inaccurate, fake, deficient or incorrect and the
          petition is rejected on that basis, no refund shall be claimed of
          the consulting charge or any amounts paid to government
          organizations.
        </P>
        <P>
          Dreamcountry Visas' mandate is limited to assisting the client on
          the phases duly instructed in the COE, and only for the phases for
          which fees have been paid.
        </P>
        <P>
          Dreamcountry Visas has no control over adverse changes to
          selection criteria, pass marks, or new regulations introduced
          after the COE is signed or after a petition is submitted.
        </P>
        <P>
          Government and skills-evaluation agency charges may change at the
          sole discretion of those bodies; Dreamcountry Visas has no control
          over such changes. The client shall bear all such charges.
          Dreamcountry Visas does not guarantee that any petition will
          succeed.
        </P>
        <P>
          The client must truthfully disclose all past or existing cases of
          wrongdoing, conviction, or insolvency involving the client or
          dependents. Failure to disclose, if discovered later, forfeits all
          refunds.
        </P>
        <P>
          The client must provide, within 30 days, all documents and facts
          needed for Dreamcountry Visas to present the petition to the
          relevant assessment organization. Failure to do so forfeits any
          refund of advisory/consulting fees.
        </P>
        <P>
          The client must notify Dreamcountry Visas, in writing or by phone,
          of any communication received from the processing visa office
          within 7 days of receipt — and likewise notify Dreamcountry Visas
          of any direct communication (including visits or calls) made to
          the visa office within 7 days. Failure to do so forfeits any
          refund.
        </P>
        <P>
          The client will attend every interview required by the concerned
          visa agency, at their own cost, and follow all instructions given.
          Failure to do so forfeits any refund.
        </P>
        <P>
          The client must demonstrate possession of required liquid funds as
          per the relevant visa policy, at any point during processing.
          Failure to do so forfeits any refund.
        </P>
        <P>
          The client will settle all charges owed to government bodies,
          skills-assessment organizations and language-testing bodies (e.g.
          skills assessment costs, visa petition costs, IELTS, medical
          tests). These charges are strictly non-refundable and
          non-adjustable regardless of the outcome of the visa petition.
        </P>
        <P>
          The client must promptly inform Dreamcountry Visas of any change
          in address, qualifications, marital status, employment, new
          dependents, or any police/legal case — from petition submission
          until the grant of the Permanent Resident Permit. Failure to do so
          forfeits any refund.
        </P>
        <P>
          Dreamcountry Visas offers no assurance of employment or job
          guarantee following visa approval or landing abroad. No refund
          will be claimed on the basis that Dreamcountry Visas could not
          provide a job guarantee.
        </P>
        <P>
          In the event of any dispute regarding payments made under a COE,
          Dreamcountry Visas' liability, if any, shall not exceed the
          advisory/consulting charges paid under that COE.
        </P>
      </>
    ),
  },
};

export default function PolicyPage() {
  const { slug } = useParams();
  const policy = POLICIES[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!policy) {
    return (
      <div className="container country-notfound">
        <h2>Page not found</h2>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="policy-page">
      <div className="policy-hero">
        <div className="container">
          <p className="section-tag left">LEGAL</p>
          <h1>{policy.title}</h1>
        </div>
      </div>
      <div className="container policy-body">{policy.body}</div>
    </div>
  );
}