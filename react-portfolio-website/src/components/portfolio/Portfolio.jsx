import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";

import IMG3 from "../../assets/portfolio3.jpg";

import IMG4 from "../../assets/portfolio4.jpg";

import IMG5 from "../../assets/portfolio5.png";

import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Restraunt Website - Feel the joy of mouthwatering food.",
    github: "https://github.com/abhishekgithu/Restraunt-Website",
    demo: "https://abhishek-restraunt-app.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: " Movie App - Search for Your Favourite Movies",
    github: "https://github.com/Refactor-FS-Bootcamp/assignment-8-redux-toolkit-abhishekgithu",
    demo: "https://abhishek-movie.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "ToDo List App - Jot Down your ToDo's ",
    github: "https://github.com/abhishekgithu/ToDO-List",
    demo: "https://abhishek-todo-list-app.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather App - Know your Weather",
    github: "https://github.com/abhishekgithu/abhishek-weather-checker-app",
    demo: "https://abhishek-weather-checker.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Music App",
    github: "https://github.com/abhishekgithu/Music-App",
    demo: "https://abhishek-music-app.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Shopping Cart App",
    github: "https://github.com/abhishekgithu/Ecommerce-Shopping-Cart",
    demo: "https://abhishek-shopping-cart.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=> {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }

      </div>
    </section>
  );
};

export default Portfolio;
