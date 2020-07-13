import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687" alt="" />
            {props.message}
            <div className="likesCount">
                Likes: {props.likes}
            </div>
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;