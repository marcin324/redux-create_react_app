import React from 'react';
import Comment from './CommentContainer.js';

const CommentsList = ({comments}) => <div>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</div>;

export default CommentsList;