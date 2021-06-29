import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Zef')

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog title:</label>
        <input type="text" required value={title} 
         onChange={(e)=> {
             setTitle(e.target.value)
         }}/>

        <label>Blog body:</label>
        <textarea required onChange={
            (e) => setBody(e.target.value)
        }></textarea>
        
        <label>Blog author:</label>
        <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
          <option value="Zef">Zef</option>
          <option value="Tsumirez">Tsumirez</option>
        </select>
        <button>Add Blog</button>
        <p>{title}, {body}, {author}</p>
      </form>
    </div>
  );
};

export default Create;
