import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [blogs, setBolgs] = useState([]);

    useEffect(() => {

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBolgs(data))

    }, [])

    return (
        <div>
            <h1>Data : {blogs.length}</h1>
        </div>
    );
};

export default Blogs;