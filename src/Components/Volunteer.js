import '../Styles/Reservierung.css'

function Volunteer() {
    return (
        <div className='Datepicker'>
            <div>
                <h2>Werde Volunteer</h2>
                <p>Wir kontaktieren dich nach deiner Anfrage. </p>
            </div>
            <div>
                <label>Vor und Nachname</label>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div >
                <label>Mail</label>
                <input type="email" name="mail" required></input>
            </div>
            <div>
                <label>Deine Nachricht an uns</label>
                <textarea className="textArea"></textarea>
            </div>
                <button className='submit'>Abschicken</button>
        </div>

    )
}

export default Volunteer