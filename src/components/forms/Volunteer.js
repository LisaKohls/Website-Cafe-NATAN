import '../../styles/PopUpContent.css'
import emailjs from 'emailjs-com';

function Volunteer(props) {
    const SERVICE_ID = 'service_xe2vwog';
    const TEMPLATE_ID = 'template_tjgodks';
    const PUBLIC_KEY = 'hYeEf2ZvtikQQT6Ti';

    function check() {

        const name = document.getElementById("name").value;
        const mail = document.getElementById("mail").value;
        const message = document.getElementById("message").value;

        if (name === ' ' || mail === '' || message === '') {
            alert('Bitte fülle alles vollständig aus')
        } else {

            console.log(`name ${name}, mail ${mail}, message ${message}`)
            props.setTrigger(false);
            emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                name: name,
                mail: mail,
                message: message,
            }, PUBLIC_KEY).then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
        }
    }

    return (
        <div className='formular volunteer'>
            <div>
                <h2>Werde Volunteer</h2>
            </div>
            <div>
                <label>Vor- und Nachname</label>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div>
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