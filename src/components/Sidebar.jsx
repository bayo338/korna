// Icons
import { FaUserCircle } from "react-icons/fa";
import { LucideStars } from "lucide-react";


export default function Sidebar() {
    const topics = [
    "Data Science",
    "React",
    "Coding",
    "Mental Health",
    "UX",
    "Python",
    "Productivity",
  ];

  const people = [
    {
      name: (
          <>
            Dr. Derek Austin
            <span className="inline-block w-4 h-4">🥳</span>
          </>
          
        ),
      role: "AI Context Engineer | I teach LLMs to think.",
    },
    {
      name: "ITNEXT",
      desc: "Publication",
      role: "ITNEXT is a platform for IT developers & software.",
    },
    {
      name: "Oliver Foster",
      role: "Primarily proficient in Java Programming.",
    },
  ];

return (
  <aside className="hidden lg:flex flex-1 flex-col space-y-8 border-l py-10 px-8 h-full">
    {/*sidebar content */}

    {/* Staff Picks */}
    <div>
      <h3 className="font-semibold text-sm mb-3">Staff Picks</h3>
      <ul className="space-y-4 text-sm text-gray-800">
        <li>
          <p className="flex gap-2 text-xs text-gray-500 mb-1">
            <FaUserCircle className="w-4 h-4 text-gray-400" />
            In The Medium Handbook by Julie & Medium
          </p>
          <p className="font-bold leading-snug hover:underline cursor-pointer">
            How this brand strategist uses Medium to explore ideas,
            repurpose content, and land clients
          </p>
          <p className="text-xs text-gray-400 mt-1">2d ago</p>
        </li>

        <li>
          <p className="flex gap-2 text-xs text-gray-500 mb-1">
            <FaUserCircle className="w-4 h-4 text-gray-400" />
            Jud Brewer MD PhD
          </p>
          <p className="font-bold leading-snug hover:underline cursor-pointer">
            From “I Have To” to “I Get To”: How One Word Change Rewires Your Brain
          </p>
          <p className=" flex gap-4 text-xs text-gray-400 mt-1">
            <LucideStars className="w-4 h-4 text-yellow-400 fill-yellow-400" />5d ago</p>
        </li>

        <li>
          <p className="flex gap-2 text-xs text-gray-500 mb-1">
            <FaUserCircle className="w-4 h-4 text-gray-400" />
            Linh Nguyen
          </p>
          <p className="font-bold leading-snug hover:underline cursor-pointer">
            Golden Design Lessons from Tokyo Metro
          </p>
          <p className="text-xs text-gray-400 mt-1">Sep 3</p>
        </li>
      </ul>
      <button className="mt-3 text-xs text-gray-400 hover:text-green-700">
        See the full list
      </button>
    </div>

    {/* Recommended topics section */}
    <div>
      <h3 className="font-semibold text-sm mb-3">Recommended topics</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full border border-gray-300 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {topic}
          </span>
        ))}
      </div>
      <button className="mt-3 text-xs text-gray-400 hover:text-green-700">
        See more topics
      </button>
    </div>

    {/* Who to follow section */}
    <div>
      <h3 className="font-semibold text-sm mb-3">Who to follow</h3>
      <ul className="space-y-4">
        {people.map((person, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaUserCircle className="w-8 h-8 text-gray-400" />
              <div className="space-y-1">
                <div>
                  <p className="font-medium text-sm">{person.name}</p>
                  <p className="text-xs text-gray-500 line-clamp-1">{person.desc}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 line-clamp-1">{person.role}</p>
                </div>
              </div>
            </div>
            <button className="px-3 py-2 text-xs border rounded-full hover:bg-gray-100">
              Follow
            </button>
          </li>
        ))}
      </ul>
      <button className="mt-3 text-xs text-gray-400 hover:text-green-700">
        See more suggestions
      </button>
    </div>

    {/* Reading List section */}
    <div className="text-gray-500 max-w-xs">
        <p className="font-semibold text-black mb-3">Reading list</p>
        <p className="mb-4 text-xs">
          Click the <span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 inline-block align-text-bottom">
          {/* <!-- Bookmark --> */}
          <path d="M6 2h12a2 2 0 0 1 2 2v18l-8-4-8 4V4a2 2 0 0 1 2-2z" />
          {/* <!-- Plus sign (top-right) --> */}
          <line x1="17" y1="4" x2="21" y2="4" />
          <line x1="19" y1="2" x2="19" y2="6" />
        </svg>
        </span> on any story to easily add it to your
                reading list or a custom list that you can share.
        </p>

        <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px]">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Status</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">Press</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Rules</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Text to speech</a>
        </div>
    </div>
  </aside>
);
}