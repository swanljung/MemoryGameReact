import React from "react"
import Card from "./card"
import { inject, observer } from "mobx-react"
import Success from "./success.js"


@inject("cardsStore") @observer

export default class Game extends React.Component {
    /*
    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            flippedCards: [],
            correctCards: []
        }
    }

    handleCardFlip = (photo, id, unflipCallback) => {
        const flippedCards = [...this.state.flippedCards, { photo, id, unflipCallback }]
        this.setState({ flippedCards }, this.handleFlippedCardChange)
    }


    resetGame = () =>{
        this.state.correctCards.forEach(card => {
            card.unflipCallback
        })
        counter = 0;
        this.setState({ correctCards: [] })
        this.setState({ flippedCards: [] })
        this.setState({ cards: this.props.cardsStore.constructor() })
        console.log("reset game")
    }

    //are the cards the same, leav them
    handleFlippedCardChange = () => {
        if (this.state.flippedCards.length === 2) {
            counter++
            if(this.state.flippedCards[0]['photo'] === this.state.flippedCards[1]['photo'] ){
            setTimeout(() => {
                this.setState({correctCards: [...this.state.correctCards, ...this.state.flippedCards]}, this.setState({flippedCards: []}))
                console.log(this.state.correctCards)

                //correctFlips++
                if (this.state.correctCards.length === 10) {
                    alert("Winner winner chicken dinner! it took "+counter+" tries. You mad?")
                    this.resetGame()
                }
            }, 100)
            }else{
                setTimeout(() => {
                    this.state.flippedCards.forEach(card => {
                        card.unflipCallback()
                    })
                    this.setState({ flippedCards: [] })
                }, 1000)
            }
        }
    }*/
    
    render() {
        const { cards } = this.props.cardsStore
        return (
            <div>
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