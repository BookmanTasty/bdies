
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import './assets/css/App.scss';

// importamos componentes
import Menu from './components/Menu';
import Footer from './components/Footer';

// importamos las paginas de navegacion
import Introduccion from './pages/Introduccion'
import Libros from './pages/Libros'
import Leer from './pages/Leer'
import Articulos from './pages/Articulos';
import Acervo from './pages/Acervo';
import Escolares from './pages/Escolares';
import Ayuda from './pages/Ayuda';
import Roadmap from './pages/Roadmap';


function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {

  atEnter: {
    opacity: 0,
    scale: 1.2,
  },

  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },

  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};


function App() {
  return (
    <Router>
      <div className="flex">

        <Menu />
        <div className="content">

          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="switch-wrapper"
          >
            <Route path="/leer" component={Leer} />
            <Route path="/libros" component={Libros} />
            <Route path="/articulos" component={Articulos} />
            <Route path="/acervo" component={Acervo} />
            <Route path="/escolares" component={Escolares} />
            <Route path="/ayuda" component={Ayuda} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/" component={Introduccion} />

          </AnimatedSwitch>

        </div>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
