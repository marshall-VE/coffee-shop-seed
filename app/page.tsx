export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4 grid gap-6 md:grid-cols-3">
      <article className="card bg-white rounded shadow p-4">
        <h2 className="card-title text-xl font-semibold">Espresso</h2>
        <p className="mt-2 text-gray-600">Rich and bold.</p>
        <span className="block mt-3 text-lg font-bold">$2.50</span>
      </article>
      <article className="card bg-white rounded shadow p-4">
        <h2 className="card-title text-xl font-semibold">Cappuccino</h2>
        <p className="mt-2 text-gray-600">Smooth micro-foam.</p>
        <span className="block mt-3 text-lg font-bold">$3.50</span>
      </article>
      <article className="card bg-white rounded shadow p-4">
        <h2 className="card-title text-xl font-semibold">Latte</h2>
        <p className="mt-2 text-gray-600">Creamy and mellow.</p>
        <span className="block mt-3 text-lg font-bold">$4.00</span>
      </article>
    </main>
  );
}