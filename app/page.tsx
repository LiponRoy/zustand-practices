import ClientOnly from '@/components/ClientOnly';
import Counter from '@/components/Counter'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <ClientOnly>
      <Counter />
      </ClientOnly>
    </>
  )
}
