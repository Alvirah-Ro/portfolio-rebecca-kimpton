import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
    const [projects, setProjects] = useState([]);

        async function fetchStarredRepos() {
            try {
                //  Step 1: Fetch all starred repositories from Git Hub dynamically
                const token = process.env.REACT_APP_GITHUB_TOKEN;
                const response = await fetch("https://api.github.com/users/Alvirah-Ro/starred", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/vnd.github.v3+json"
                    }
                });

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
                                        updated_at: repo.updated_at // Ensure pushed_at is included
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
            const filteredProjects = projectWithDetails.filter(Boolean);
            console.log("Final Projects State:", filteredProjects); // Logs what will be stored in `projects`
            setProjects(filteredProjects);
            } catch (error) {
                console.error("Error fetching starred repos:", error);
            }
        };

        // ✅ Fetch starred repos once when the component mounts
        useEffect(() => {
            fetchStarredRepos();
        }, []); 

    return (
        // Returns each repository as a link that navigates to a detailed project page
        <div id="projects">
            <div className="container-fluid">
                <h1 className="text-center p-3 m-3" id="projects-title">PROJECTS</h1>
                <ul className="list-unstyled">
                    {projects.map((project) => {
                        console.log(`Rendering Project: ${project.name}, Updated At: ${project.updated_at}`); // Logs project updating details to console
                        return (
                            <li key={project.id} className="d-flex justify-content-center">
                                <div className="border border-dark shadow my-3 py-1 w-75" id="projects-line">
                                    <div className="row">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Link to={`/projects/${project.name}`}>
                                                <h5 id="title" className="p-4">{project.title || project.name}</h5>                                
                                            </Link>   
                                            {project.image && (
                                                <img src={project.image} 
                                                alt={project.title} 
                                                className="img-thumbnail my-3" 
                                                width="150px" />
                                            )}
                                        </div>
                                        <div className="m-3">
                                            <p>{project.description || "No description available."}</p>
                                            {project.updated_at ? (
                                                <p className="text-center">Last Updated: {new Date(project.updated_at).toLocaleDateString()}</p>
                                            ) : (
                                                <p style={{ color: "red" }}>No updated_at found</p>
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
