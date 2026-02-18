import React from 'react';
import './style/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import BookmarkList from './components/BookmarkList';
import AddBookmark from './components/AddBookmark';
import EditBookmark from './components/EditBookmark'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="container">
          <Routes>
              <Route exact path="/" element={<BookmarkList />} />
              <Route path="/bookmarks" element={<BookmarkList />} />
              <Route path="/add-bookmark" element={<AddBookmark />} />
              <Route path="/edit-bookmark/:id" element={<EditBookmark />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;