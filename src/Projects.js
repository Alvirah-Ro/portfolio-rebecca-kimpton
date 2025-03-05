import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchStarredRepos() {
            try {
                //  Step 1: Fetch all starred repositories from Git Hub dynamically
                const response = await fetch("https://api.github.com/users/Alvirah-Ro/starred");
                const repos = await response.json();
                
                // Step 2: Fetch `project.json` from each repo
                const projectWithDetails = await Promise.all(
                    repos.map(async (repo) => {
                        const jsonUrl = `https://raw.githubusercontent.com/Alvirah-Ro/${repo.name}/main/project.json`;
                        try {
                            const jsonResponse = await fetch(jsonUrl);
                            if (!jsonResponse.ok) throw new Error("project.json not found");

                            const projectData = await jsonResponse.json();
                            return { ...repo, ...projectData }; // Merge repo and project.json data
                        } catch (error) {
                            console.warn(`Skipping ${repo.name}:`, error);
                            return null; // Skip repos without project.json
                        }
                    })
                );

                // Step 3: Filter out any null results
                setProjects(projectWithDetails.filter(Boolean));
            } catch (error) {
                console.error("Error fetching starred repos:", error);
            }
        }

        fetchStarredRepos();
    }, []);

    return (
        // Returns each repository as a link that navigates to a detailed project page
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={`/projects/${project.name}`}>
                            <h3>{project.title || project.name}</h3>
                        </Link>
                        <p>{project.description}</p>
                        {project.image && <img src={project.image} alt={project.title} width="200" />}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;