import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper  indigo accent-4">
            <a href="#!" className="brand-logo">The Furon</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/friends" >Amigos</Link></li>
              <li><Link to="/places" >Lugares</Link></li>
              <li><Link to="/outputs" >Saídas</Link></li>
             <li><Link to="/charts">Gráficos</Link></li>
            </ul>
          </div>
        </nav>
        <main className="container">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
