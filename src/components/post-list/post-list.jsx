import React from 'react'
import './post-list.css'
import {ListGroup} from 'reactstrap'
import PostListItem from '../post-list-item/post-list-item'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

	const postElements = posts.map((item) => {
		return (
				<li className="list-group-item" key={item.id}>
				<PostListItem onDelete={() => onDelete(item.id)}
											label={item.label}
											onToggleImportant={() => onToggleImportant(item.id)}
											onToggleLiked={() => onToggleLiked(item.id)}
											like={item.like}
											important={item.important} />
				</li>
		)
	})

  return (
		<div>
		  <ListGroup className="app-list">
				{postElements}
			 {/*<PostListItem label="Going to learn React" important />*/}
			 {/*<PostListItem label="That is so good" />*/}
			 {/*<PostListItem label="Hello" />*/}
		  </ListGroup>
		</div>
  )
}

export default PostList