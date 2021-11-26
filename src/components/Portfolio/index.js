import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'workout-tracker',
      description: 'MERN Stack',
      link: "https://workout-tracker-222.herokuapp.com/",
      repo: "https://github.com/giovannimalcolm/workout-tracker"
    },
    {
      name: 'tech-blog',
      description: 'MERN Stack',
      link: "https://tech-blog-222.herokuapp.com/",
      repo: "https://github.com/giovannimalcolm/tech-blog"
    },
    {
      name: 'progressive-budget',
      description: 'HTML/CSS',
      link: "https://tranquil-sands-80248.herokuapp.com/",
      repo: "https://github.com/giovannimalcolm/progressive-budget"
    },
    {
      name: 'note-taker',
      description: 'Node/IoT',
      link: "https://fast-escarpment-52570.herokuapp.com/",
      repo: "https://github.com/giovannimalcolm/note-taker"
    },
    {
      name: 'weather-dashboard',
      description: 'HTML/JavaScript/CSS',
      link: "https://giovannimalcolm.github.io/weather-dashboard/",
      repo: "https://github.com/giovannimalcolm/weather-dashboard"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
