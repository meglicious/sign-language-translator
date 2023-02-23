import { addTranslation } from "../api/translation"
import TranslationForm from "../components/Translations/TranslationForm"
import { STORAGE_KEY_USER } from "../const/storageKeys";
import withAuth from '../hoc/withAuth';
import './Username'
import Username from './Username';

const { user, setUser } = useUser()

const handleTranslateClicked = async textToTranslate =>{
    //handle the text in translation
    if(TranslationForm === null){
        alert('Please enter a word first')
        return
    }
    //Send an HTTP request
    const [ error, updatedUser] = await addTranslation(user, translation)
    if (error !== null){
        return
    }
    // Keep UI state and Server state in sync
    storageSave(STORAGE_KEY_USER, updatedUser)
    //update context state
    setUser(updatedUser)
}

const Translations = () =>{
    return(
        <> 
        <h2>Sign Language Translator</h2>
        <section id="Translate-text">
            <TranslationForm onTranslate={ handleTranslateClicked}/>

        </section>
        </>
    )
}

const Translation = () => {
    return (
       <h2>Translation</h2>
    
    )
}

export default withAuth(Translation)