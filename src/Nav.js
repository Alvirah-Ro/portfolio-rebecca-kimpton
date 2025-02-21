

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

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Intro from './Intro';
import Projects from './Projects';
import About from './About';
import Education from './Education';

//React component
export default function Nav() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark"
                id="navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">Rebecca Kimpton</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <ul>
                                    <li>
                                        <Link className="nav-link" to="/">home</Link>
                                    </li>
                                    <li>
                                        <Link  className="nav-link" to="/projects">Projects</Link>
                                    </li>
                                    <li>
                                        <Link  className="nav-link" to="/about">About Me</Link>
                                    </li>
                                    <li>
                                        <Link  className="nav-link" to="/education">Education</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<Intro />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/About" element={<About />} />
                <Route path="/Education" element={<Education />} />
            </Routes>
        </Router>
     )
}
