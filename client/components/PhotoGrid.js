import React from 'react';
import Photo from './Photo';


const PhotoGtid = React.createClass({

    componentWillMount() {

        console.log('mount');
        this.props.loadPosts();
        this.props.loadComments();

    },

    render()
    {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo {... this.props} key={i} i={i} post={post}/>)}
            </div>
        )
    }

});

export default PhotoGtid;