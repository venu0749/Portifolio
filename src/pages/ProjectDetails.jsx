import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import staticProjects from "../data/projects";

function ProjectDetails() {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/projects/${projectId}`)
            .then((res) => {
                setProject(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Could not fetch project from API, using fallback data:", err);
                const fallback = staticProjects.find(
                    (item) => String(item.id) === String(projectId)
                );
                setProject(fallback || null);
                setLoading(false);
            });
    }, [projectId]);

    if (loading) {
        return <p>Loading project details...</p>;
    }

    if (!project) {
        return <h2>Project Not Found</h2>;
    }

    return (
        <section className="project-details-page">
            <h1>{project.title}</h1>

            <img
                src={project.image}
                alt={project.title}
            />

            <p>
                {project.description}
            </p>

            <h2>Technologies Used</h2>

            <ul>
                {(project.techStack || []).map((tech, index) => (
                    <li key={index}>
                        {tech}
                    </li>
                ))}
            </ul>

            <a
                href={project.github || project.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                View GitHub Repository
            </a>
        </section>
    );
}

export default ProjectDetails;