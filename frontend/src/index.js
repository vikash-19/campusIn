import React from "react";
//import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import "./index.css";
import {Provider} from 'react-redux';
import store from "./store";


// After
import { createRoot } from 'react-dom/client';
const contar = document.getElementById('root');
const root = createRoot(contar); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
<App  />
</Provider>
);