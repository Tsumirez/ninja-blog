const Home = () => {
    const handleClick = (e) => console.log('ninja button pressed!', e)
    const handleClickAgain = (name,e) => console.log(`Ninjas know your name is ${name}..and other stuff such as..`, e.target)

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Zef',e)}>Another clickbait</button>
        </div>
    )
}

export default Home;