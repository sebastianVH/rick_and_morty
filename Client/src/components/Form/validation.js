

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

const expresionRegular = /^(?=.{1,35}$).+/;

const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/



export function Validations(data){
    const errors = {}

    if(!regexEmail.test(data.email)) errors.email = "Ingrese un mail válido";
    if(!expresionRegular.test(data.email)) errors.email = "La longitud debe tener menos de 35 caracteres";
    if(!regexPassword.test(data.password))errors.password = 'La contraseña debe tener al menos un número, y entre 6 y 10 caracteres';
    if(data.password !== data.password2) errors.password2 = 'Las contraseñas no coinciden'

    return errors;
}
