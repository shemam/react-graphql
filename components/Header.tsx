import { FC, useContext } from 'react'
import Link from 'next/link'

const Categories = [
  { name: 'Graphql', slug: 'graph' },
  { name: 'React', slug: 'react' },
]

const Header: FC = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">GraphCms</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {Categories.map((category) => (
            <Link key={category.slug} href={`/category${category.slug}`}>
              <span className="mt-2 ml-4 align-middle text-white md:float-right">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
