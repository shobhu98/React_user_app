import React, { Component } from 'react';
import User from './User'
import AddUser from './AddUser'

class App extends Component {
    state = {
        user: [
            { name: 'Ryu', age: 30, belt: 'black', id: 1 },
            { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
            { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
        ]
    }

    addUser = (ninja) => {
        ninja.id = Math.random();
        let user = [...this.state.user, ninja];
        this.setState({
            user: user
        });
    }
    deleteUser = (id) => {
        // console.log(id);
        let user = this.state.user.filter(ninja => {
            return ninja.id !== id
        });
        this.setState({
            user: user
        });
    }
    render() {
        return (
            <div className="App">
                <h1>My first React app</h1>
                <User user={this.state.user} deleteUser={this.deleteUser} />
                <AddUser addUser={this.addUser} />
            </div>
        );
    }
}

export default App;