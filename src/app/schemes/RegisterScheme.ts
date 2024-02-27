import z from 'zod';

export const registerScheme = z.object({
  username:z.string(),
  email: z.string({
    required_error: 'The email is required'
  }).email({ message: 'Formato de email inválido' }),
  password: z.string({
    required_error: 'The password is required'
  }).min(5, { message: 'La contraseña debe tener al menos 5 caracteres' }).max(50, { message: 'La contraseña puede tener máximo 50 caracteres' }),
  repeatPassword: z.string({
    required_error: 'Repeat password is required'
  }).min(5, { message: 'Debe coincidir con la contraseña' })
});
