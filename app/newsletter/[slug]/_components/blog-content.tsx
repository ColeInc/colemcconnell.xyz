"use client"

import Link from "next/link"

export function BlogContent() {
  return (
    <div className="space-y-6">
      <p>
        Everyone is talking about AI agents these days so I thought it was time to get my hands dirty and see if
        it's something that might have value for a marketer like me.
      </p>

      <p>
        I've heard about many tools but the ones that always come up are Replit, Bolt and Lovable. I opened three
        tabs and picked one at random.{" "}
        <Link href="#" className="text-blue-400 hover:text-blue-300">
          Lovable
        </Link>{" "}
        won.
      </p>

      <h2>The Challenge</h2>

      <p>
        I decided to try a relatively simple idea. Every day a lot of people ask marketing questions on Reddit. If
        I'm a marketer looking for leads I might want to reply with a good answer.
      </p>

      <blockquote className="border-l-4 border-gray-700 pl-4 italic">
        So I asked the tool if it could build something to monitor when founders ask for marketing help on Reddit.
      </blockquote>

      <h3>The Process</h3>

      <ul className="list-disc list-inside space-y-2">
        <li>First, I defined the requirements</li>
        <li>Then, I started with a basic prototype</li>
        <li>Finally, I tested it with real data</li>
      </ul>

      {/* <Image
        src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oNlSSodRJYq7tGJHvsNMbxhCkkIkce.png`}
        alt="Screenshot of the code interface"
        width={800}
        height={450}
        className="rounded-lg border border-gray-800"
      /> */}

      <p>It said yes. I started seeing a lot of code I didn't understand on my screen.</p>
    </div>
  )
}