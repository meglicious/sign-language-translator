
import ProfileActions from '../components/Profile/ProfileActions';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileTranlationHistory from '../components/Profile/ProfileTranslationHistory';
import withAuth from '../hoc/withAuth';
import { useUser } from '../context/UserContext';



const Profile = () => {
    const { user } = useUser()
    
    return (
        <>
            <h2>Profile</h2>
            <ProfileHeader username={ user.username}/>
            <ProfileActions />
            <ProfileTranlationHistory translations={ user.translations}/>
        </>
    )
}

export default withAuth(Profile) 
