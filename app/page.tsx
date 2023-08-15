import Image from 'next/image'
import TextComponent from '@/components/TextComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <TextComponent />
    </main>
  )
}
