function enviar(){
    var nombre = document.getElementById("nombre").value;
    var apellidopaterno=document.getElementById("apellidoPa").value;
    var apellidomaterno=document.getElementById("apellido materno").value;
    var celular=document.getElementById("celular").value;
    var email=document.getElementById("email").value;

    if(nombre==""){
        alert("Los nombres son obligatorios digitarlos");
        document.getElementById("nombre").focus();
    } else{
        if(apellidoPa==""){
            alert("El Apellido Paterno es obligatorio digitarlo");
            document.getElementById("apellidoPa").focus();
        } else{
            if(apellidomaterno==""){
                alert("El Apellido Materno es obligatorio digitarlo");
                document.getElementById("apellido materno").focus();
            } else{
              if(celular==""){
                alert("El Celular es obligatorio digitarlo");
                document.getElementById("celular").focus();
              } else{
                if(email==""){
                alert("El Email es obligatorio digitarlo");
                document.getElementById("email").focus();
                } else{
                    console.log(nombres+" "+apellidopaterno+" "+apellidomaterno+" "+celular+" "+email+" ");
                    document.getElementById("nombres").value="";
                    document.getElementById("apellido paterno").value="";
                    document.getElementById("apellido materno").value="";
                    document.getElementById("celular").value="";
                    document.getElementById("email").value="";
                    document.getElementById("nombres").focus();
                }
              }
            }
        }
    }
} 
