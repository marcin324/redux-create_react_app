import uuid from 'uuid';


const addComment = text => {
  return {
    type: 'ADD_COMMENT',
    id: uuid.v4(),
    text: text
  }
}

const thumbUpComment = commentId => {
	return {
		type: 'THUMB_UP_COMMENT',
		id: commentId
	}
}

const thumbDownComment = commentId => {
	return {
		type: 'THUMB_DOWN_COMMENT',
		id: commentId
	}
}

const removeComment = commentId => {
	return {
		type: 'REMOVE_COMMENT',
		id: commentId
	}
}

export {addComment, thumbUpComment, thumbDownComment, removeComment};