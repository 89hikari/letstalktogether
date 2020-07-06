import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='contant'>
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
