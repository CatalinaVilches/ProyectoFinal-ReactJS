import * as yup from 'yup';


let userSchema = yup.object({
  fullname: yup.string()
    .required("El nombre es necesario para completar tu compra."),
  
  phone: yup.string()
    .required("El teléfono es obligatorio para contactarnos."),
  
  mail: yup.string()
    .email("Parece que el correo ingresado no es válido.")
    .required("Es necesario ingresar tu correo electrónico para enviarte la confirmación."),
  
  mailConfirmation: yup.string()
    .oneOf([yup.ref('mail')], "El correo de confirmación debe coincidir con el correo electrónico ingresado.")
    .required("Por favor, confirma tu correo electrónico para completar el proceso.")
});


const validateForm = async (dataForm) => {
  try {
    
    await userSchema.validate(dataForm);
    return { status: "success" }; 
  } catch (error) {
    
    return { status: "error", message: error.message };
  }
};

export default validateForm;