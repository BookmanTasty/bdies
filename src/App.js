
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/App.scss';




// importamos componentes
import Menu from './components/Menu';

// importamos las paginas de navegacion
import Introduccion from './pages/Introduccion'
import Libros from './pages/Libros'
import Leer from './pages/Leer'



function App() {
  return (
    <Router>
      <div className="flex">

        <Menu />
        <div className="content">
          <Switch>
            <Route path="/leer" component={Leer} />
            <Route path="/libros" component={Libros} />

            <Route path="/" component={Introduccion} />

          </Switch>
        </div>


      </div>
    </Router>
  );
}

export default App;
