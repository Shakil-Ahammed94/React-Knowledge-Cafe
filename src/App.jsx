
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setreadingTime]=useState(0);

  const handleBookmark=blog=>{
    const newBookmark=[...bookmarks,blog];
    setBookmarks(newBookmark);
  }

  const handleReadingTime=(id,time)=>{
    const newReadingTime=readingTime+time;
    setreadingTime(newReadingTime);
    const remainingBookbark=bookmarks.filter(bookmark=>bookmark.id!==id);
    setBookmarks(remainingBookbark);
  }

 
 

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
