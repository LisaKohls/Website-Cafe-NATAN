import '../Styles/Volunteer.css'
import '../Styles/Text.css'

function Volunteer(){
    return(
        <div className='Volunteer'>
        <form action="#" onSubmit="specialBonus(event)">
            <h2>Als Volunteer bewerben</h2>
            <p>Bitte fülle dieses Formular aus. Wir kontaktieren dich dann nach deiner Anfrage. </p>
            <label htmlFor="name">Vor und Nachname</label>
            <input type="text" id="name" name="name" required></input>
            <label htmlFor="email">Mail</label>
            <input type="email" id="email" name="mail" ></input>
            <label htmlFor="textarea">Deine Nachricht an uns</label>
            <textarea id="textarea"></textarea>
            <button className='btnSubmit'>Abschicken</button>
        </form>
        </div>

    )
}

export default Volunteer