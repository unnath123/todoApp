import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import style from './style.css'

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)