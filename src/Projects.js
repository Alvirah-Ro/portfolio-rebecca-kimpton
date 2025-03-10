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

                console.log("Fetched repositories:", repos); // Debugging

                // Step 2: Fetch `project.json` from each repo
                const projectWithDetails = await Promise.all(
                    repos.map(async (repo) => {
                        // Fetch full repo details
                        const repoDetailsResponse = await fetch(`https://api.github.com/repos/Alvirah-Ro/${repo.name}`);
                        const repoDetails = await repoDetailsResponse.json();

                        const jsonUrls = [
                            `https://raw.githubusercontent.com/Alvirah-Ro/${repo.name}/main/project.json`,  // Root directory
                            `https://raw.githubusercontent.com/Alvirah-Ro/${repo.name}/main/${repo.name}/project.json`, // Inside a subdirectory
                        ];

                        for (const url of jsonUrls) {
                            try {
                                const jsonResponse = await fetch(url);
                                if (jsonResponse.ok) {
                                    const projectData = await jsonResponse.json();
                                    return { 
                                        ...repoDetails, // GitHub metadata
                                        ...projectData, // Project.json data
                                    }; // Merge repo and project.json data
                                }
                            } catch (error) {
                                console.warn(`Failed to fetch from ${url}:`, error);
                            }
                        } // <-- Closing `for` loop

                        console.warn(`Skipping ${repo.name}: project.json not found in both locations`);
                        return null; // Skip repos without project.json
                    }) // <-- Closing `.map()`
                ); // <-- Closing `Promise.all()`

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
                <ul className="list-unstyled">
                    {projects.map((project) => {
                        return (
                            <li key={project.id} className="d-flex justify-content-start ms-5">
                                <div className="border border-dark shadow my-3 py-1 w-75" id="projects-line">
                                    <div className="row mx-5">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <Link to={`/projects/${project.name}`}>
                                                <h3 id="title" className="me-5">{project.title || project.name}</h3>                                
                                            </Link>   
                                            {project.image && (
                                                <img src={project.image} 
                                                alt={project.title} 
                                                className="img-thumbnail my-3" 
                                                width="200px" />
                                            )}
                                            {project.pushed_at && (
                                                <p>Last Updated: {new Date(project.pushed_at).toLocaleDateString()}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Projects;