import Image from 'next/image'
import Categories from './components/categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from './components/product-list'
import SectionTitle from '@/components/ui/section-title'
import PromoBanner from './components/promo-banner'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  
  return (
    <div>
      <PromoBanner src="/banner-home-01.png" alt="Até 50% de desconto esse mês" />

      <div className="mt-8 p-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle className="font-semibold uppercase pl-5 mb-3">Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner src="/banner-home-02.png" alt="Até 50% de desconto em mouses" />

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>

  )
}
