// app/success/page.tsx
import Link from 'next/link';

export default function Success() {
  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold">Payment succeeded!</h1>
      <p className="mt-2">Thanks for your order ☕</p>
      <Link href="/" className="inline-block mt-4 underline">
        ← Back to shop
      </Link>
    </div>
  );
}