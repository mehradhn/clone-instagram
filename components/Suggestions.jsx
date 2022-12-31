import React from "react";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const sg = [...Array(12)].map((_, id) => ({
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      username: faker.internet.userName(),
      phone: faker.company.bsNoun(),
      email: faker.internet.email(),
      company: faker.company.bsNoun(),
      id: id,
    }));
    setSuggestions(sg);
  }, []);

  console.log(suggestions);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          className="flex items-center justify-between mt-3"
          key={profile.id}
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar}
            alt="avatar"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at: {profile.company}
            </h3>
          </div>
          <button className="text-blue-400 text-xs">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
