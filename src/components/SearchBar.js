import React from 'react';
import { Icon, Input, AutoComplete } from 'antd';
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from "../constants";

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    onSelect = (value) => {
        console.log('onSelect', value);
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName, playerId}) => (
                    <Option key={fullName}>
                        <img
                            className="player-option-image"
                            src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                            alt="Profile"
                        />
                        <span className="player-option-label">{`${fullName}`}</span>
                    </Option>
                )
            )
        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                className="search-bar"
                size = "large"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
            >
                <Input suffix={<Icon type="search"/>} />
            </AutoComplete>
        );
    }
}