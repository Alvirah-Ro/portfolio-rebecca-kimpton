import './App.css';
import './Styles.css';
import Nav from './Nav';
import routes from './routes';
import Contact from './Contact';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        {routes.map(({ path, element}, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Contact />
    </>
  );
}

export default App;
