import React from 'react';

import {
    Slider, InputNumber, Row, Col,
} from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: this.props.value,
    }

    onChange = (value) => {
        let cleanValue = Number(value) ? value : this.state.inputValue;
        if (cleanValue < 2) {
            cleanValue = 2;
        } else if (cleanValue > 20) {
            cleanValue = 20;
        }
        this.setState({
            inputValue: cleanValue,
        });
        this.props.onChange(cleanValue);
    }

    render() {
        const { inputValue } = this.state;
        const value = typeof inputValue === 'number' ? inputValue : 0;

        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={2}
                        max={20}
                        onChange={this.onChange}
                        value={value}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={2}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={value}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}

