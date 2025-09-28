import { MoreHorizontal, LucideStars, MinusCircle, FaUserCircle } from "lucide-react";
import { FaHandsClapping } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";


const posts = [
{
badge: "LAB",
badgeColor: "bg-pink-500",
category: { name: "Language Lab", by: "Benben" },
title: "How Knowledge of Languages Is More Valuable Than Ever on the Job Market",
desc: "It’s not a skill issue, but a marketing issue",
stats: { days: "5d ago", likes: "1.2K", comments: "45" },
img: "https://via.placeholder.com/80x80.png?text=Img1",
},
{
badge: "DS",
badgeColor: "bg-blue-500",
author: (
    <>
    <FaHandsClapping className="inline-block w-4 h-4 text-gray-500 mr-1" /> <span className="font-semibold">Trey Huffine</span> clapped
    </>
),
category: { name: "Level Up Coding", by: "Attila Vágó" },
title: "Welcome To Dream-Driven Development Where Nothing Works",
desc: "Half-baked diagrams, features that make no sense, Mikado architecture. You've seen it, you've lived it, and it has a name...",
stats: { days: "4d ago", likes: "709", comments: "16" },
img: "https://via.placeholder.com/80x80.png?text=Img2",
},
{
badge: "P",
badgeColor: "bg-green-200",
category: { name: "Predict", by: "iswarya writes" },
title: "Future-Proof Careers in the Age of AI: What You Should Learn in 2026",
desc: "What if I told you that by this time next year, you could land a job...",
stats: { days: "Jul 30", likes: "37K", comments: "165" },
img: "https://via.placeholder.com/80x80.png?text=Img3",
},
{
badge: (
    <>
    <FaUserCircle className="w-5 h-5 text-gray-400" />
    </>
),
category: "Clean Compiler",
title: "10 Java Collections Tricks Only Seniors Know",
desc: "If you’ve been coding in Java for a while, you probably use List, Set, and Map every single day. But here's the thing:most...",
stats: { days: "3d ago", likes: "52", comments: "5" },
img: "https://via.placeholder.com/80x80.png?text=Img4",
plainCategory: true, //new flag
},
{
badge: "LAB",
badgeColor: "bg-red-800",
category: { name: "The Generator", by: "Jim the AI Whisperer" },
title: "Want to see how insanely stupid AI really is? Ask ChatGPT to answer these riddles in just one word",
desc: "Limiting output length reveals AI isn’t intelligent — it’s chatty!",
stats: { days: "3d ago", likes: "2.6K", comments: "36" },
img: "https://via.placeholder.com/80x80.png?text=Img5",
},
];


export default function Feed() {
return (
<section className="space-y-8 py-8 px-2 sm:px-4 lg:px-48 mx-auto">
    <div className="flex space-x-6 border-b pb-2 mb-10 text-sm">
        <button className="relative pb-2 font-medium text-gray-800">
            For you
            <span className="absolute left-0 -bottom-2.5 w-14 h-[2px] bg-gray-500"></span>
        </button>

        <button className="pb-2 text-gray-500 hover:text-gray-800 transition">
            Featured
        </button>
    </div>

    {posts.map((post, idx) => (
    <article key={idx} className="flex flex-col sm:flex-row items-start justify-between border-b pb-6 gap-4">
        <div className="flex-col">
            {/* Author section */}
            {post.author && (
            <p className="text-xs text-gray-500 mb-10">
            {post.author}
            </p>
            )}

            {/* Category + Badge */}
            <p className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
                {/* Show badge only if it exists */}
                {post.badge && (
                <span
                    className={`inline-flex items-center justify-center w-6 h-6 text-white text-[10px] font-bold rounded-sm ${post.badgeColor || "bg-gray-500"}`}
                >
                    {post.badge}
                </span>
                )}

                {/* Conditional: full category string OR plain */}
                {!post.plainCategory ? (
                <>
                    In<span className="font-semibold">{post.category?.name || post.category}</span>
                    {post.category?.by && (
                    <>
                        by<span className="font-semibold">{post.category.by}</span>
                    </>
                    )}
                </>
                ) : (
                <span>{post.category}</span>
                )}
            </p>

            <div className="flex space-x-10">
                <div>
                    <h2 className="text-lg sm:text-xl font-extrabold mt-1 leading-snug">{post.title}</h2>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base line-clamp-2">{post.desc}</p>
                </div>

                {/* Thumbnail image */}
                <img
                    src={post.img}
                    alt=""
                    className="w-24 h-24 sm:w-28 sm:h-20 object-cover rounded-md flex-shrink-0"
                />
            </div>


            {/* Stats row */}
            <div className="flex items-center text-xs text-gray-500 mt-3 justify-between sm:w-[80%]">
                <div className="flex items-center space-x-4 font-semibold">
                    <LucideStars className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{post.stats.days}</span>
                    <div className="flex items-center space-x-1">
                        <FaHandsClapping className="inline-block w-4 h-4 text-gray-500 mr-1" />
                        <span>{post.stats.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaRegCommentDots className="w-4 h-4" />
                        <span>{post.stats.comments}</span>
                    </div> 
                </div>

                <div className="flex items-center space-x-4">
                    {/* Circle minus */}
                    <MinusCircle className="w-5 h-5" />
                    {/* Bookmark */}
                    <BsBookmarkPlus className="w-5 h-5" />            
                    {/* Three dots (more options) */}
                    <MoreHorizontal className="w-5 h-5" />
                </div>        
            </div>
        </div>

 
        </article>
      ))}
    </section>
);
}


