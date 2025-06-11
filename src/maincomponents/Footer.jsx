export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-md border-t border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <span className="font-bold">Burger Store</span>. Crafted with 🍔 and ❤️.
        </p>
      </div>
    </footer>
  );
}
