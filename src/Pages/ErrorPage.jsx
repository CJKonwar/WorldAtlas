import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const error = useRouteError();

    return (

        <div>

            <h1>Ops an error occurred!</h1>
            {error && <p> {error.data}</p>}

            <NavLink to="/"> <button>Go back to Home</button></NavLink>

        </div>
    )

    
}   ;