import React from 'react';
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import {store} from './store'
import './styles.css'
import 'bulma/css/bulma.css'

const el = document.getElementById('root');
const root = createRoot(el);

root.render(<Provider store={store}><App/></Provider>)