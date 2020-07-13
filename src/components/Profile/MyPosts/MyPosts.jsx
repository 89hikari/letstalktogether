import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, post: "Hi, hru", likes: '24'},
        {id: 2, post: "Test", likes: '12'}
    ];

    let postsElements = posts.map(el => <Post message={el.post} likes={el.likes}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;