// App.jsx
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home, About, Projects, Contact } from "./pages";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef } from "react"; // Importar useRef
import "./transitions.css"; // Archivo CSS para las transiciones

const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null); // Crear la referencia

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef} // Pasamos la referencia al CSSTransition
      >
        <div ref={nodeRef}> {/* Usar el ref en el contenedor */}
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-screen relative">
      <Router>
        <NavBar />
        <AnimatedRoutes />
      </Router>
    </main>
  );
};

export default App;
