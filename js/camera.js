const botaoRostinho = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector("[data-video]");
const tirarFoto = document.querySelector("[data-tirar-foto]");
const fotoCanvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const btnEnviar = document.querySelector("[data-enviar]");

let imagemURL="";

botaoRostinho.addEventListener("click", conectaCamera) 
   
async function conectaCamera() {
botaoRostinho.style.display = "none";
campoCamera.style.display = "block";

const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });  //configuração assincrona para receber o video

video.srcObject = iniciarVideo; //inserindo o video no elemento chamado "video"
}


tirarFoto.addEventListener("click", ()=>{
    fotoCanvas.getContext('2d').drawImage(video, 0, 0, fotoCanvas.width, fotoCanvas.height);

    imagemURL = fotoCanvas.toDataURL("imagem/jpeg");
    campoCamera.style.display = "none";
    mensagem.style.display = "block";


})

btnEnviar.addEventListener("click", ()=>{
    const receberDadosExistentes = localStorage.getItem("cadastro");
    console.log(receberDadosExistentes);
    const converteRetorno = JSON.parse(receberDadosExistentes);
    converteRetorno.imagem = imagemURL;
    console.log(converteRetorno);

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = "./abrir-conta-form-3.html";

})