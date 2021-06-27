import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    //let name = 'Zef'
    const [blogs, setBlogs] = useState([
        {title:'FFXIV fashion blog', body: 'Lorem ipsum...', author: 'Zef', id: 1},
        {title:'Best battle music', body: 'Lorem ipsum...', author: 'YtFinest', id: 2},
        {title:'How to quit LoL', body: 'Lorem ipsum...', author: 'Freeman', id: 3}
    ]);

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id!==id))
    }

    useEffect(()=>{
        console.log('use effect ran')
        console.log(blogs);
    })

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter(blog => blog.author!=='Zef')} title="Blogs not from Zef" /> */}
        </div>
    )
}
export default Home;