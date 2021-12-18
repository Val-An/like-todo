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
			term: '',
			filter: 'all'
    }
	  this.deleteItem = this.deleteItem.bind(this)
	  this.addItem = this.addItem.bind(this)
	  this.onToggleImportant = this.onToggleImportant.bind(this)
	  this.onToggleLiked = this.onToggleLiked.bind(this)
	  this.onUpdateSearch = this.onUpdateSearch.bind(this)
	  this.onFilterSelect = this.onFilterSelect.bind(this)
	  this.maxId = 5

		}

	searchPost(items, term) {
  	if(term.length === 0) {
  		return items
		}

  	return items.filter((item) => {
  		return item.label.indexOf(term) > -1
		})
	}

	filterPost(items, filter) {
  	if(filter === 'like'){
  		return items.filter(item => item.like)
		}	else {
			// return items.filter(item => item.important)
			return items
		}
	}

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

	onUpdateSearch(term) {
  	this.setState({term})
	}

	onFilterSelect(filter) {
  	this.setState({filter})
	}

  render() {
  	const {data, term, filter} = this.state
  	const liked = this.state.data.filter(item => item.like).length
		const allPosts = this.state.data.length
		const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

    return (
      <div className='app'>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter
							filter={filter}
							onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList
					posts={visiblePosts}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}/>
        <PostAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App
