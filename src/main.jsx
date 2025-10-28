import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';
import App from './App.jsx'
import 'rsuite/dist/rsuite-no-reset.min.css';
import './index.css'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
