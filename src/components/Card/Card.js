import React from 'react'
import './Card.css'

export default class Card extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Director: {this.props.director}</h2>
                <h3>Rating: {this.props.imdbRating}</h3>
                <h4>
                Oscar:
                {
                    this.props.hasOscars ?
                        <p>Got the Oscar Award! 😉 </p>
                        :
                        <p>Great movie but no Oscars! 😔 </p>
                }
                </h4>
            </div>
        )
    }
}