import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    //let name = 'Zef'
    const [blogs, setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    setIsPending(false);
                    setBlogs(null);
                    throw Error('Just as you thought - it\'s fucked.')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
        },1000);
    },[])

    return (
        <div className="home">
            {error  && <div>Error: {error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    )
}
export default Home;