import { useForm } from "react-hook-form"

const TranslationForm = () =>{
    const { register, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = ({ textForTranslation}) =>{onTranslate(textForTranslation) }
    return 
    <form onSubmit={ handleSubmit(onSubmit) }>
        <fieldset>
            <label htmlFor="Translate-text">Translate text:</label>
            <input type="text" {...register('Tranlated text') }/>
        </fieldset>
        <button type="submit">Translate</button>
    </form>
}
export default TranslationForm