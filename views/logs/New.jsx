const React = require('react')
const Default = require('./layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Log">
            <form method="POST" action="/logs">
                Entry: <input type="text" name="name" placeholder='Name of Log Here'></input><br/>
                Log: <input type="text" name="color" placeholder='Color of Log Here'></input><br/>
                Is Personal Log: <input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Log"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New