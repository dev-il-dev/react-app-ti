import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const n = ReactDOM.createRoot(document.getElementById('Name'));
const p = ReactDOM.createRoot(document.getElementById('Post'));
const c = ReactDOM.createRoot(document.getElementById('Company'));
n.render(<h1>Sarvesh Dubey</h1>);
p.render(<h2>Embeddded Software Engineer</h2>);
c.render(<div>

<a href="https://www.logosurfer.com/wp-content/uploads/2018/03/texas-instruments-logo_0.png" target="_blank"><img src="https://www.logosurfer.com/wp-content/uploads/2018/03/texas-instruments-logo_0.png"  alt="Texas Instruments Logo" /></a></div>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
