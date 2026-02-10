import { Button } from '@/components/ui'
import { authClient } from '@/lib/auth-client'
import { useNavigate } from '@tanstack/react-router'
import { LogOut, User } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const ProfileButton = () => {
  const navigate = useNavigate()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          onClick={() => {}}
          variant={'outline'}
          className="flex items-center gap-1"
        >
          <User size={16} />
          Профиль
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 bg-white">
        <ul className="flex flex-col">
          <li
            onClick={() =>
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    navigate({ to: '/login' })
                  },
                },
              })
            }
            className="flex items-center gap-2"
          >
            <LogOut /> Выйти
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}

export default ProfileButton
