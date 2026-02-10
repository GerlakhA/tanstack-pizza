import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { loginFormSchema } from '@/config/schema'
import { authClient } from '@/lib/auth-client'
import { cn } from '@/lib/utils'
import { useForm } from '@tanstack/react-form'
import { Link, useNavigate } from '@tanstack/react-router'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onChange: loginFormSchema,
    },
    onSubmit: async (formData) => {
      await authClient.signIn.email(
        {
          email: formData.value.email,
          password: formData.value.password,
          callbackURL: '/',
        },
        {
          onSuccess: () => {
            toast.success('SignIn successful')
            navigate({ to: '/' })
          },
          onError: (ctx) => {
            toast.error(ctx.error.message)
          },
        },
      )
    },
  })

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className={cn('flex flex-col gap-6 w-137.5', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Войдите в свой аккаунт</CardTitle>
          <CardDescription>
            Введите свой адрес электронной почты ниже, чтобы войти в свой
            аккаунт
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        type="email"
                        placeholder="m@example.com"
                        required
                        autoComplete="off"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                      <FieldDescription>
                        Мы будем использовать это для связи с вами. Мы не будем
                        передавать ваш адрес электронной почты никому другому.
                      </FieldDescription>
                    </Field>
                  )
                }}
              />
              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor="password">Пароль</FieldLabel>
                      <div className="relative">
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          type={showPassword ? 'text' : 'password'}
                          placeholder="******"
                          required
                          autoComplete="off"
                        />
                        {showPassword ? (
                          <EyeOff
                            onClick={toggleShowPassword}
                            className="absolute top-2 right-5 w-5 h-5"
                          />
                        ) : (
                          <Eye
                            onClick={toggleShowPassword}
                            className="absolute top-2 right-5 w-5 h-5"
                          />
                        )}
                      </div>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
              <Button type="submit">Login</Button>
              <Button variant="outline" type="button">
                Login with Google
              </Button>
              <FieldDescription className="text-center">
                Don&apos;t have an account? <Link to="/register">Sign up</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
