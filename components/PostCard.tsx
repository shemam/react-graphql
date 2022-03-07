import { FC } from 'react'

interface Post {
  post: { title: string; excerpt: string }
}

const PostCard: FC<Post> = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
