import SkillCard from "../components/SkillCard";

function About() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Python",
    "MySQL",
    "Git & GitHub"
  ];

  return (

    <section className="about">

      <h1>About Me</h1>

      <div className="about-content">

        <div className="about-text">

          <p>
            Hello! I'm <strong>Venugopala Rao</strong>, a Computer Science
            student at the National Institute of Technology Warangal.
            I am passionate about Full Stack Development,
            Artificial Intelligence, and Competitive Programming.
          </p>

          <p>
            I enjoy learning new technologies, solving coding
            challenges, and building practical projects that
            improve my programming skills.
          </p>

        </div>

      </div>

      <div className="education">

        <h2>Education</h2>

        <ul>
          <li>
            <strong>B.Tech - Computer Science & Engineering</strong><br />
            National Institute of Technology Warangal
          </li>
        </ul>

      </div>

      <div className="skills-section">

        <h2>Technical Skills</h2>

        <div className="skills-container">

          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
            />
          ))}

        </div>

      </div>

    </section>

  );

}

export default About;
