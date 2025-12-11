// components/ProductGrid.tsx
import BuyButton from '@/components/BuyButton';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/products`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function ProductGrid() {
  const products: { id: number; name: string; description: string; price: number }[] = await getProducts();

  return (
    <main className="max-w-4xl mx-auto p-4 grid gap-6 md:grid-cols-3">
      {products.map((p) => (
        <article key={p.id} className="card bg-white rounded shadow p-4">
          <h2 className="card-title text-xl font-semibold">{p.name}</h2>
          <p className="mt-2 text-gray-600">{p.description}</p>
          <span className="block mt-3 text-lg font-bold">${p.price.toFixed(2)}</span>
          <BuyButton item={{ name: p.name, price: p.price }} />
        </article>
      ))}
    </main>
  );
}