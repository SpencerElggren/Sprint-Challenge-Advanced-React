import React from 'react';
import axios from 'axios'
import CardInfo from "./cardInfo";

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(resp => {
                console.log(resp.data);
                this.setState({players: resp.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className={'cardSet'}>
                {this.state.players.map(player => (
                    <CardInfo
                        key={player.name}
                        name={ player.name}
                        country={player.country}
                        searches={player.searches}/>
                ))}
            </div>
        )
    }
}

export default Card;