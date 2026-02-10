import { Button } from '@/components/ui'
import { User } from 'lucide-react'

const ProfileButton = () => {
  return (
    <Button
      onClick={() => {}}
      variant={'outline'}
      className="flex items-center gap-1"
    >
      <User size={16} />
      Профиль
    </Button>
  )
}

export default ProfileButton
