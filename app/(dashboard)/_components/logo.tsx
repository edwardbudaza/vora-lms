import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex gap-2 items-center justify-start">
      <Image
        src="/logo.png"
        height={15}
        width={40}
        alt="Vora"
      />
      <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-transparent bg-clip-text text-2xl font-semibold">VORA</span>
    </div>
  )
}
