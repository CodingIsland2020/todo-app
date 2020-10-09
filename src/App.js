import React, { Component } from 'react';

import './App.css'
import ListItems from './Components/ListItems/ListItems';

class App extends Component {

    constructor(props) {
        super()

        this.state={
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.setUpdate = this.setUpdate.bind(this)
    }

    handleInput(event){
        this.setState({
            currentItem: {
                text: event.target.value,
                key: Date.now()
            }
        })
    }

    addItem(event){
        event.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !== ""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem:{
                    text: '',
                    key: ''
                }
            })
        }
    }

    deleteItem(key) {
        const filteredItems = this.state.items.filter(item =>
            item.key !== key);
            this.setState({
                items: filteredItems
            })
    }

    setUpdate(text, key){
        const items = this.state.items
        items.forEach(item => {
            if(item.key === key){
                item.text = text
            }
        })
        this.setState({
            items: items
        })
    }

    render() {
        return (
            <div className="App">
                <header>
                    <form action="/" className="to-do-form" onSubmit={this.addItem}>
                        <input type="text" placeholder="Type text"
                            value={this.state.currentItem.text}
                            onChange={this.handleInput}
                        />
                        <button type="submit">Add</button>
                    </form>
                </header>
                <ListItems items={this.state.items}
                deleteItem ={ this.deleteItem }
                setUpdate = { this.setUpdate }/>
            </div>
        );
    }
}

export default App;