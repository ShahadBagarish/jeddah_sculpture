import React, { Component } from 'react'
import NavBarcomponent from './Component/home/NavBarcomponent'
export default class bookin extends Component {
    render() {
        console.log(this.props.match.params);
        console.log(this.props.data);
        // var matchId = this.props.match.params.id
        // console.log(this.props.data[matchId]);
        
        return (
            <div>
                <header>
                    <NavBarcomponent logout={this.props.logout} />
                </header>
                hiii
                {/* <h1>{this.props.data[matchId].title}</h1> */}
            </div>
        )
    }
}
