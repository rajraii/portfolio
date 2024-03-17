import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const { des, title, img, liveUrl, keyword } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        <div className={`${classes.portfolio__tags}`}>
          {keyword.map((item, index) => (
            <div className={`${classes.portfolio__keyword}`} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} objectFit="cover" layout="fill"/>
      </div>

      <div className={`${classes.portfolio__live}`}>
        <div className="port">
          <h6>{des}</h6>
        </div>
      </div>
      
      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
