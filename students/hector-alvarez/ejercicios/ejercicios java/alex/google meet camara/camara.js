// (hard) Mini version de Google Meet. Google meet es una aplicación para la realizacion de videollamadas.. Vamos a crear una versión local de la misma. En la imagen se encuentra un ejemplo de objetivo final. Los pasos para serán los siguientes:


//1. Debemos generar la siguiente estructura en nuestro documento HTML. (hecho)


/* 
2.La primera parte será poder visualizar la cámara de nuestra cam. Para ello debemos investigar sobre el uso de la siguiente función del api de Media Devices (https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). Esta función nos permite meter en un video del HTML el Stream de video de nuestra cam. Nota: Debemos desactivar nuestra cam del zoom para probarla.
*/

// navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: true,
//   })


  document.querySelector(".botonjoin").addEventListener('click', async (e) => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })
    document.querySelector(".videoclass").srcObject = stream
  })


