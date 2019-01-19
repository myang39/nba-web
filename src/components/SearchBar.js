import React from 'react';
import { AutoComplete } from 'antd';

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    onSelect = (value) => {
        console.log('onSelect', value);
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                style={{ width: 200 }}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="input here"
            />
        );
    }
}