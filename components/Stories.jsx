import React from "react";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";
function Stories() {
  const [suggestions, setSugestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, id) => ({
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      username: faker.internet.userName(),
      phone: faker.phone.number(),
      company: faker.company.bsNoun(),
      email: faker.internet.email(),
      id: id,
    }));
    setSugestions(suggestions);
  }, []);
  // console.log(suggestions);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story avatar={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          avatar={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
