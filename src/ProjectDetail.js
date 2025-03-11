import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
    const { projectName } = useParams(); // Get project name from the URL
    const [project, setProject] = useState(null);

    useEffect(() => {
        const token = process.env.REACT_APP_GITHUB_TOKEN;

        fetch(`https://api.github.com/repos/Alvirah-Ro/${projectName}`, {
            headers: {
                Authorization: `token ${token}`,
                Accept: "application/vnd.github.v3+json"
            }
        })
        .then(response => response.json())
        .then(data => setProject(data))
        .catch(error => console.error("Error fetching project:", error));
    }, [projectName]);

    if (!project) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description || "No description available."}</p>
            <p>Last Updated: {new Date(project.updated_at).toLocaleDateString()}</p>
            {project.image && (
                                                <img src={project.image} 
                                                alt={project.title} 
                                                className="img-thumbnail my-3" 
                                                width="600px" />
                                            )}

            <a href={project.html_url} target="blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}

export default ProjectDetail;