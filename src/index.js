import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game.js';
import { Provider } from "mobx-react";
import CardStore from "./stores/cards-store.js";

const stores = {
    cardsStore: new CardStore()
}

const App = () =>
    <Provider {...stores}>
        <Game/>
    </Provider>

ReactDOM.render(<App/>, document.getElementById('root'));
