const StoryCard = ({ story }) => (
  <div
    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-500 w-full max-w-[340px] min-w-[260px] mx-auto flex flex-col transform hover:scale-105  group opacity-100 translate-y-0 hover:opacity-100 hover:translate-y-0"
    style={{ aspectRatio: "5/3" }}
  >
    <img src={story.image} alt={story.title} className="w-full h-32 object-cover rounded-md mb-3" />
    <h3 className="font-playfair text-lg text-gray-900 mb-1">{story.title}</h3>
    <p className="font-lora text-sm text-gray-700 mb-3">{story.snippet}</p>
    <button
      className="bg-gray-300 text-gray-800 text-sm font-medium px-4 py-1 rounded-md hover:bg-gray-200 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      Read Story
    </button>
  </div>
);
export default StoryCard;
