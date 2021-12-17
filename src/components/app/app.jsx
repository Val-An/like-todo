import React, { Component } from 'react'
import './app.css'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter/post-asatus-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, label: 'Going to learn React', important: true, like: false },
        { id: 2, label: 'That is so good', important: false, like: false },
        { id: 3, label: 'I need a break...', important: false, like: false },
        { id: 4, label: 'I need work', important: false, like: false },
      ],
    }
	  this.deleteItem = this.deleteItem.bind(this)
	  this.addItem = this.addItem.bind(this)
	  this.onToggleImportant = this.onToggleImportant.bind(this)
	  this.onToggleLiked = this.onToggleLiked.bind(this)
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




  onToggleImportant(id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id)
			const old = data[index]
			const newItem = {...old, important: !old.important}
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
			return {
				data: newArr
			}
		})
	}

	onToggleLiked(id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id)
			const old = data[index]
			const newItem = {...old, like: !old.like}
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
			return {
				data: newArr
			}
		})
	}



  render() {
  	const liked = this.state.data.filter(item => item.like).length
		const allPosts = this.state.data.length

    return (
      <div className='app'>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
					posts={this.state.data}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}/>
        <PostAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App
