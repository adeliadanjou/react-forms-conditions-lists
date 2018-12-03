import React from 'react'

export default class EmployeeProfile extends React.Component {
    constructor () {
        super()
    }

    calculateStyle = (age) => {
        if (age < 30) {
            return {border:"1px solid green"}
        }   else {
            return {border:"1px solid red"}
        }
    }

    render () {
        return (
            <div style={this.calculateStyle(this.props.age)}>
                user profile {this.props.nombre}, their age is {this.props.age}
            </div>
        )
    }
}