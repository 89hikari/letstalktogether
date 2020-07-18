import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.state.map(el => <Post message={el.post} likes={el.likes}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value; 
        props.addPost(text);
        newPostElement.current.value = ''; 
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea className={classes.text} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;