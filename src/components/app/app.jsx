import React, { Component } from 'react'
import './app.css'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter/post-asatus-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'
import styled from 'styled-components'

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, label: 'Going to learn React', important: true },
        { id: 2, label: 'That is so good', important: false },
        { id: 3, label: 'I need a break...', important: false },
        { id: 4, label: 'I need a energi', important: false },
      ],
    }
    this.deleteItem = this.deleteItem.bind(this)
	 this.addItem = this.addItem.bind(this)
	 this.maxId = 5
  }

  // const data = [
  // 	{id: 1, label: 'Going to learn React', important: true},
  // 	{id: 2,	label: 'That is so good', important: false},
  // 	{id: 3,	label: 'I need a break...', important: false},
  // 	{id: 4,	label: 'I need a energi', important: false}
  // ]

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id)
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
      return {
        data: newArr,
      }
    })
  }

  addItem(body) {
    const newItem = {
		id: this.maxId++, 
		label: body, 
		important: false
	 }
	 this.setState(({data}) => {
		 const newArr = [...data, newItem]
		 return {
			 data: newArr
		 }
	 })
  }

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    )
  }
}

export default App
