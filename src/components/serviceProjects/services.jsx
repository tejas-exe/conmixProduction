import React from "react";
import s from "./style.module.css";

const ongoingProjects = [
  {
    title: "Vaishnodevi Kingsley",
    image: "/g1.jpeg",
    alt: "Vaishnodevi group",
    link: "https://www.vaishnodevirealty.com/kingsley",
  },
  {
    title: "DMD Aura",
    image: "/g2.jpeg",
    alt: "DMD Developers",
    link: "https://www.dmddevelopers.com/project/dmd-aura",
  },
  {
    title: "Sangini Group Sunidhi Spinning",
    image: "/g3.jpeg",
    alt: "Sangini Group",
    link: "https://www.sanginigroup.com/",
  },
  {
    title: "Rajhans Zesto",
    image: "/g4.jpeg",
    alt: "Rajhans Desai-jain Group",
    link: "https://rajhansrealty.co.in/zesto.aspx",
  },
  {
    title: "Santvan Newon",
    image: "/g5.jpeg",
    alt: "Santvan",
    link: "https://www.santvangroup.com/",
  },
];

const customers = [
  {
    title: "Anjani Group",
    image: "/c1.jpeg",
    alt: "Anjani Group logo",
    desc: "Contact Person: Jayanti Bhai Aklera",
  },
  {
    title: "SNS Group",
    image: "/c2.jpeg",
    alt: "SNS Group logo",
    desc: "Contact Person: Harshil Bhai | Bhavesh Bhai",
  },
  {
    title: "Raghuvir Group",
    image: "/c3.jpeg",
    alt: "Raghuvir Group logo",
    desc: "Contact Person: Shivlal Bhai | Asodaria Bhai",
  },
  {
    title: "Vasupujya Group",
    image: "/c4.jpeg",
    alt: "Vasupujya Group logo",
    desc: "Contact Person: Mafat Bhai Siroya",
  },
  {
    title: "Imperial Developers",
    image: "/c5.jpeg",
    alt: "Imperial Developers logo",
    desc: "Contact Person: Dipen Bhai | Kamlesh Bhai",
  },
];

const serviceHighlights = [
  { value: "Live", label: "Project supply coordination" },
  { value: "Trusted", label: "Developer relationships" },
  { value: "Reliable", label: "Concrete delivery cadence" },
];

const Services = () => {
  return (
    <section className={s.servicesPage}>
      <div className={s.glowTop} />
      <div className={s.glowBottom} />

      <div className={s.sectionShell}>
        <div className={s.services1}>
          <span className={s.servicesBtn}>Services</span>
          <h1 className={s.ourCustomersTitle}>Ongoing Projects</h1>
          <p className={s.sectionLead}>
            Active project support backed by responsive dispatch, dependable
            batching, and quality-ready concrete solutions for fast-moving
            construction teams.
          </p>

          <div className={s.highlightStrip}>
            {serviceHighlights.map((item) => (
              <div key={item.label} className={s.highlightCard}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={s.ongoingitems}>
          {ongoingProjects.map((project) => (
            <div className={s.projectGridItem} key={project.title}>
              <article className={s.projectCard}>
                <div className={s.projectImageWrap}>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className={s.projectImage}
                  />
                </div>
                <div className={s.projectBody}>
                  <span className={s.cardTag}>Active project</span>
                  <h3 className={s.projectTitle}>{project.title}</h3>
                  <a
                    className={s.projectLink}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Know More
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className={s.customerSection}>
        <div className={s.customerIntro}>
          <span className={s.servicesBtn}>Our Network</span>
          <h2 className={s.customerTitle}>Our Valued Customers</h2>
          <p className={s.customerLead}>
            Partnerships built on consistency, delivery confidence, and concrete
            performance that supports repeat collaboration.
          </p>
        </div>

        <div className={s.ourCustomerslogo}>
          {customers.map((customer) => (
            <div className={s.customerGridItem} key={customer.title}>
              <div className={s.customerCard}>
                <div className={s.customerLogoWrap}>
                  <img
                    src={customer.image}
                    alt={customer.alt}
                    className={s.customerLogo}
                  />
                </div>
                <h3 className={s.customerName}>{customer.title}</h3>
                <p className={s.customerDesc}>{customer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
