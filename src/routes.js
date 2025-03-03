import Home from './Home';
import Projects from './Projects';
import About from './About';
import Education from './Education';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/about", element: <About /> },
    { path: "/education", element: <Education /> },
];

export default routes;