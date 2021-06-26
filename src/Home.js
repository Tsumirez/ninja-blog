import { useState } from 'react'

const Home = () => {
    //let name = 'Zef'
    const [blogs, setBlogs] = useState([
        {title:'FFXIV fashion blog', body: 'Lorem ipsum...', author: 'Zef', id: 1},
        {title:'Best battle music', body: 'Lorem ipsum...', author: 'YtFinest', id: 2},
        {title:'How to quit LoL', body: 'Lorem ipsum...', author: 'Freeman', id: 3}
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>author: {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;