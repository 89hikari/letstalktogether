import React from 'react';
import classes from'./Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.contant}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGMf5RLsxY1VKguLz-6s6bhYUkC3xWrAmG3Q&usqp=CAU" />
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        Post1
                    </div>
                    <div className={classes.item}>
                        Post2
                    </div>
                    <div className={classes.item}>
                        Post3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;