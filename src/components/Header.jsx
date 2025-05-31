const Header = () => (
  <header className="bg-white py-6 px-16 flex justify-between items-center border-b border-gray-200 shadow-md">
    <div className="flex items-center px-8 space-x-2">
      <div className="w-3 h-3 bg-black rotate-45"></div>
      <h1 className="text-xl font-bold font-playfair text-[#E91E63]">Paris Lore</h1>
    </div>
    <nav className="space-x-6 text-m text-gray-700 font-lora">
      <a href="#" className="hover:text-[#E91E63]">Home</a>
      <a href="#" className="hover:text-[#E91E63]">Stories</a>
      <a href="#submit" className="bg-[#E91E63] text-white px-4 py-1 rounded-md hover:bg-[#d81b60]">Submit</a>
    </nav>
  </header>
);
export default Header;
