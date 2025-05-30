import { useState } from "react";
import StoryCard from "./StoryCard";
import storiesData from "./stories";

const GridIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="7" height="7"/><rect x="13" y="2" width="7" height="7"/><rect x="2" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>
);
const CarouselIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="9"/><rect x="7" y="7" width="8" height="8" rx="2"/></svg>
);

const StoryGrid = () => {
  const [view, setView] = useState("grid");
  const [focusIdx, setFocusIdx] = useState(0);

  const handlePrev = () => setFocusIdx((prev) => (prev === 0 ? storiesData.length - 1 : prev - 1));
  const handleNext = () => setFocusIdx((prev) => (prev === storiesData.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-[#fafafa] py-12 px-6 md:px-12 relative">
      {/* Toggle View Icon */}
      <button
        className="absolute right-6 top-6 z-10 bg-white rounded-full shadow p-2 hover:bg-pink-50 transition"
        onClick={() => setView(view === "grid" ? "carousel" : "grid")}
        aria-label="Toggle view"
      >
        {view === "grid" ? <CarouselIcon /> : <GridIcon />}
      </button>

      <div className="text-center mb-10">
        <h2 className="text-6xl font-playfair text-gray-900 mt-6 mb-2">Discover the Heart of Paris</h2>
        <p className="text-gray-600 mb-4 font-lora">Uncover the hidden stories and cultural insights of Paris, shared by locals and visitors alike.</p>
      </div>

      {view === "grid" ? (
        <div className="grid md:grid-cols-4 mt-4 gap-6">
          {storiesData.map((story, i) => (
            <StoryCard story={story} key={i} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center mb-6">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="mx-2 text-3xl font-bold text-gray-400 hover:text-pink-500 focus:outline-none"
            aria-label="Previous story"
            style={{ height: 340 }}
          >
            &#8592;
          </button>
          <div className="flex items-end space-x-4">
            {/* Only show 3 stories: prev, focus, next */}
            {[-1, 0, 1].map((offset) => {
              const idx = (focusIdx + offset + storiesData.length) % storiesData.length;
              const isFocused = offset === 0;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border border-gray-200 bg-white p-4
                    ${isFocused ? "scale-110 z-10 shadow-lg" : "scale-90 opacity-70"}
                    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]`}
                  style={{
                    width: isFocused ? 350 : 283,
                    height: isFocused ? 300 : 240,
                    transitionProperty: "transform, box-shadow, opacity, width, height"
                  }}
                >
                  <img
                    src={storiesData[idx].image}
                    alt={storiesData[idx].title}
                    className={`object-cover rounded-md mb-3 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isFocused ? "h-32 w-full" : "h-20 w-full"}`}
                    style={{
                      transitionProperty: "height, width"
                    }}
                  />
                  <h3 className="font-playfair text-lg text-gray-900 mb-1">{storiesData[idx].title}</h3>
                  <p className="font-lora text-sm text-gray-700 mb-3">{storiesData[idx].snippet}</p>
                  <button className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1 rounded-md hover:bg-gray-200 transition-colors duration-300">Read Story</button>
                </div>
              );
            })}
          </div>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="mx-2 text-3xl font-bold text-gray-400 hover:text-pink-500 focus:outline-none"
            aria-label="Next story"
            style={{ height: 340 }}
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default StoryGrid;
