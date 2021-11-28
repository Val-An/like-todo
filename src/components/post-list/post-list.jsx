import React from 'react'
import './post-list.css'
import PostListItem from '../post-list-item/post-list-item'

const PostList = () => {
  return (
		<div>
		  <ul className="app-list list-groupe">
			 <PostListItem />
			 <PostListItem />
			 <PostListItem />
		  </ul>
		</div>
  )
}

export default PostList