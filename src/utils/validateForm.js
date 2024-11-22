import * as yup from 'yup';


const userSchema = yup.object({
  fullname: yup.string().required("El nombre es requerido"),
  phone: yup.string().required("El teléfono es requerido"),
  mail: yup.string()
    .email("Formato de correo inválido")
    .required("El correo electrónico es requerido"),
  mailConfirmation: yup.string()
    .oneOf([yup.ref('mail')], "El correo de confirmación debe coincidir con el correo electrónico")
    .required("El correo de confirmación es requerido")
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
