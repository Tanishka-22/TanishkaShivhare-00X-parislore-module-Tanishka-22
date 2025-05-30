const StoryCard = ({ story }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition duration-300 w-full max-w-[340px] min-w-[260px] mx-auto flex flex-col" style={{ aspectRatio: "5/3" }}>
    <img src={story.image} alt={story.title} className="w-full h-32 object-cover rounded-md mb-3" />
    <h3 className="font-playfair text-lg text-gray-900 mb-1">{story.title}</h3>
    <p className="font-lora text-sm text-gray-700 mb-3">{story.snippet}</p>
    <button className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded-md hover:bg-gray-200 mt-auto">Read Story</button>
  </div>
);
export default StoryCard;
