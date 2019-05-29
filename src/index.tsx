import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Pet from "./Pet"

// const props = {
// pets: [new Pet("Kyle", "Dog", "Corgi"), new Pet("Mark", "Cat", "Tortie"), new Pet("Leo","Bird","Parakeet")]
// }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
