// LIBS
import React from 'react';  import ReactDOM from 'react-dom';
// CSS                                                          [html head]
import './normalize.css';   import './index.css';



// RENDER                                                       [html body]
import App from './App';

ReactDOM.render(
  <App />,                            // Element  ->            App Component [w/ internal comps and css]
  document.getElementById('root')     // Target   ->            root
);