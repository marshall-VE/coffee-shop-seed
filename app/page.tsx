// app/page.tsx
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <>
      <header className="text-center p-6">
        <h1 className="text-3xl font-bold text-gray-800">Copper’s Coffee</h1>
      </header>

      {/* Stage-4 chat component (optional) */}
      {/* <Chat /> */}

      <ProductGrid />
    </>
  );
}