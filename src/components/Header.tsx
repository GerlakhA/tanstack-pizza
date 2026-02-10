import { Button } from '@/components/ui'
import { authClient } from '@/lib/auth-client.ts'
import { Search, ShoppingCart } from 'lucide-react'
import AppLogo from './AppLogo.tsx'
import ProfileButton from './ProfileButton.tsx'
import SignInButton from './SignInButton.tsx'

export default function Header() {
  const { data: session, isPending } = authClient.useSession()

  return (
    <header className="p-8 flex justify-between items-center bg-white border-b border-[#EDEDED]">
      <AppLogo />
      <div className="relative">
        <input
          placeholder="Поиск пиццы..."
          className="w-191 rounded-[15px] bg-[#F9F9F9] h-12.5 pl-10 relative"
        />
        <Search
          size={16}
          className="absolute text-[#ADADAD] top-4.25 left-4.25"
        />
      </div>

      <div className="flex items-center gap-3">
        {/* <CartButton /> */}
        {session?.user ? <ProfileButton /> : <SignInButton />}
        <Button
          onClick={() => {}}
          variant={'outline'}
          className="flex items-center gap-1"
        >
          <ShoppingCart size={16} />
        </Button>
      </div>
    </header>
  )
}
