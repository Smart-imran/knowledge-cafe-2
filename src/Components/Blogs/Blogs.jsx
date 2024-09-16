import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({addToBookmark, handleMarkAsRead}) => {

    const [blogs, setBolgs] = useState([]);

    useEffect(() => {

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBolgs(data))

    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs : {blogs.length}</h1>

            {
                blogs.map( blog => <Blog 
                
                key = {blog.id}
                blog={blog}
                addToBookmark = {addToBookmark}
                handleMarkAsRead = {handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    
    addToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}

export default Blogs;