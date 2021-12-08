import React from 'react'
import './post-list.css'
import PostListItem from '../post-list-item/post-list-item'

const PostList = ({posts}) => {

	const postElements = posts.map((item) => {
		return (
				<li className="list-group-item" key={item.id}>
				<PostListItem label={item.label} important={item.important} />
				</li>
		)
	})

  return (
		<div>
		  <ul className="app-list list-groupe">
				{postElements}
			 {/*<PostListItem label="Going to learn React" important />*/}
			 {/*<PostListItem label="That is so good" />*/}
			 {/*<PostListItem label="Hello" />*/}
		  </ul>
		</div>
  )
}

export default PostList