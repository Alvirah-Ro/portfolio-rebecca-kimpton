import Home from './Home';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import About from './About';
import Education from './Education';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/projects/:projectName", element: <ProjectDetail /> }, // Dynamic route
    { path: "/about", element: <About /> },
    { path: "/education", element: <Education /> },
];

export default routes;