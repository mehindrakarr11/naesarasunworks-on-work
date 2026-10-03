const streetLightOptions = ['18W', '20W', '24W', '30W', '50W']

const services = [
  {
    number: '01',
    title: 'Solar operations & maintenance',
    description:
      'Preventative and corrective maintenance, cleaning, performance monitoring, upgrades and warranty-management support.',
  },
  {
    number: '02',
    title: 'Solar CCTV installation',
    description:
      'Solar-powered surveillance for locations where conventional power may be unavailable or unreliable.',
  },
  {
    number: '03',
    title: 'Rooftop plant liaison',
    description:
      'Coordination, approvals, documentation, stakeholder communication and project support.',
  },
  {
    number: '04',
    title: 'Solar plant optimisation',
    description:
      'Monitoring, predictive maintenance, energy management, system upgrades and site-specific optimisation.',
  },
  {
    number: '05',
    title: 'Solar plant cleaning',
    description:
      'Inspection, suitable cleaning methods, scheduling and upkeep for residential, commercial and utility-scale installations.',
  },
]

function SolarIllustration() {
  return (
    <svg
      className="solar-illustration"
      viewBox="0 0 560 470"
      role="img"
      aria-labelledby="solar-illustration-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="solar-illustration-title">
        Illustration of the sun rising behind a row of solar panels
      </title>
      <defs>
        <linearGradient id="sky" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#fffdf7" />
          <stop offset="1" stopColor="#e5f0e9" />
        </linearGradient>
        <linearGradient id="sun" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f7cc79" />
          <stop offset="1" stopColor="#df9440" />
        </linearGradient>
        <linearGradient id="panel" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#246a68" />
          <stop offset="1" stopColor="#123d47" />
        </linearGradient>
        <filter id="blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="24" />
        </filter>
      </defs>
      <rect x="18" y="18" width="524" height="434" rx="32" fill="url(#sky)" />
      <circle cx="369" cy="164" r="102" fill="#e7b761" opacity=".18" filter="url(#blur)" />
      <circle cx="369" cy="164" r="65" fill="url(#sun)" />
      <path d="M64 292c53-28 90-40 136-33 38 6 59 31 97 26 42-5 74-42 122-35 25 4 47 18 77 20v129H64V292Z" fill="#dce9dd" />
      <path d="m117 300 319 0 60 106H64l53-106Z" fill="url(#panel)" />
      <path d="m147 300-44 106m101-106-20 106m80-106 5 106m52-106 29 106m23-106 52 106M102 335h373m-391 36h411" stroke="#d5e8df" strokeOpacity=".52" strokeWidth="2" />
      <path d="M109 410h394" stroke="#123d47" strokeLinecap="round" strokeOpacity=".3" strokeWidth="8" />
      <path d="M190 225v44m0-44-22 22m22-22 22 22m62-66v54m0-54-27 27m27-27 27 27" fill="none" stroke="#4b8273" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".65" strokeWidth="2" />
      <circle cx="97" cy="124" r="3" fill="#db9e45" />
      <circle cx="462" cy="253" r="4" fill="#db9e45" />
      <circle cx="137" cy="215" r="2.5" fill="#4b8273" />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#home" aria-label="Naesara Sunworks home">
          <img
            className="brand-logo"
            src="/naesara-sunworks-logo.png"
            alt="Naesara Sunworks — Sun at your Service"
            width="706"
            height="198"
          />
        </a>
        <a className="header-contact" href="#contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="sun-dot" aria-hidden="true" />
              WEBSITE UNDER CONSTRUCTION
            </p>
            <h1 id="hero-heading">Website under construction.</h1>
            <p className="hero-description">
              We’re refreshing our online home. Naesara Sunworks continues to help homes and
              businesses explore practical solar-energy and IT solutions across Karnataka and Tamil
              Nadu.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+919845675213">
                Call our team <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="mailto:chida@naesarasunworks.com">
                Email us
              </a>
            </div>
            <p className="hero-local-note">
              <span aria-hidden="true">⌖</span> Based in Bengaluru, serving Karnataka &amp; Tamil Nadu
            </p>
          </div>
          <div className="hero-art">
            <SolarIllustration />
            <p className="art-caption">
              <span className="caption-rule" aria-hidden="true" />
              Practical energy. Thoughtfully delivered.
            </p>
          </div>
        </section>

        <section className="offerings-section section-block" aria-labelledby="offerings-heading">
          <div className="section-heading">
            <p className="section-kicker">WHAT WE DO</p>
            <h2 id="offerings-heading">Solutions for everyday energy needs.</h2>
            <p>
              Explore our solar products and services while we work on a refreshed website.
            </p>
          </div>

          <div className="product-grid">
            <article className="product-card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 4v10m0 0-5 5m5-5 5 5M8 23h16l3 5H5l3-5Z" />
                  <path d="M12 23v5m8-5v5M16 4l-2 4h4l-2 6" />
                </svg>
              </span>
              <h3>Solar street lights</h3>
              <p>
                All-in-one and semi-integrated options in the listed wattages, plus solar street
                lights with CCTV.
              </p>
              <div className="option-group">
                <span className="option-label">Listed wattage options</span>
                <ul className="chip-list" aria-label="Listed wattage options">
                  {streetLightOptions.map((wattage) => (
                    <li key={wattage}>{wattage}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="product-card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="m4 13 12-7 12 7M7 13v13h18V13M11 26V16h10v10" />
                  <path d="m12 4-2 4h4l-2 4m10-8-2 4h4l-2 4" />
                </svg>
              </span>
              <h3>Solar rooftop power plants</h3>
              <p>Options to suit different site and energy requirements.</p>
              <ul className="chip-list" aria-label="Rooftop plant types">
                <li>On-grid</li>
                <li>Off-grid</li>
                <li>Hybrid</li>
              </ul>
            </article>

            <article className="product-card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M6 14h20v14H6zM9 14V9a7 7 0 0 1 14 0v5M10 19h12M10 23h12" />
                  <path d="M12 4 10 7h4l-2 4m8-7-2 3h4l-2 4" />
                </svg>
              </span>
              <h3>Solar water heaters</h3>
              <p>Flat Plate Collector (FPC) and Evacuated Tube Collector (ETC).</p>
              <p className="capacity-note">Catalogue capacities range from 100 to 500 LPD; availability varies by configuration.</p>
            </article>
          </div>
        </section>

        <section className="services-section section-block" aria-labelledby="services-heading">
          <div className="section-heading section-heading-inline">
            <div>
              <p className="section-kicker">SUPPORT THROUGH THE LIFECYCLE</p>
              <h2 id="services-heading">Solar services, made practical.</h2>
            </div>
            <p>Support shaped around your installation, site and needs.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="it-section" aria-labelledby="it-heading">
          <div className="it-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="section-kicker">ALSO FROM NAESARA</p>
            <h2 id="it-heading">IT solutions</h2>
            <p>
              Naesara Sunworks also provides IT solutions. More information will be shared as our
              website is refreshed.
            </p>
          </div>
        </section>

        <section className="purpose-section" aria-labelledby="purpose-heading">
          <div className="purpose-sun" aria-hidden="true">
            <span />
          </div>
          <div className="purpose-copy">
            <p className="section-kicker">SUN AT YOUR SERVICE</p>
            <h2 id="purpose-heading">A more sustainable future, built together.</h2>
            <p>
              We focus on sustainable, durable and cost-effective energy and IT solutions, tailored
              for homes and businesses. Our mission is to support a self-sustainable, lower-carbon
              future and help make useful solutions more accessible. Our vision is to be a leading
              provider of sustainable energy and IT solutions, delivering innovative technologies.
            </p>
          </div>
        </section>

        <section className="contact-section section-block" id="contact" aria-labelledby="contact-heading">
          <div className="contact-intro">
            <p className="section-kicker">LET’S TALK</p>
            <h2 id="contact-heading">Our team is here to help.</h2>
            <p>Get in touch to discuss solar energy or IT solutions for your home or business.</p>
            <a className="button button-primary contact-call" href="tel:+919845675213">
              Call +91 98456 75213 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Call us</h3>
              <a href="tel:+919845675213">+91 98456 75213</a>
              <a href="tel:+918660111453">+91 86601 11453</a>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:chida@naesarasunworks.com">chida@naesarasunworks.com</a>
              <a href="mailto:chidu.ts@gmail.com">chidu.ts@gmail.com</a>
              <a href="mailto:naesarasunworks@gmail.com">naesarasunworks@gmail.com</a>
            </div>
            <div className="contact-item contact-address">
              <h3>Visit</h3>
              <address>
                No. 06, Ground Floor, ISR Uttam Apartments,
                <br />
                Bangalore, Karnataka, India – 560062.
              </address>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          <img
            src="/naesara-sunworks-logo.png"
            alt="Naesara Sunworks — Sun at your Service"
            width="706"
            height="198"
          />
        </a>
        <small>© 2026 Naesara Sunworks. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App
