import { NewsletterForm } from "@/components/newsletter-form";

export default function Home() {
  return (
    <div>
      <div className="pt-24 pb-12 px-4">
        <div className="mx-auto max-w-3xl border border-zinc-700/40 hover:border-zinc-700/60 transition-colors rounded-lg p-6 md:p-8">
          <div className=" max-w-[600px] space-y-6">
            <h3 className="text-lg mb-0 font-semibold text-zinc-200">Subscribe to my Weekly Newsletter</h3>
            <p className="!mt-2 text-md text-zinc-400">Weekly insights on transitioning from engineer to founder, building profitable SaaS, and escaping the corporate life.</p>
            <NewsletterForm className="!mt-4 flex gap-2 max-w-[480px]" />
          </div>
        </div>
      </div>
    </div>
  );
} 