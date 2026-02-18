import { fetchRepoWithProjectDetails } from "./Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageModal from "./ImageModal";

function ProjectDetail() {
    const { projectName } = useParams(); // Get project name from the URL
    const [project, setProject] = useState(null);
    const [projectDetails, setProjectDetails] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        async function load(){
            setLoading(true);
            try {
                const combined = await fetchRepoWithProjectDetails(projectName, { token });
                setProject(combined);
                setProjectDetails(combined.projectJson || null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [projectName]);

    if (error) return <h2>Error: {error}</h2>;
    if (loading) return <h2>Loading...</h2>;

    const imageUrl = projectDetails?.image
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl2 = projectDetails?.image2
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image2}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl3 = projectDetails?.image3
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image3}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl4 = projectDetails?.image4
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image4}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl5 = projectDetails?.image5
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image5}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image

    const imageUrl6 = projectDetails?.image6
        ? `${process.env.PUBLIC_URL}/images/${projectDetails.image6}`
        : `${process.env.PUBLIC_URL}/images/default.jpg`; // Optional fallback image


    return (
        <div className="container">
            <h1 className="m-3 mb-2 p-3 text-center rebecca">{projectDetails?.title}</h1>
            <a className="d-flex justify-content-center rebecca" href={project?.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>

            <div className="d-grid border border-dark shadow py-3 my-4 mx-2 gap-2">
                
                    {/* Row 1 */}
                    <div className="row justify-content-center column-gap-5 m-0 mt-4">
                        {/* Display images from project.json if available */}
                        {projectDetails && (
                            <div className="col-5 justify-content-center">
                                <ImageModal src={imageUrl} alt="Project Image 1" />
                            </div>
                        )}
                        <p className="col-5 mb-4 align-content-center">{projectDetails?.longDescription1 || project?.description || "No description available."}</p>
                    </div>

                    {/* Row 2 */}
                    <div className="row justify-content-center column-gap-5 m-0">
                        <p className="col-5 mb-4 align-content-center">{projectDetails?.longDescription2 || project?.description || "No description available."}</p>
                        {projectDetails && (
                            <div className="col-5 justify-content-center">
                                <ImageModal src={imageUrl2} alt="Project Image 2" />
                            </div>
                        )}
                    </div>

                    {/* Row 3 */}
                    <div className="row justify-content-center column-gap-5 m-0">
                        {projectDetails && (
                            <div className="col-5 justify-content-center">
                                <ImageModal src={imageUrl3} alt="Project Image 3" />
                            </div>
                        )}
                        <p className="col-5 mb-4 align-content-center">{projectDetails?.longDescription3 || project?.description || "No description available."}</p>
                    </div>

                    {/* Row 4 */}
                    <div className="row justify-content-center column-gap-5 m-0">
                    <p className="col-5 mb-4 align-content-center">{projectDetails?.longDescription4 || project?.description || "No description available."}</p>
                        {projectDetails && (
                            <div className="col-5 justify-content-center">
                                <ImageModal src={imageUrl4} alt="Project Image 4" />
                            </div>
                        )}
                    </div>

                    {/* Row 5 */}
                    <div className="row justify-content-evenly m-3">
                        {projectDetails && (projectDetails.image5 || projectDetails.image6) && (
                            <>
                            {projectDetails.image5 && (
                                <ImageModal src={imageUrl5} alt="Project Image 5" className="col-5 justify-content-center img-fluid max-width-400 mb-3 mx-0 p-0" />
                            )}
                            {projectDetails.image6 && (
                                <ImageModal src={imageUrl6} alt="Project Image 6" className="col-5 justify-content-center img-fluid max-width-400 mb-3 mx-1 p-0" />
                            )}
                            </>
                        )}
                    </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
