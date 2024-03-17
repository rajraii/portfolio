import React from "react";
import { Container } from "reactstrap";
import TimelineItem from "./TimelineItem";
import classes from "../../styles/timeline.module.css";
import SectionSubtitle from "./SectionSubtitle";

const Timeline = () => {
  const timelineData = [
    {
      text: [
        "Transformed Dashboard Vertical by migrating from Django’s MVT model to React’s SPA component-based architecture, significantly improving user experience, amplifying user feedback and interaction time, slashing development efforts and time by 35%",
        "Engineered a Backup API with Django, redis, and CDN, delivering an intuitive and seamless solution for publishers to securely extract data dumps, enhancing operational efficiency and user experience.",
        "Designed Smart Links feature with Django, enabling publishers to interconnect multiple posts internally through a shared keyphrase, serving as a central node point, resulting in increased SEO.",
        "Developed Paywall Self Serve with React, Razorpay, Django. Allowing Publisher to create their own customized Paywall with Live preview."
      ],
      date: "Software Developer Engineer | Feb 2023 - Present",
      category: {
        tag: "ThePublive",
        color: "transparent",
      },
      link: {
        url: "https://thepublive.com/",
        text: "Link",
      },
    },
    {
      text: [
        "Contributed to design, development, and maintenance of SpotLyt CRM software used by organizations to manageemployee data, events, Medias, and resources.",
        "Successfully implemented new software development kit with JS, resulting in a reduction of code time by average of 7%",
      ],
      date: "Software Developer Engineer | Mar 2022- Feb 2022",
      category: {
        tag: "Veridic Solutions",
        color: "transparent",
      },
      link: {
        url: "https://www.veridicsolutions.com/",
        text: "Link",
      },
    },
    {
      text: [
        "Implemented a Dashboard feature for clients, which resulted in an average time savings of 2 minutes per session for users.",
        "Collaborated on user-friendly personal wallet platform with over 10k+ users.",
      ],
      date: "Software Developer Engineer | May 2022- Aug 2022",
      category: {
        tag: "Farzi Engineer",
        color: "transparent",
      },
      link: {
        url: "https://farziengineer.com/",
        text: "Link",
      },
    },
  ];
  return (
    <section>
    
      <Container>
        <SectionSubtitle subtitle="Experience" />
        <h6 className="mt-4 mb-5">A sneak peek into my most recent work</h6>
        <div className={`${classes.timeline_container}`}>
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
