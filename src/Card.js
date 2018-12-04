import React from 'react'

export default class Card extends React.Component {
    constructor() {
        super()

        this.randomNumber = Math.random()
    }

    render() {
        return (
            <div>
                <h1>{this.props.title} {this.randomNumber}</h1>
                <h2>{this.props.director}</h2>
            </div>
        )
    }
}