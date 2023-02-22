import { useUser } from "../../context/UserContext"
import { Link } from "react-router-dom"
import { storageDelete } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"



const ProfileActions = () =>{
    const { setUser } = useUser()
    const handleLogoutClick =() =>{
        if( window.confirm('Are you sure?')){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    return(
        <ul>
            <li><link><Link to= "/translations">Translations</Link></link></li>
            <li><button>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions