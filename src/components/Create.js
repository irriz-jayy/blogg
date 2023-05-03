// import "../App.css";
// import { useEffect, useState } from "react";

// const Create = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [author, setAuthor] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = { title, content, author };
//     try {
//       const response = await fetch(
//         "https://raw.githubusercontent.com/irriz-jayy/blog-json-data/master/blogs.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );
//       alert("Item added to the store!");
//       // reset the state variables and form input fields
//       setTitle("");
//       setContent("");
//       setAuthor("");
//       e.target.reset();
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div className="item-containerr">
//       <form onSubmit={handleSubmit}>
//         <div class="mb-3">
//           <label for="exampleFormControlInput1" class="form-label">
//             Title
//           </label>
//           <input
//             type="text"
//             class="form-control"
//             id="exampleFormControlInput1"
//             placeholder="Title"
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div class="mb-3">
//           <label for="exampleFormControlTextarea1" class="form-label">
//             Content
//           </label>
//           <textarea
//             class="form-control"
//             id="exampleFormControlTextarea1"
//             rows="3"
//             onChange={(e) => setContent(e.target.value)}
//           ></textarea>
//         </div>
//         <div class="mb-3">
//           <label for="exampleFormControlInput1" class="form-label">
//             Author
//           </label>
//           <input
//             type="text"
//             class="form-control"
//             id="exampleFormControlInput1"
//             placeholder="Author"
//             onChange={(e) => setAuthor(e.target.value)}
//           />
//         </div>
//         <div class="col-auto">
//           <button type="submit" class="btn btn-primary mb-3">
//             📨
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Create;

import React from "react";

function Create() {
  return <div>Create</div>;
}

export default Create;
