import UserProvider from "./UserContext"

const { Children } = require("react")

const AppContext = ({ children }) =>{
    return(
        <UserProvider>
            { children }
        </UserProvider>
    )
}
export default AppContext