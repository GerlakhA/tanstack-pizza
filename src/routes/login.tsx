import { LoginForm } from '@/components/login-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  head: () => ({
    meta: [
      {
        title: 'TanStack Pizza - Логин',
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm />
    </div>
  )
}
