import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ChatWindow from './components/ChatWindow';

$(function() {
  ReactDOM.render(
    <ChatWindow />,
    document.getElementById('app')
  );
});
