import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/irriz-jayy/blog-json-data/master/blogs.json"
    )
      .then((response) => response.json())
      .then(({ blogs }) => setBlogs(blogs));
  }, []);

  return (
    <>
      <Navbar />
      <div className="item-container">
        {blogs.map((blog) => (
          <div className="max-w-md mx-auto bg-main1  rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              {/* <div className="md:flex-shrink-0 border">
              <img
                className="h-auto w-full object-cover md:w-48"
                src="https://picsum.photos/seed/picsum/300/300"
                alt="Blog post"
              />
            </div> */}
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-red-400 font-semibold">
                  {blog.author}
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {blog.title}
                </a>
                <p className="mt-2 text-gray-500">{blog.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
