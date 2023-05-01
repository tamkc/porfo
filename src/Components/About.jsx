/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = `
I am a dedicated and ambitious student pursuing my studies at Hong Kong Polytechnic University. With a strong work ethic and excellent communication abilities, I am driven by challenges and opportunities for personal growth. My proficiency in working both independently and collaboratively has been demonstrated by a consistent record of exceptional performance. I am eager to build a fulfilling career that embraces new challenges and promotes continuous learning.
`;

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  // Front-end skills
  "HTML",
  "CSS",
  "JavaScript",
  "Responsive Web Design",
  "Web Accessibility",
  "User Experience (UX)",
  "User Interface (UI)",
  "Graphic Design",
  "CSS Frameworks (Bootstrap, Tailwind CSS)",
  "JavaScript Libraries & Frameworks (React, Angular, Vue.js)",
  "Version Control (Git)",

  // Back-end skills
  "Server-side Programming Languages (Node.js, Python, Ruby, PHP, Java)",
  "Database Management (MySQL, PostgreSQL, MongoDB)",
  "API Design & Development (REST, GraphQL, gRPC)",
  "Web Application Frameworks (Express.js, Django, Ruby on Rails, Laravel, Spring)",

  // Additional skills
  "Inclusive Design",
  "Focus Group Testing",
  "Mobile User Interfaces",
  "Web Performance Optimization",
  "Testing & Debugging (Unit, Integration, E2E Testing)",
  "Deployment & Hosting (Heroku, AWS, Firebase)",
  "Continuous Integration & Continuous Deployment (CI/CD)",
  "Web Security Best Practices",
  "Project Management & Agile Methodologies (Scrum, Kanban)",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems with creativity and innovation, leveraging my extensive full stack development experience. With a strong background in UI/UX design and knowledge of front-end and back-end technologies, I am dedicated to making technology accessible and user-friendly for all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
