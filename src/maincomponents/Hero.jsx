export default function Hero() {
  return (
    <main className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Bite Into Deliciousness at <span className="text-yellow-500">Burger Store</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Sizzling patties, melty cheese, fresh buns — the burger of your dreams is just a click away!
        </p>
        <a
          href="/menu"
          className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
        >
          Explore Menu
        </a>
      </div>
    </main>
  );
}
