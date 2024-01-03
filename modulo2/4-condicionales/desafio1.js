let perfil = "invitado";
switch (perfil){
    case " ":
    console.log("Debe especificar el perfil del usuario");
    break;
    case "administrador":
    console.log("Usted tiene todos los privilegios de uso del sistema");
    break;
    case "ADMINISTRADOR":
    console.log("Usted tiene todos los privilegios de uso del sistema");
    break;
    case "Administrador":
    console.log("Usted tiene todos los privilegios de uso del sistema");
    break;
    case "asistente":
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    break;
    case "ASISTENTE":
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    break;
    case "Asistente":
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    break;
    case "invitado":
    console.log("Usted sólo tiene permisos de consultar datos");
    break;
    case "INVITADO":
    console.log("Usted sólo tiene permisos de consultar datos");
    break;
    case "Invitado":
    console.log("Usted sólo tiene permisos de consultar datos");
    break;
    default:
    console.log("Debe especificar un perfil válido");
}