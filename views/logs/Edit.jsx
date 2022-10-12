const React = require('react')
const Default = require('./layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {name, _id, color, readyToEat} = this.props.log
        return (
            <Default title={`${name} Edit Page`} log={this.props.log}>
                <form method="POST" action={`/logs/${_id}?_method=PUT`}>
                    Entry: <input type="text" name="name" defaultValue={name}></input><br/>
                    Log: <input type="text" name="color" defaultValue={color}></input><br />
                    Is Personal Log: <input type="checkbox" name="readyToEat" defaultChecked={readyToEat}/> <br />
                    <input type="submit" value="Edit Log" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit