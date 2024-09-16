
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const addToBookmark = (blog) => {
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks);
  }

  const handleMarkAsRead = (time) =>{
    setReadingTime(readingTime+time);
  }
  

  return (
    <>      

          <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
          <Blogs 
          addToBookmark = {addToBookmark}
          handleMarkAsRead ={handleMarkAsRead}          
          ></Blogs>
          <Bookmarks bookmarks = {bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
      
     
    </>
  )
}

export default App
