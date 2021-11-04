import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList/ContactsList';
import Reviews from './Reviews/Reviews';
import GuestList from './GuestList/GuestList';
import AdminPanel from './AdminPanel/AdminPanel';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AdminPanel />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();