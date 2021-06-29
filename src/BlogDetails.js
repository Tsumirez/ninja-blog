import { useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    return (
        <div className="blog-details">
            {isPending && '<p>Loading ... </p>'} 
            {error && <div>{error}</div>}
            <article>
              <h2>{blog.title}</h2>
              <h4>Author: {blog.author}</h4>
              <div>{blog.body}</div>
            </article>
        </div>
    )
}

export default BlogDetails;