import React from "react"
import Card from "./card"
import { inject, observer } from "mobx-react"
import Success from "./success.js"


@inject("cardsStore") @observer

export default class Game extends React.Component {
    render() {
        const { cards } = this.props.cardsStore
        return (
            <div className="game">
                {this.props.cardsStore.gameWon === false &&
                cards.map(card => (
                    <Card
                        card = {card}
                        key = {card.id} />
                ))}

                {this.props.cardsStore.gameWon === true &&
                <div>
                    <Success />
                    <button onClick={this.props.cardsStore.resetGame}>Reset</button>
                </div>}
            </div>


        )
    }

}