import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {addPost, updatePostText} from './redux/state'
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.profilePage.sitebar}/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} />} />
          <Route path='/profile' render={() => <Profile addPost={props.addPost} profilePage={props.state.profilePage} updatePostText={props.updatePostText}/>} />
          <Route path='/news' component={Profile} />
          <Route path='/music' component={Profile} />
          <Route path='/settings' component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
