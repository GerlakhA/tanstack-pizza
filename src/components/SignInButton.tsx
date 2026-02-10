import { Button } from '@/components/ui'
import { User } from 'lucide-react'

const SignInButton = () => {
  return (
    <Button
      onClick={() => {}}
      variant={'outline'}
      className="flex items-center gap-1"
    >
      <User size={16} />
      Войти
    </Button>
  )
}

export default SignInButton
