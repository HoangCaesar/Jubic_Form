// Project Import
import './app.css';
import CommentForm from './features/form/CommentForm';
import List from './features/list/List';

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
