import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import 'semantic-ui-css/semantic.min.css';
import { createRoot } from 'react-dom';


// Create root and render your root component
createRoot(document.getElementById('root')).render(<App />);



ReactDOM.render(<App />, document.getElementById("root"));