const encabezados = document.querySelectorAll('.section-container .encabezado');
const enlaces = document.querySelectorAll('.enlaces a')
const btn_menu = document.querySelector('#btn-menu')
const div_mobile = document.querySelector('#nav-mobile');


window.sr = ScrollReveal();
sr.reveal('.container-about', {
  duration: 3000,
  origin: 'left',
  distance: '30px',
});
sr.reveal('.section-title', {
  duration: 3000,
  origin: 'right',
  distance: '30px',
});
sr.reveal('.section-title-portfolio', {
  duration: 5000,
  origin: 'right',
  distance: '30px',
});
sr.reveal('.container-card-portfolio', {
  duration: 5000,
  origin: 'right',
  distance: '30px',
});
sr.reveal('.container-card-estudios', {
  duration: 5000,
  origin: 'right',
  distance: '30px',
});


btn_menu.addEventListener('click', function () {
  div_mobile.classList.toggle('active');
 
})

const typed = new Typed('.typed', {
  strings: ['Developer', 'Freelance'],
  typeSpeed: 40,
  backSpeed: 20,
  loop: true,
});

let btn_correo = document.getElementById('btn-enviar');
const form = document.getElementById('form');

btn_correo.addEventListener('click', (e) => {
  e.preventDefault();
  const txt_name = document.getElementById('from_name');
  const txt_email = document.getElementById('email_id');
  const txt_message = document.getElementById('message');

  if (
    txt_name.value == '' ||
    txt_email.value == '' ||
    txt_message.value == '') {
    Swal.fire({
      title: 'Ingresar Datos!',
      text: 'Colocar sus datos requeridos',
      icon: 'error',
      confirmButtonText: 'Regresar'
    })
  } else {
    btn_correo.value = "Enviando...";
    const serviceID = 'default_service';
    const templateID = 'template_e5vh609';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btn_correo.value = 'Enviar Correo Electronico';
        Swal.fire({
          position:'top-end',
          icon:'success',
          title:'Datos enviado Correctamente',
          showConfirmButton:false,
          timer:1200
        });
      }, (err) => {
        btn_correo.value = 'Email no enviado';
        alert(JSON.stringify(err));
      });
  }
  form.reset();
});


const btn_cv = document.getElementById('btn-cv');

const dowload = (filename) => {
  let element = document.createElement('a');
  element.setAttribute('href', 'Cv.pdf');
  element.setAttribute('dowload', filename);
  document.body.appendChild(element);
  element.click();
}

btn_cv.addEventListener('click', function () {
  let filename = "cv.pdf";
  dowload(filename);
}, false);
