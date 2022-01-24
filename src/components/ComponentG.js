import React, { Component } from 'react';
import { UserConsumer } from '../context-api/UserContext';

export default class ComponentG extends Component {
    render() {
        return <div>
            <UserConsumer>
                {
                    (ContextData) => {
                        return <p>ComponentG - {ContextData}</p>
                    }
                }
            </UserConsumer>
        </div>;
    }
}
