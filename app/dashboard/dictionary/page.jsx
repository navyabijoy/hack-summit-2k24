"use client"
import React, { useState } from "react";

const signDictionary = [
  {
    word: "Hello",
    description: "Wave your open hand side to side",
    category: "Greetings",
    image:
      "https://media.istockphoto.com/id/1148738497/vector/vector-deaf-mute-sign-language-character-gesture.jpg?s=2048x2048&w=is&k=20&c=8odbgY3lAOvAHVRKMotLwWVskggWpZPhYy7KZdeDsFk=",
  },
  {
    word: "Thank You",
    description:
      "Touch your chin with your fingertips and move your hand forward",
    category: "Expressions",
    image:
      "https://media.istockphoto.com/id/1148738498/vector/vector-deaf-mute-sign-language-character-gesture.jpg?s=612x612&w=0&k=20&c=SNk5XBS0NTndBPbguGgU2JGaJVVMhOXUnQZe0D5rpWs=",
  },
  {
    word: "Please",
    description: "Rub your open hand in a circular motion on your chest",
    category: "Expressions",
    image:
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/please.svg",
  },
  {
    word: "Water",
    description:
      "Form letter 'W' with three middle fingers, tap index finger on chin",
    category: "Objects",
    image:
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/water.svg",
  },
  {
    word: "Food",
    description:
      "Form letter 'W' with three middle fingers, tap index finger on chin",
    category: "Objects",
    image:
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/food.svg",
  },
  {
    word: "Yes",
    description: "Make a fist and nod it up and down like nodding your head",
    category: "Responses",
    image:
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/yes.svg",
  },
  {
    word: "No",
    description: "Extend index and middle fingers, tap them together twice",
    category: "Responses",
    image:
      "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/now-preview-png.png",
  },
];

const SignLanguageDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(signDictionary.map((item) => item.category)),
  ];

  const filteredSigns = signDictionary.filter((sign) => {
    const matchesSearch =
      sign.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || sign.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-6xl mx-auto flex-grow p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sign Language Dictionary
          </h1>
          <p className="text-gray-600">
            Learn essential sign language gestures for everyday communication
          </p>
        </header>

        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search signs..."
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm
                       focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors
                  ${
                    activeCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Signs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSigns.map((sign) => (
            <div
              key={sign.word}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg
                       transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={sign.image}
                  alt={`Sign for ${sign.word}`} // Fixed template literal
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {sign.word}
                  </h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                    {sign.category}
                  </span>
                </div>
                <p className="text-gray-600">{sign.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredSigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No signs found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignLanguageDictionary;