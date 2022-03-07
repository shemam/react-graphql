import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, PostWidgets, Categories } from '../components'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React with Grapql', excerpt: 'Learn React with Tailwind' },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 bg-gray-200 px-10">
      <Head>
        <title>React Authentication</title>
        <meta name="description" content="experimenting graphql with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="gapp-12 grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidgets />
            <Categories />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
