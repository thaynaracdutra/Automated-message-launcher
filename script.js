function sendMessage(element) {
    let text = element.firstElementChild.innerText;
    let number = prompt("Para qual número deseja enviar essa mensagem?");
    let whatsapplink = `https://api.whatsapp.com/send?phone=55${number}&text=${text}`;
    
    window.open(whatsapplink);
    
}