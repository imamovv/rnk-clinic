import { Switch, Route } from 'wouter';
import './App.css';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      {/* Простая навигация для проверки */}
      <nav>
        <a href="/">Home</a> | 
        <a href="/about">About</a>
      </nav>
      
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        
        <Route path="/about">
          <h1>About Page</h1>
        </Route>
        {/* Fallback для 404 */}
        <Route>
          <h1>404 - Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;