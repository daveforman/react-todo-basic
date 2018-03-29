import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './app.css'
import List from './list';

const App = () => (
    <div className="container">
        <h1 className="center">Rally Car To-Do List</h1>
        <List/>
    </div>
);

export default App;
