
import { useState } from 'react';

function Contact() {

    const [msgOk, updateResponse] = useState(false);

    const handleSubmit = e => {
        // e.target === el formulario
        e.preventDefault(); // evitamos el refresco por defecto de pantalla
        fetch(`https://formsubmit.co/ajax/healfer@yahoo.es`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
                name: e.target.name.value,
                message: e.target.message.value
            })
        })
        .then(r => r.json())
        .then(() => updateResponse(true))
        .catch(error => console.log(error));
    }

    return (
        <section>
            <h1>Contacto</h1>
            {
                msgOk ? <p>Se ha enviado el mensaje correctamente</p>
                    : ''
            }
            <form onSubmit={handleSubmit}>
                <input type='email' name="email" placeholder="introduzca su email"></input>
                <input type='text' name="name" placeholder="introduzca su nombre"></input>
                <textarea name="message" placeholder="introduzca su mensaje"></textarea>
                <button type="submit">Contactar</button>
            </form>
            <a href='https://twitter.com/MADRID' target='_blank'>Twitter</a>
        </section>
    )
}


export default Contact;