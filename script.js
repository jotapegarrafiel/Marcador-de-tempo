function carregar(){
    let msg = document.querySelector('h1.title')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let agora = 2 //data.getHours()
    msg.innerHTML = `Agora são ${agora} horas.`
    if(agora >= 6 && agora <= 12){
        img.src = 'dia.png'
        document.body.style.background = '#ffb47c'
    } else if (agora >= 13 && agora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#a56965'
    } else if (agora >=18 && agora <= 0) {
        img.src = 'noite.png'
        document.body.style.background = '#1d343a'
    } else { 
        if(agora == '1'){
            msg.innerHTML = `Agora é ${agora} hora.`
        }
        img.src = 'madrugada.png'
        document.body.style.background = '#201d24'
    }
}