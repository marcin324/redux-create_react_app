import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
	<div>
		{text} <span> Votes: {votes} </span>
		<button onClick={() => thumbUpComment(id)}>Thumb up</button>
		<button onClick={() => thumbDownComment(id)}>Thumb down</button>
		<button onClick={() => removeComment(id)}>Remove comment</button>
	</div>;

export default Comment;