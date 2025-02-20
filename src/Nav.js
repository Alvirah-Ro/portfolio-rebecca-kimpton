import './Styles.css';

export default function Nav() {
    return (
        <nav classNameName="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark"
            id="navbar">

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
            <link rel="stylesheet" type="text/css" href="Styles.css" />
            <div classNameName="container">
                <a classNameName="navbar-brand" href="#">Rebecca Kimpton</a>
                <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNameName="navbar-toggler-icon"></span>
                </button>
                <div classNameName="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div classNameName="navbar-nav">
                        <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
                        <a classNameName="nav-link" href="#">Projects</a>
                        <a classNameName="nav-link" href="#">About Me</a>
                        <a classNameName="nav-link" href="#">Education</a>
                    </div>
                </div>
            </div>


        </nav>
    )

}
