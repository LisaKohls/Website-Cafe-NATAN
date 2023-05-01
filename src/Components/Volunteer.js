

function Volunteer(){
    return(
        <div>
        <form action="#" onSubmit="specialBonus(event)">

            <h1>Als Volunteer bewerben</h1>
            <p>Bitte fülle dieses Formular aus. Wir kontaktieren dich dann nach deiner Anfrage </p>

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