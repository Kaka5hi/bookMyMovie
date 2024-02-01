import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error-container">
            <p>URL that you entered doesn't exist.</p>
            <Link to={`/`}>Go back to homepage</Link>
        </div>
    );
};

export default Error;
