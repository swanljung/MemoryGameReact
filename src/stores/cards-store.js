import {observable, action} from "mobx"
import shuffle from "../shuffle"
import uuid from "uuid/v4"

const photos = [
    "/images/dog-1.jpg",
    "/images/dog-2.jpg",
    "/images/dog-3.jpg",
    "/images/dog-4.jpg",
    "/images/dog-5.jpg"
]


let cardRemoved = 0;

class Card{
    id
    photo
    @observable flipped
    @observable match = false

    constructor(photo){
        this.photo = photo
        this.id = uuid()
    }

    @action flip(){
        this.flipped = !this.flipped
    }
}

export default class CardsStore{
    @observable cards = []
    @observable flippedCards = []
    @observable gameWon = false

    constructor(){
        this.cards = this.duplicatedAndShuffledCards()
    }

    @action flip(card){
        //if(this.flippedCards.filter(c => c.id === card.id).length === 0){

            card.flip()
            this.flippedCards.push(card)
            if (this.flippedCards.length === 2) {
                if(this.flippedCards[0]['photo'] === this.flippedCards[1]['photo'] ){
                    setTimeout(() => {
                        this.flippedCards.forEach(card => {
                            card.match = true
                        })
                        cardRemoved = cardRemoved+1
                        console.log(cardRemoved)
                        this.flippedCards = []
                        if(cardRemoved === 5){
                            this.gameWon = true
                        }
                    }, 500)
                }else{
                    setTimeout(() => {
                        this.flippedCards.forEach(card => {
                            this.flip(card)
                        })
                        this.flippedCards = []
                    },1000)
                }
            }
       // }
    }

    resetGame = () =>{
        this.cards = this.duplicatedAndShuffledCards()
        this.gameWon = false;
        cardRemoved = 0;
        console.log("reset game")
    }

    duplicatedAndShuffledCards = () => (
        shuffle([...photos, ...photos]).map(photo =>
        new Card(photo)
        )
    )
}