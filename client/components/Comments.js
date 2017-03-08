/**
 * Created by Daniel on 06.03.2017.
 */
import React from 'react';

const Comments = React.createClass({

    renderComments(comment, i)
    {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={() => this.handleRemove(i)}> &times;</button>
                </p>
            </div>
        )
    },
    handleRemove(index)
    {
        const {postId} = this.props.params;
        this.props.removeComment(postId, index);
    },

    handleSubmit(e)
    {
        e.preventDefault();

        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },


    render()
    {
        // const {comments} = this.props.comments;
        return (
            <div className="comment">
                {this.props.postComments.map(this.renderComments)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden="hidden"/>

                </form>
            </div>
        )
    }

});

export default Comments;
