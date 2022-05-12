const comp = () => {
	return (`<button class="comment__button" onClick={() => upvoteComment('asd')}>&#9650; Upvote</button>`)
}

const upvote = document.getElementById('upvote');
console.log(upvote);
ReactDOM.render(comp(), upvote);