import { useState } from 'react';

const Home = () => {
    //let name = 'Zef'
    const [name, setName] = useState('Zef');
    const [age, setAge] = useState(39);

    const handleClick = () => {
        setName('Zefer');
        setAge(29);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} and kicks ass.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Home;