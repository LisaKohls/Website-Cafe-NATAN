import '../../styles/PopUpContent.css'
import emailjs from 'emailjs-com';

function Volunteer(props) {
    const SERVICE_ID = 'service_xe2vwog';
    const TEMPLATE_ID = 'template_tjgodks';
    const PUBLIC_KEY = 'hYeEf2ZvtikQQT6Ti';

    function check(){

        const nameInput = document.getElementById("name");
        let mailInput = document.getElementById("mail");
        const messageInput = document.getElementById("message");

        const name = nameInput.value;
        let mail = mailInput.value;
        const message = messageInput.value;

        const isValidMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail);

        if (name === "") {
            nameInput.style.borderColor = 'red'
        }else{
            nameInput.style.borderColor = 'black'
        }

        if (mail === ""){
            mailInput.style.borderColor = 'red'
        }else if(!isValidMail){
            mailInput.style.borderColor = 'red'
            mailInput.value = ''
            mailInput.setAttribute('placeholder', 'Gebe eine korrekte E-Mail an');
        } else{
            mailInput.style.borderColor = 'black'
            mailInput.removeAttribute('placeholder')
        }


        if(name !== '' && mail !== ''){
            console.log(`name ${name}, mail ${mail}, message ${message}`)
            /*
            props.setTrigger(false);
            emailjs.send(SERVICE_ID,TEMPLATE_ID,{
                name: name,
                mail: mail,
                message: message,
            },PUBLIC_KEY ).then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );*/
        }




    }
    return (
        <div className='formular volunteer' >
            <div>
                <h2>Werde Volunteer</h2>
            </div>
            <div>
                <label>Vor- und Nachname:*</label>
                <input type="text" id="name" name="name" required></input>
            </div>
            <div >
                <label>Mail:*</label>
                <input type="email" id="mail" name="mail" placeholder=" " required></input>
            </div>
            <div>
                <label>Deine Nachricht an uns:</label>
                <textarea id="message" className="textArea"></textarea>
            </div>
            <button type="submit" className='submit' onClick={check}>Abschicken</button>
        </div>
    )
}

export default Volunteer
