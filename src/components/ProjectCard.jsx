import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({
    id,
    title,
    description,
    techStack,
    image,
    github
}) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="project-card">

            <img
                src={image}
                alt={title}
            />

            <h3>{title}</h3>

            <p>{description}</p>

            <button
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? "Hide Details" : "View Details"}
            </button>

            {showDetails && (
                <div className="project-details">

                    <h4>Tech Stack</h4>

                    <ul>
                        {techStack.map((tech, index) => (
                            <li key={index}>
                                {tech}
                            </li>
                        ))}
                    </ul>

                    <p>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </p>

                    <Link to={`/projects/${id}`}>
                        Read More
                    </Link>

                </div>
            )}

        </div>
    );
}

export default ProjectCard;