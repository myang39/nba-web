import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile";
import { DataViewContainer } from "./DataViewContainer";
import { SearchBar } from "./SearchBar";
import { DEFAULT_PLAYER_INFO } from '../constants';

export class Main extends React.Component {
    state = {
        playerInfo: JSON.parse(localStorage.getItem('playerInfo')) || DEFAULT_PLAYER_INFO
    }

    // nba.stats.playerInfo
    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.playerName);
    }

    loadPlayerInfo = (playerName) => {
        const { playerId } = nba.findPlayer(playerName);

        nba.stats.playerInfo({PlayerID: playerId})
            .then((response) => {
                let playerInfo = Object.assign(
                    {}, response.commonPlayerInfo[0], response.playerHeadlineStats[0]
                );

                this.setState({
                    playerInfo
                });

                localStorage.setItem('playerInfo', JSON.stringify(
                    playerInfo
                ));
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo} />
                    <DataViewContainer playerId={this.state.playerInfo.playerId} />
                </div>
            </div>
        );
    }

}

