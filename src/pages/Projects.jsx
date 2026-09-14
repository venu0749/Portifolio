import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import api from "../services/api";
import staticProjects from "../data/projects";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/projects")
            .then((res) => {
                setProjects(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Could not fetch projects from API, using fallback data:", err);
                setProjects(staticProjects);
                setLoading(false);
            });
    }, []);

    return (
        <section className="projects">
            <h1>My Projects</h1>

            <p>
                Here are some of the projects that I have developed.
            </p>

            {loading ? (
                <p>Loading projects...</p>
            ) : (
                <div className="projects-container">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Projects;