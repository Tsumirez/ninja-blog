import './App.css';

function App() {

  const title = "Welcome on the chopping block"
  let dislikes = 50;
  const person = {name: 'Zef', age: 40}
  const link="http://www.guildwars2.com"

  return (
    <div className="App">
     <div className="content">
       <h1>{title}</h1>
       <p>Likes: -{dislikes}</p>
       <p>Mostly by {"hello ninjas"}</p>
       <p>{[0,1,2,3,4]}</p>
       <p>{Math.random()*10}</p>

       <a href={link}>Link to awesome</a>
     </div>
    </div>
  );
}

export default App;
