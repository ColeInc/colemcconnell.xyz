
export default async function PostsPage() {
  // const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {/* {posts.map((post) => (
          <article key={post._id} className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <time className="text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </article>
        ))} */}
      </div>
    </div>
  )
} 