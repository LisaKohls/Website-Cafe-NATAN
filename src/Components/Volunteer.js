import '../Styles/Reservierung.css'

function Volunteer(props) {
/*
    document.getElementById("volunteerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        //<script src="https://cdn.emailjs.com/sdk/2.6.4/email.min.js"></script>

        const SERVICE_ID = 'Ihre_Service_ID';
        const TEMPLATE_ID = 'template_tjgodks';
        const BENUTZER_ID = 'Ihre_Benutzer_ID';

        var name = document.getElementById("name").value
        var mail = document.getElementById("mail").value
        var message = document.getElementById("message").value
        console.log(`name ${name}, mail ${mail}, message ${message}`)

        var data = {
            name: name,
            mail: mail,
            message: message
        }//id


    })*/

    function check(){

        var name = document.getElementById("name").value
        var mail = document.getElementById("mail").value
        var message = document.getElementById("message").value
        if(name === ' ' || mail === '' || message === ''){
            alert('Bitte fülle alles vollständig aus')
        }else{
            alert('Wir haben das Natan Team mit deiner Anfrage kontaktiert und melden uns dann bei dir')
            console.log(`name ${name}, mail ${mail}, message ${message}`)
            props.setTrigger(false);
        }


    }
    return (
        <div className='Datepicker' >

            <div>
                <h2>Werde Volunteer</h2>
            </div>
            <div>
                <label>Vor und Nachname</label>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div >
                <label>Mail</label>
                <input type="email" id="mail" name="mail" required></input>
            </div>
            <div>
                <label>Deine Nachricht an uns</label>
                <textarea id="message" className="textArea"></textarea>
            </div>
                <button type="submit" className='submit' onClick={check}>Abschicken</button>
        </div>
    )
}

export default Volunteer