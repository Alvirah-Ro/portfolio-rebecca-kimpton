

// export default function Nav() {
//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark"
//             id="navbar">
//             <div className="container">
//                 <a className="navbar-brand" href="#">Rebecca Kimpton</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
//                     aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                     <div className="navbar-nav">
//                         <a className="nav-link active" aria-current="page" href="#">Home</a>
//                         <a className="nav-link" href="#">Projects</a>
//                         <a className="nav-link" href="#">About Me</a>
//                         <a className="nav-link" href="#">Education</a>
//                     </div>
//                 </div>
//             </div>


//         </nav>
//     )

// }

import { Link } from 'react-router-dom';

export default function Nav() {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark"
                id="navbar">
                <div className="container">
                    <span className="navbar-brand">
                        <Link className="nav-link" to="/">Rebecca Kimpton</Link>
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link  className="nav-link" to="/">Home</Link>
                            <Link  className="nav-link" to="/about">About Me</Link>
                            <Link  className="nav-link" to="/education">Education</Link>
                        </div>
                    </div>
                </div>
            </nav>
     )
}
