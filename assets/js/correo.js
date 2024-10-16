function sendEmail() {
    // Obtén los valores de los inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verifica que todos los campos estén llenos
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Envía el correo
    emailjs.send("service_ebp6xe5", "template_qb1k4bn", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado exitosamente!');
    }, (error) => {
        console.log('FAILED...', error);
        alert('Error al enviar el mensaje, por favor intenta de nuevo.');
    });
}
