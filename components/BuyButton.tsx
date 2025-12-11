// components/BuyButton.tsx
'use client';

export default function BuyButton({ item }: { item: { name: string; price: number } }) {
  async function checkout() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ ...item, qty: 1 }] }),
    });
    const { id } = await res.json();
    const stripe = await import('@stripe/stripe-js').then((m) =>
      m.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
    );
    await stripe?.redirectToCheckout({ sessionId: id });
  }

  return (
    <button
      onClick={checkout}
      className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Pay now
    </button>
  );
}