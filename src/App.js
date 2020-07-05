import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src='https://s2.logaster.com/static/v3/img/products/logo.png' />
      </header>
      <nav className='nav'>
        <div>
          <a href='#'>My Profile</a>
        </div>
        <div>
        <a href='#'>Messages</a>
        </div>
        <div>
        <a href='#'>News</a>
        </div>
        <div>
        <a href='#'>Settings</a>
        </div>
      </nav>
      <div className='contant'>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGMf5RLsxY1VKguLz-6s6bhYUkC3xWrAmG3Q&usqp=CAU"/>
        </div>
        <div>
          avatar + description
        </div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            <div>
              Post1
            </div>
            <div>
              Post2
            </div>
            <div>
              Post3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
