import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, post: "Hi, hru", likes: '24'},
  {id: 2, post: "Test", likes: '12'}
];

let dialogs = [
  {id: 1, name: "Andrey"},
  {id: 2, name: "Vlad"},
  {id: 3, name: "Vandes"},
  {id: 4, name: "Valera"},
  {id: 5, name: "Aloxa"},
  {id: 6, name: "Some"},
];

let messages = [
  {id: 1, message: "yoyoyo"},
  {id: 2, message: "yoyoyo1"},
  {id: 3, message: "yoyoyo2"},
  {id: 4, message: "yoyoyo3"},
  {id: 5, message: "yoyoyo4"},
  {id: 6, message: "yoyoyo5"},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
