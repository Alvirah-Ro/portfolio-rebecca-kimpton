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
                        const jsonUrls = [
                            `https://raw.githubusercontent.com/Alvirah-Ro/${repo.name}/main/project.json`,  // Root directory
                            `https://raw.githubusercontent.com/Alvirah-Ro/${repo.name}/main/${repo.name}/project.json`, // Inside a subdirectory
                        ];

                        for (const url of jsonUrls) {
                            try {
                                const jsonResponse = await fetch(url);
                                if (jsonResponse.ok) {
                                    const projectData = await jsonResponse.json();
                                    return { ...repo, ...projectData }; // Merge repo and project.json data
                                }
                            } catch (error) {
                                console.warn(`Failed to fetch from ${url}:`, error);
                            }
                        }

                        console.warn(`Skipping ${repo.name}: project.json not found in both locations`);
                        return null; // Skip repos without project.json
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
        <div id="projects">
        <div className="container py-5 m-0">
            <h1 className="ms-5 mb-3">PROJECTS</h1>
            <div className="accordion" id="accordionFlushExample">
                <ul className="list-unstyled">
                    {projects.map((project, index) => {
                        const collapseId = `flush-collapse-${index}`;
                        return (
                            <li key={project.id} className="d-flex justify-content-start ms-5">
                                <div className="accordion-item border border-dark shadow my-3 py-1 w-75" id="projects-line" key={project.id}>
                                    <div className="row mx-5">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <Link to={`/projects/${project.name}`}>
                                                <h2 id="title" className="me-5">{project.title || project.name} :</h2>
                                            </Link>                                   
                                            {project.image && <img src={project.image} alt={project.title} className="img-thumbnail my-3" width="200px" />}
                                        </div>
                                    </div>
                                    <h3 className="accordion-header">
                                        <button
                                            className = "accordion-button collapsed"
                                            type = "button"
                                            data-bs-toggle="collapse"
                                            data-bs-target= {`#${collapseId}`}
                                            aria-expanded="false"
                                            aria-controls={collapseId}
                                        >
                                            View Details
                                        </button>
                                    </h3>
                                    <div id={collapseId} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <p>{project.description}</p>
                                            {project.image && <img src={project.image} alt={project.title} width="80%" />}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Projects;