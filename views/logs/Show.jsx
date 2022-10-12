const React = require('react');
const Default = require('./layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {name, color, readyToEat, _id} = this.props.log
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
        <Default title={`${capName} Show Page`} log={this.props.log}>
            <p>{capName} is {color} {readyToEat}</p>
        </Default>
        )
   } 
}

module.exports = Show