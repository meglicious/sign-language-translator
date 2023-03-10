

const ProfileTranlationHistory = ({ translations }) =>{
    const translationList = translations.map( (order, index) => <ProfileTranlationHistory key={ index + '-' + translation} translation={ translation} />)
    return(
        <section>
            <h4>Your translation history:</h4>
            { translationList.length === 0 && <p>You have no translations yet.</p>}
            <ul>{translationList}</ul>
        </section>
    )
}
export default ProfileTranlationHistory