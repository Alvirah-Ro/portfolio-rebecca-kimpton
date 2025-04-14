import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
    const { projectName } = useParams(); // Get project name from the URL
    const [project, setProject] = useState(null);
    const [projectDetails, setProjectDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = process.env.REACT_APP_GITHUB_TOKEN;

        async function fetchProjectData() {
            try {
                // Fetch GitHub repository details
                const repoResponse = await fetch(`https://api.github.com/repos/Alvirah-Ro/${projectName}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/vnd.github.v3+json"
                    }
                });

                if (!repoResponse.ok) throw new Error(`GitHub API error: ${repoResponse.status}`);
                const repoData = await repoResponse.json();
                setProject(repoData); // Save repo details

                // URLs to check for project.json
                const jsonUrls = [
                    `https://raw.githubusercontent.com/Alvirah-Ro/${projectName}/main/project.json`,  // Root directory
                    `https://raw.githubusercontent.com/Alvirah-Ro/${projectName}/main/${projectName}/project.json`, // Inside a subdirectory
                ];

                for (const url of jsonUrls) {
                    try {
                        const jsonResponse = await fetch(url);
                        if (jsonResponse.ok) {
                            const projectData = await jsonResponse.json();
                            setProjectDetails(projectData); // Save project.json data
                            return; // Stop loop if successful
                        }
                    } catch (jsonError) {
                        console.warn(`Failed to fetch from ${url}:`, jsonError);
                    }
                }

                console.warn(`Skipping ${projectName}: project.json not found in both locations`);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchProjectData();
    }, [projectName]);

    if (error) return <h2>Error: {error}</h2>
    if (!project) return <h2>Loading...</h2>;

    const imageUrl = projectDetails?.image
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl2 = projectDetails?.image2
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image2}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl3 = projectDetails?.image2
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image3}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl4 = projectDetails?.image2
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image4}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl5 = projectDetails?.image2
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image5}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl6 = projectDetails?.image2
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image6}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image


    return (
        <div className="container">
            <h1 className="m-3 mb-2 p-3 text-center rebecca">{projectDetails?.title}</h1>
            <a className="d-flex justify-content-center rebecca" href={project?.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>

            <div className="d-grid gap-3 border border-dark shadow py-3 m-3">

                    <div className="row pt-4 justify-content-evenly">
                        {/* Display images from project.json if available */}
                        {projectDetails && (
                            <>
                                <img src={imageUrl} alt="Project Image 1" className="col-6 img-fluid max-width-500 mb-4 p-0" />
                            </>
                        )}
                        <p className="col-5 mb-4 align-content-center">{projectDetails?.longDescription1 || project.description || "No description available."}</p>
                    </div>

                    <div className="row py-1 justify-content-evenly">
                        <p className="col-5 mb-4 align-content-center">{projectDetails?.longDescription2 || project.description || "No description available."}</p>
                        {/* Display images from project.json if available */}
                        {projectDetails && (
                            <>
                                <img src={imageUrl2} alt="Project Image 2" className="col img-fluid max-width-500 mb-4 p-0" />
                            </>
                        )}
                    </div>

                    <div className="row py-1 justify-content-evenly">
                    {/* Display images from project.json if available */}
                        {projectDetails && (
                            <>
                                <img src={imageUrl3} alt="Project Image 3" className="col img-fluid max-width-500 mb-4 p-0" />
                            </>
                        )}
                        <p className="col-5 mb-4 align-content-center">{projectDetails?.longDescription3 || project.description || "No description available."}</p>
                    </div>

                    <div className="row py-1 justify-content-evenly">
                        {/* Display images from project.json if available */}
                        {projectDetails && (
                            <>
                                <img src={imageUrl4} alt="Project Image 4" className="col img-fluid max-width-500 mb-4 p-0" />
                                <img src={imageUrl5} alt="Project Image 5" className="col img-fluid max-width-500 mb-4 p-0" />
                            </>
                        )}
                    </div>

                    <div className="row py-1 justify-content-evenly">
                        {/* Display images from project.json if available */}
                        {projectDetails && (
                            <>
                                <img src={imageUrl6} alt="Project Image 6" className="col img-fluid max-width-500 mb-4 p-0" />
                            </>
                        )}
                    </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
