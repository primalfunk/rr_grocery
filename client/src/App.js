import React, { Component } from 'react'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

class App extends Component {
  state = { items: [] }

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(items => this.setState({ items }))
  }

  addItem = (name) => {
    const item = { name };
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(res => res.json())
      .then(item => {
        const { items } = this.state;
        this.setState({ items: [...items, item] });
      })
  }

  updateItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'PUT' })
      .then(res => res.json())
      .then(item => {
        const items = this.state.items.map(i => {
          if (i.id === id)
            return item
          return i;
        });
        this.setState({ items });
      })
  }

  deleteItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'DELETE' })
      .then(() => {
        const { items } = this.state;
        this.setState({ items: items.filter(i => i.id !== id) })
      })
  }

  render() {
    return (
      <div className="container">
        <ItemForm addItem={this.addItem} />
        <ItemList
          items={this.state.items}
          updateItem ={this.updateItem}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default App