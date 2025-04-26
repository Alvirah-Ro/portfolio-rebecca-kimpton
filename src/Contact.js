export default function Contact() {
    const username = "BajoranEH";
    const domain = "hotmail.com";
    const email = `${username}@${domain}`;

    return (
        <footer className="bg-dark text-white py-3 mt-5" data-bs-theme="dark">
            <div className="row flex-wrap justify-content-start px-5">
                <a href="https://github.com/Alvirah-Ro?tab=repositories" className="col-md-2 white">GitHub</a>
                <a href="https://www.linkedin.com/in/rebecca-kimpton-18a047154/" className="col-md-2 white">LinkedIn</a>
                <a href={`mailto:${email}`} className="col-md-4 white">{email}</a>
            </div>
        </footer>
    )
}