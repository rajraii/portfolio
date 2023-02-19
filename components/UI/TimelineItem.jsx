import React from "react";
import classes from "../../styles/timeline.module.css";

const TimelineItem = ({ data }) => {
  return (
    <div className={`${classes.timeline_item}`}>
      <div className={`${classes.timeline_item_content}`}>
        <span
          className={classes.tag}
        >
          {data?.category?.tag}
        </span>
        <time>{data?.date}</time>
        <ul>{data?.text?.map((item, idx)=> (
          <li key={idx}>{item}</li>
        ))}</ul>
        {data?.link && (
          <a href={data?.link?.url} target="_blank" rel="noopener noreferrer">
            {data?.link?.text}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
};

export default TimelineItem;
