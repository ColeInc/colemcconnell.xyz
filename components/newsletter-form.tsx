'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FormData = {
  email: string;
};

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const handleSubscribe = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result || (result.message as string) !== "Successfully subscribed!") {
        throw new Error(result.error || 'Failed to subscribe');
      }

      toast.success(
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium">Thanks for subscribing!</p>
          <p className="text-sm text-zinc-300">
            Please check your email to confirm your subscription.
          </p>
        </div>,
        {
          duration: 10000,
          position: "top-center",
          style: {
            background: "#1a1a1a",
            color: "white",
            border: "2px solid #31e1a0",
          },
          theme: "dark"
        }
      );

      reset();
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(handleSubscribe)();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubscribe)} className={`flex items-center gap-2 ${className}`}>
      <Input
        type="email"
        placeholder="Enter your email"
        className="bg-zinc-900/50 border-zinc-800 placeholder:text-zinc-600 text-white focus:border-zinc-700 focus:border-[0.5px]"
        disabled={isLoading}
        aria-label="Email address for newsletter"
        onKeyPress={handleKeyPress}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
      <Button 
        type="submit"
        disabled={isLoading}
        className="bg-zinc-900 hover:bg-gradient-to-r hover:from-[#6af0a0] hover:to-[#3085ee] text-zinc-100 hover:text-black transition-all"
        aria-label="Subscribe to newsletter"
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {errors.email && (
        <span className="absolute -bottom-6 left-0 text-sm text-red-500">
          {errors.email.message}
        </span>
      )}
    </form>
  );
} 