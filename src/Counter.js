import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: 0
    };
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return {
            value: nextProps.value
            };
        }
        return null;
    }
    
    render() {
        return (
            <div>
                counter: {this.props.value}
            </div>
        )
    }
}

export default Counter;

