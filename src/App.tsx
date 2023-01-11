import React from 'react';

// Project Import
import CommentForm from './features/form/CommentForm';
import List from './features/list/List';
import './app.css';

// ==============================|| APP -   ||============================== //

function App() {
    return (
        <div className="app">
            <CommentForm />
            <List />
        </div>
    );
}

export default App;
