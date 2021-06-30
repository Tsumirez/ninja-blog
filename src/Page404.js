import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div className="not-found">
            <h2>404 mothafucka!</h2>
            <p>That page does not exist!</p>
            <Link to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;