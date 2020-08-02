

var personas= [];
function Persona(nom,ape,tel,em,ced,fech, sig)
{
this.nombre= nom;
this.apellido= ape;
t= parseFloat(tel);
if(isNaN(t))
{
t=0;
}
this.telefono= t;
this.email= em;
c= parseFloat(ced);
if(isNaN(c))
{
    c=0;
}
this.cedula= c;
this.fecha= fech;
this.zodiaco=sig;

}

function Agregar()
{
    nom = document.getElementById("txtNombre").value;
    ape = document.getElementById("txtApellido").value;
    tel = document.getElementById("txtTelefono").value;
    em = document.getElementById("txtEmail").value;
    ced = document.getElementById("txtCedula").value;
    fech = document.getElementById("txtFecha").value;
    sig=signozod();
    e=new Persona (nom,ape,tel,em,ced,fech, sig);
    personas.push(e);
        mostrar();
        clean();
        guardarDatos();
 
      
}
function eliminartodo(){
 var Table = document.getElementById("Datos"); Table.innerHTML = "";
 guardarDatos(); 
}
function editarFila (btn) {


tr = btn.parentNode.parentNode;
tr.setAttribute('class','borrar');
if(confirm('Desea cambiar los datos')){
indice = tr.getAttribute('indice');
tarr= [];
for(x=0;x < personas.length;x++){
if(x!=indice){
tarr.push(personas[x]);
}
if(x==indice)
{
    persona = personas[x];
    nom = persona.nombre;
    ape=persona.apellido;
    tel=persona.telefono;
    em=persona.email;
    ced=persona.cedula;
    fech=persona.fecha;

    document.getElementById("txtNombre").value=nom;
    document.getElementById("txtApellido").value=ape;
    document.getElementById("txtTelefono").value=tel;
    document.getElementById("txtEmail").value=em;
    document.getElementById("txtCedula").value=ced;
    document.getElementById("txtFecha").value=fech;
}
} 
personas=tarr;

guardarDatos();
}
}
function dce(e)
{
return document.createElement(e);
}
function getid(id)
{
    return document.getElementById(id);
}

function clean()
{
getid('txtNombre').value='';
getid('txtApellido').value='';
getid('txtTelefono').value='';
getid('txtEmail').value='';
getid('txtCedula').value='';
getid('txtFecha').value='';
}
function borrarFila(btn)
{
tr = btn.parentNode.parentNode;
tr.setAttribute('class','borrar');
if(confirm('Esta seguro que desea eliminar?')){
indice = tr.getAttribute('indice');
tarr= [];
for(x=0;x < personas.length;x++){
if(x!=indice){
tarr.push(personas[x]);
}

}
personas=tarr;
tr.parentNode.removeChild(tr);
guardarDatos();
}
tr.setAttribute('class', '');
}

function guardarDatos(){
    datos = JSON.stringify(personas);
    localStorage.setItem('Formulario',datos);
}
function mostrar()
{
    destino= document.getElementById("Datos");
    destino.innerHTML='';
    for(x=0; x < personas.length; x++)
    {
        persona= personas[x];

       tr=dce('tr');
       tr.setAttribute('indice',x);

       td=dce('td');
       td.innerHTML= persona.nombre;
       tr.appendChild(td);

       td=dce('td');
       td.innerHTML= persona.apellido;
       tr.appendChild(td);

       td=dce('td');
       td.innerHTML= persona.telefono;
       tr.appendChild(td);

       td=dce('td');
       td.innerHTML= persona.email;
       tr.appendChild(td);

       td=dce('td');
       td.innerHTML= persona.cedula;
       tr.appendChild(td);

       td=dce('td');
       td.innerHTML= persona.fecha;
       tr.appendChild(td);

       td=dce('td');
       td.innerHTML= persona.zodiaco;
       tr.appendChild(td);

       td=dce('td');
       btn=dce('button');
       btn.innerHTML = 'Eliminar';
       btn.setAttribute('onclick','borrarFila(this)');
       td.appendChild(btn);
       tr.appendChild(td);

       btn=dce('button');
       btn.innerHTML = 'Editar';
       btn.setAttribute('onclick','editarFila(this)');
       td.appendChild(btn);
       tr.appendChild(td);
       destino.appendChild(tr);

    }
}
function signozod(){
  fech = new Date (getid('txtFecha').value);
dia= fech.getDate()+1;
mes = fech.getMonth()+1;
 signo="";
    switch(mes){
        case 1 :
            if(dia>21){
         signo="Acuario";
            }else{
                signo="Capricornio";
            }
            break;
            case 2 :
                if(dia>19){
              signo="Piscis";
                }else{
                    signo="Acuario";
                } 
                break;
                case 3 :
                    if(dia>20){
                        signo="Aries";
        
                    }else{
                        signo="Piscis";
                    } break;
                    case 4 :
                        if(dia>20){
                            signo="Tauro";
            
                        }else{
                            signo="Aries";
                        } break;
                        case 5 :
                            if(dia>22){
                                signo="Geminis";
                
                            }else{
                                signo="Tauro";
                            } break;
                            case 6 :
                                if(dia>20){
                                    signo="Cancer";
                    
                                }else{
                                    signo="Geminis";
                                } break;
                                case 7 :
                                    if(dia>22){
                                        signo="Leo";
                        
                                    }else{
                                        signo="Cancer";
                                    } break;
                                    case 8 :
                                        if(dia>21){
                                            signo="Virgo";
                            
                                        }else{
                                            signo="Leo";
                                        } break;
                                        case 9 :
                                            if(dia>22){
                                                signo="Libra";
                                
                                            }else{
                                                signo="Virgo";
                                            } break;
                                            case 10:
                                                if(dia>19){
                                                    signo="Escorpion";
                                    
                                                }else{
                                                    signo="Libra";
                                                } break;
                                                case 11 :
                                                    if(dia>21){
                                                        signo="Sagitario";                 
                                                    }else{
                                                        signo="Escorpio";
                                                    } break;
                                                    case 12 :
                                                        if(dia>21){
                                                            signo="Capricornio";
                                            
                                                        }else{
                                                            signo="Sagitario";
                                                        } break;


    }
    return signo;
}
function cargarDatos()
{
    datos= localStorage.getItem('Formulario');
    if(datos !=null)
    {
         personas = JSON.parse(datos);
         mostrar();
    }
}

    