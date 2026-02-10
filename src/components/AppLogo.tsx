import { Link } from '@tanstack/react-router'

const AppLogo = () => {
  return (
    <Link to="/" className="flex gap-4 justify-center items-center">
      <img src="/logo.png" width={35} height={35} />
      <div className="flex flex-col gap-2">
        <h1 className="font-black text-2xl">Tanstack Pizza</h1>
        <span className="font-normal text-[16px] text-[#7B7B7B]">
          вкусней уже некуда
        </span>
      </div>
    </Link>
  )
}

export default AppLogo
