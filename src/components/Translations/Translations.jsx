import { addTranslation } from "../../api/translation"
import TranslationForm from "./TranslationForm"

const { user } = useUser()

const handleTranslateClicked = async textToTranslate =>{
    //handle the text in translation
    if(TranslationForm === null){
        alert('Please enter a word first')
        return
    }
    //Send an HTTP request
    const [ error, result] = await addTranslation(user, translation)

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