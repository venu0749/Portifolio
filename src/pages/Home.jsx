import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return (
      <section className="home">
        <h2>Loading Portfolio...</h2>
      </section>
    );
  }

  return (

    <section className="home">

      <div className="hero">

        <div className="hero-text">

          <h1>Hi, I'm Venugopala Rao</h1>

          <h2>Computer Science Student</h2>

          <p>
            Welcome to my personal portfolio website.
            I enjoy building web applications, solving
            Data Structures & Algorithms problems,
            and exploring Artificial Intelligence.
          </p>

          <Link to="/projects" className="btn">
            Explore Projects
          </Link>

        </div>

        <div className="hero-image">

          <img
            src="/assets/images/profile.jpeg"
            alt="Profile"
          />

        </div>

      </div>

    </section>

  );
}

export default Home;