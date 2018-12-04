import React from 'react'

export default class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <nav>
                Your username is {this.props.username}
            </nav>
        )
    }
}