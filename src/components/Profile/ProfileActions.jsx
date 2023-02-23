import { useUser } from "../../context/UserContext"
import { Link } from "react-router-dom"
import { storageDelete, storageSave } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"



const ProfileActions = () =>{
    const { setUser } = useUser()
    const handleLogoutClick =() =>{
        if( window.confirm('Are you sure?')){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    const handleClearHistoryClick = async () =>{
        if (!window.confirm('Are you sure? \nThis will be permanent.')){
            return 
        }
        const [ clearError, clearResult] = await orderClearHistory(user.id)
        if (clearError !==null){
            return
        }
        const updatedUser = {
            ...user,
            translations: []
        }
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return(
        <ul>
            <li><link><Link to= "/translations">Translations</Link></link></li>
            <li><button onClick={handleClearHistoryClick}>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions