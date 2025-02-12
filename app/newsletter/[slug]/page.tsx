// import { SidebarActions } from "@/app/newsletter/[slug]/_components/sidebar-actions"
// import { AuthorInfo } from "@/app/newsletter/[slug]/_components/author-info"
// import { BlogContent } from "@/app/newsletter/[slug]/_components/blog-content"

import { AuthorInfo } from "./_components/author-info";
import { BlogContent } from "./_components/blog-content";
import { SidebarActions } from "./_components/sidebar-actions";

  export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <article className="container max-w-4xl mx-auto px-4 py-8">
        {/* <BlogBreadcrumb /> */}
        <SidebarActions />
        {/* <p className="text-2xl font-bold text-red-500">{params.slug}</p> */}
        
        <div className="prose prose-invert lg:prose-xl max-w-none">
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            I tried to build a marketing AI agent
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Hard to imagine what will be possible in 5-10 years
          </p>

          <AuthorInfo />
          <BlogContent   />
        </div>
      </article>
    </div>
  )
}