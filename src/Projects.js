import { fetchStarredReposWithDetails } from "./Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    // ✅ Fetch starred repos once when the component mounts
    useEffect(() => {
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        async function load() {
            setLoading(true);
            try {
                const results = await fetchStarredReposWithDetails("Alvirah-Ro", { token });
                setProjects(results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []); 

    if (error) return <h2>Error: {error}</h2>;
    if (loading) return <h2>Loading...</h2>;


    return (
        // Returns each repository as a link that navigates to a detailed project page
        <div>
            <div className="container">
                <h1 className="text-center p-3 m-3 mt-0 rebecca">FEATURED PROJECTS</h1>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
                    {projects.map((project) => {
                        const imageUrl = project.image
                            ? `${process.env.PUBLIC_URL}/images/${project.image}`
                            : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image
                    
                        console.log(`Rendering Project: ${project.name}, Updated At: ${project.updated_at}, Link: ${project.link || 'No link found'}`); // Logs project updating details to console
                        
                        return (
                            <li key={project.id} className="border border-dark shadow p-3 h-100 max-width-300 min-height-400">
                                <div className="d-flex flex-column align-items-center text-center min-height-400">
                                    <Link id="title" to={`/projects/${project.name}`}>
                                        <h5 className="p-2" id="title">{project.title || project.name}</h5>                                
                                    </Link> 
                                    <Link id="title" to={`/projects/${project.name}`}>
                                        <img src={imageUrl} alt={project.title} className="img-thumbnail my-2" style={{ height: "135px", objectFit: "cover" }}/>
                                    </Link> 
                                    <div className="my-3 mx-2 flex-grow-1 d-flex align-items-start">
                                        <p className="text-wrap">{project.description || "No description available."}</p>
                                    </div>
                                    {project.link && (
                                        <a className="rebecca pt-n4 mb-4" href={project.link} target="_blank" rel="noopener noreferrer">View App Here</a>
                                    )}
                                    <div className="mt-auto text-secondary row align-items-end">
                                        {project.updated_at ? (
                                            <p className="mb-2">Last Updated: {new Date(project.updated_at).toLocaleDateString()}</p>
                                        ) : (
                                            <p style={{ color: "red" }}>No updated_at found</p>
                                        )}
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
