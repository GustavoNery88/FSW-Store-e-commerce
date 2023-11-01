"use client"
import Image from 'next/image'
import Categories from './components/categories'

export default function Home() {
  return (
    <div className="p-5">
      <Image src="/banner-home-01.png" width={0} height={0} className="w-full h-auto" sizes="100vw" alt="Até 50% de desconto esse mês" />
      <div className="mt-8">
        <Categories />
      </div>
    </div>

  )
}
