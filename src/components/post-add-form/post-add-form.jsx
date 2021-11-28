import React from 'react'
import './post-add-form.css'

const PostAddForm = () => {
  return (
			<form className="bottom-panel d-flax" >
				<input type="text"
							 placeholder="О чем Вы думаете сейчас?"
							 className="fprm-control new-post-label"
				/>
				<button type="submit" className="btn btn-outline-secondary">
					Добавить
				</button>
			</form>
  )
}

export default PostAddForm