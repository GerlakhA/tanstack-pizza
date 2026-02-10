import z from 'zod'

export const registerFormSchema = z
  .object({
    name: z.string().min(2, 'Имя не должно быть меньше 2 символов.'),
    email: z.email(),
    password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
    confirmPassword: z
      .string()
      .min(6, 'Подтверждение пароля должно быть не менее 6 символов'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  })

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
})
