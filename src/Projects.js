import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        //  Fetch all public repositories from Git Hub
        fetch("https://api.github.com/users/Alvirah-Ro/repos")
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        // Returns each repository as a link that navigates to a detailed project page
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={`/projects/${project.name}`}>{project.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;