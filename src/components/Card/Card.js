import React from 'react'
import './Card.css'

export default class Card extends React.Component {
    constructor() {
        super()
    }

    render() {
        let oscarStr;

        if (this.props.hasOscars) {
            oscarStr = <p>Got the Oscar Award! 😉 </p>
        }   else {
            oscarStr = <p>Great movie but no Oscars! 😔 </p>
        }

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Director: {this.props.director}</h2>
                <h3>Rating: {this.props.imdbRating}</h3>
                <h4>
                Oscar:
                {
                    oscarStr
                }
                </h4>
            </div>
        )
    }
}