import {useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import {loginUser} from '../../api/user';
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';


const usernameConfig = { required: true, minLength: 4};

const LoginForm = () => {
    //Hooks
    const {register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser} = useUser()
    const navigate = useNavigate()

    // local State
    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError] = userState(null)

    // Side Effects
    useEffect(() => {
      if (user !==null){
        navigate('profile')
      }
    }, [ user, navigate])

    // Event Handlers
    const onSubmit = async ( {username} ) => {
        setLoading(true);
     const [ error, userReponse] = await loginUser(username)
     if (error !==null){
        setApiError(error)
     }
     if (userReponse !==null){
        storageSave(STORAGE_KEY_USER, userReponse)
        setUser(userReponse)
     }
      setLoading(false);
    }
  
    // Render functions
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }
        if (errors.username.type === 'required'){
            return <span>Username is required</span>

        }
        if (errors.username.type === 'minLength') {
            return <span>Username is too short (min. 4)</span>

        }
    })()

    return (
        <>
        <h2>What is your username?</h2>
            <form onSubmit={ handleSubmit(onSubmit)}>
                <fieldset>
                <label htmlFor='usename' >Username: </label>
                <input 
                    type = "text"
                    placeholder='minimum 4 letters'
                     { ...register("username")} />
                     { errorMessage }
                </fieldset>

                <button type="submit" disabled={loading}>Continue</button>
                {loading && <p>Logging in...</p>}
                {apiError && <p>{ apiError}</p>}
            </form>
        </>
    );
};
export default LoginForm;