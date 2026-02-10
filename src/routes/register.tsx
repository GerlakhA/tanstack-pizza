import { SignupForm } from '@/components/signup-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  head: () => ({
    meta: [
      {
        title: 'TanStack Pizza - Регистрация',
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignupForm />
    </div>
  )
}
