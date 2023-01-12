import ReactDOM from 'react-dom/client';

// redux provider
import { Provider as ReduxProvider } from 'react-redux';

// Project Import
import App from './App';
import { store } from './store';

// ==============================|| INDEX - REACT DOM RENDER  ||============================== //

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);
