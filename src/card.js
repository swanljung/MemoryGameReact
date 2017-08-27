import React from "react"
import classNames from "class-names"
import "./card.css"
import {inject, observer} from "mobx-react"

@inject("cardsStore") @observer
export default class Card extends React.Component {

    handleClick = () => {
       this.props.cardsStore.flip(this.props.card)
    }

    render() {
        return (
            <div
                className={classNames("card", {match: this.props.card.match})}
                onClick={this.handleClick}>
                <div
                    className={classNames("image", { flipped: this.props.card.flipped})}
                    style={{ backgroundImage: `url(${this.props.card.photo})` }} />
                </div>
        )
    }
}