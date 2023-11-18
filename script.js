var palabraAdivinar = "javascript";
var palabraJugador = Array(palabraAdivinar.length).fill('_');
var palabraHtml = document.getElementById("palabra");
var intentos = 7;


function MostrarPalabra()
{
    let palabraSinComas = palabraJugador.join(" ");
    palabraHtml.innerHTML = palabraSinComas;
}

function ComprobrarLetra()
{
    var letraAComprobar = document.getElementById("letraIntroducida").value;
    
    for(var i=0; i < palabraAdivinar.length; i++)
    {
        if (palabraAdivinar[i] == letraAComprobar)
        {
            palabraJugador[i] = letraAComprobar
        }
    }
    MostrarPalabra();
}

function ListarEquivocaciones()
{
    var letraAComprobar = document.getElementById("letraIntroducida").value;
    let letraErronea = true;
    for(var i=0; i < palabraAdivinar.length; i++)
    {
        if (palabraAdivinar[i] == letraAComprobar)
        {
            letraErronea = false;
            break;
        }
    }
    
    if(letraErronea)
    {
        letraMayus = letraAComprobar.toUpperCase();
        var listaFalladas = document.getElementById("listaFalladas");
        var nuevoLi = document.createElement("li");
        var letra = document.createTextNode(letraMayus);
        nuevoLi.appendChild(letra);
        listaFalladas.appendChild(nuevoLi);
        
        intentos--;
        var intentosRestantes = document.getElementById("intentos");
        intentosRestantes.innerHTML = intentos;
    }
    let casillaInput = document.getElementById("letraIntroducida");
    casillaInput.value = "";
}

function cambiarImagen() {
    var imagen = document.getElementById("imagen");
    
    switch (intentos) {
        case 6:
            imagen.src = "img/ahorcado1.png";
            break;
        case 5:
            imagen.src = "img/ahorcado2.png";
            break;
        case 4:
            imagen.src = "img/ahorcado3.png";
            break;
        case 3:
            imagen.src = "img/ahorcado4.png";
            break;
        case 2:
            imagen.src = "img/ahorcado5.png";
            break;
        case 1:
            imagen.src = "img/ahorcado6.png";
            break;
        default:
            break;
      }
}

function EndGame()
{
    if (intentos == 0)
    {
        alert("FIN DEL JUEGO");
        location.reload();
    }
}







