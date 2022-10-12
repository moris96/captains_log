const React = require('react');
const Default = require('./layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {logs} = this.props
        return(
            <Default title="Logs Index Page">
                <ul>
                    {
                        logs.map((log) => {
                            const {name, color, readyToEat, _id} = log 
                            return (
                                <li key={_id}>
                                    <a href={`/logs/${_id}`}>
                                    {name}</a> is {color}
                                    
                                     <br/>
                                    {
                                        readyToEat? 
                                        'It\'s a personal log':
                                        'It\'s not a personal log'
                                    }
                                    <br/>
                                    <form method="POST" action={`/logs/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${color} ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index