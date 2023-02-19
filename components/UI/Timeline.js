import React from "react";
import { Container } from "reactstrap";
import TimelineItem from "./TimelineItem";
import classes from "../../styles/timeline.module.css";
import SectionSubtitle from "./SectionSubtitle";

const Timeline = () => {
  const timelineData = [
    {
      text: [
        "Contributed to design, development, and maintenance of SpotLyt CRM software used by organizations to manageemployee data, events, Medias, and resources.",
        "Successfully implemented new software development kit with JS, resulting in a reduction of code time by average of 7%",
      ],
      date: "Mar 2022- Feb 2022",
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
      date: "May 2022- Aug 2022",
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
