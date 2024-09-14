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
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs : {blogs.length}</h1>
        </div>
    );
};

export default Blogs;