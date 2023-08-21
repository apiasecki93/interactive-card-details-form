import Image from 'next/image'
import SmallDesing from '@/components/smallDesign'

export default function Home() {
  return (
    <main className="  ">
      <div id="ContainerSmallDesing" className="flex flex-col ssm:items-center ">
        <SmallDesing />
      </div>

    </main>
  )
}
