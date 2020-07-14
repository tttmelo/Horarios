function carregar(){


    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours ()

    // var hora = 6
    
    msg.innerHTML = `Agora são ${hora}h`

    if (hora >= 6 && hora <= 12) 
        {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#5585bf'
        } 
        else  if (hora >12 && hora <= 18)
        {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#e98248'
        } 
        else if (hora >= 19 && hora <= 23)
        {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#0a1819'
        }
        else 
        {
        //BOA MADRUGADA
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#4b414c'
        }

}


    // function week () 
    // {
    //     var week = document.getElementById('week')
    //     var date3 = new Date()
    //     var gtweek = date3.getDay()
    //     week.textContent = `${gtweek}`

    //     switch (gtweek)
    //     {
    //         case 0:
    //             week.innerHTML = `Sunday`
    //         break

    //         case 1:
    //             week.innerHTML = `Monday`
    //         break

    //         case 2:
    //             week.innerHTML = `Tuesday`
    //         break

    //         case 3:
    //             week.innerHTML = `Wednesday`
    //         break

    //         case 4:
    //             week.innerHTML = `Thursday`
    //         break

    //         case 5:
    //             week.innerHTML = `Friday`
    //         break

    //         case 6:
    //             week.innerHTML = `Saturday`
    //         break
            
    //     }
    // }

