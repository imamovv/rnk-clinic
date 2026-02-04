import { Switch, Route } from 'wouter';
import './App.css';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <div className="App">
      <nav className="sr-only">
        <a href="/">Home</a> | <a href="/about">About</a>
      </nav>

      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/services/:slug">
          <ServiceDetail />
        </Route>

        <Route path="/about">
          <h1>About Page</h1>
        </Route>

        <Route>
          <h1>404 - Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;