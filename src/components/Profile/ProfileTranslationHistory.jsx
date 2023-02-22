

const ProfileTranlationHistory = ({ translations }) =>{
    const translationList = translations.map( (order, index) => <ProfileTranlationHistory key={ index + '-' + translation} translation={ translation} />)
    return(
        <section>
            <h4>Your translation history:</h4>
            <ul>translationList</ul>
        </section>
    )
}
export default ProfileTranlationHistory