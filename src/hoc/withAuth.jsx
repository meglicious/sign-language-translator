import { Component } from "react";

const withAuth = Component => props => {
    const { user } = useUser()
    if (user !==null){
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}
export default withAuth