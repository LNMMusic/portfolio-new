// LIBS
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// Pages
// ...
// Components
// ...



// APP
function App() {
  return (
    <Router>
      <div className="App">
        {/* Root */}
        <Route path="/" exact component={HomePage}/>
        
      </div>
    </Router>
  );
}

export default App;