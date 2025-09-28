import ConversionPage from './ConversionPage';
import Home from './Home';
import ProjectDetail from './ProjectDetail';
import Resume from './Resume';

const routes = [
    { path: "/", element: <Home /> }, // Home page route
    { path: "/projects/:projectName", element: <ProjectDetail /> }, // Dynamic route
    { path: "/resume", element: <Resume /> }, // Resume page route
    { path: "/conversion", element: <ConversionPage /> },   // New route for currency conversion
];

export default routes;