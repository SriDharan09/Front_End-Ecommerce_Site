// import React from "react";
// import img1 from "../assets/images/blog/b1.jpg";
// import img2 from "../assets/images/blog/b3.jpg";
// import img3 from "../assets/images/blog/b4.jpg";

// const blog = () => {
//   return (
//     <>
//       {/* Blog banner */}
//       <section className="blog-wrapper">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="text-center">
//               <h1 className="text-white">#Read More</h1>
//               <p className="text-white h4">
//                 Get to know what our customers are saying..
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog Details */}

//       <section className="blog-details p-5">
//         <div className="container-xxl">
//           <div className="row">
//             {/* First Blog Card */}
//             <div className="card mb-4 mt-3 blog-details-page">
//               <div className="p-4 d-flex flex-column flex-sm-row">
//                 <div className="col-12 col-sm-3 mb-3 mb-sm-0 text-center">
//                   <img
//                     src={img1}
//                     alt=""
//                     className="img-fluid img-rounded-start"
//                   />
//                 </div>

//                 <div className="card-body col-12 col-sm-9 p-4">
//                   <h3 className="card-title">
//                     <b>"Fashion Forward: Embracing Timeless Trends"</b>
//                   </h3>
//                   <p className="text-muted text-end">
//                     Posted by: Sophia Rodriguez
//                   </p>

//                   <p className="my-3">
//                     Dive into the world of fashion as we explore timeless trends
//                     that continue to make a statement. From classic pieces to
//                     modern twists, discover how to curate a wardrobe that stands
//                     the test of time.
//                   </p>
//                   <button className="button-deal  blog-btn btn mt-3">
//                     Read More
//                   </button>
//                   <div className="card-footer mt-4">
//                     <p className="text-muted text-center blog-p">
//                       Last updated :
//                       <span>{new Date().toLocaleDateString()}</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Second Blog Card */}
//             <div className="card mb-4 mt-3 blog-details-page">
//               <div className="p-4 d-flex flex-column flex-sm-row">
//                 <div className="col-12 col-sm-3 mb-3 mb-sm-0 text-center">
//                   <img
//                     src={img2}
//                     alt=""
//                     className="img-fluid img-rounded-start"
//                   />
//                 </div>

//                 <div className="card-body col-12 col-sm-9 p-4">
//                   <h3 className="card-title">
//                     <b>"Sustainable Style: Fashion with a Purpose"</b>
//                   </h3>
//                   <p className="text-muted text-end">Posted by: Ethan Carter</p>

//                   <p className="my-3">
//                     Explore the intersection of fashion and sustainability.
//                     Learn about eco-friendly materials, ethical fashion choices,
//                     and how to make environmentally conscious decisions without
//                     compromising on style. Join the movement towards a more
//                     sustainable and stylish future.
//                   </p>
//                   <button className="button-deal  blog-btn btn mt-3">
//                     Read More
//                   </button>
//                   <div className="card-footer mt-4">
//                     <p className="text-muted text-center blog-p">
//                       Last updated :
//                       <span>{new Date().toLocaleDateString()}</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Third Blog Card */}
//             <div className="card mb-4 mt-3 blog-details-page">
//               <div className="p-4 d-flex flex-column flex-sm-row">
//                 <div className="col-12 col-sm-3 mb-3 mb-sm-0 text-center">
//                   <img
//                     src={img3}
//                     alt=""
//                     className="img-fluid img-rounded-start"
//                   />
//                 </div>

//                 <div className="card-body col-12 col-sm-9 p-4">
//                   <h3 className="card-title">
//                     <b>"Express Yourself: The Power of Personal Style"</b>
//                   </h3>
//                   <p className="text-muted text-end">
//                     Posted by: Olivia Thompson
//                   </p>

//                   <p className="my-3">
//                     Unleash the power of personal style and discover how it goes
//                     beyond clothing. From expressing individuality to boosting
//                     confidence, this blog delves into the psychology of fashion
//                     and how your style choices can make a significant impact on
//                     your daily life.
//                   </p>
//                   <button className="button-deal  blog-btn btn mt-3">
//                     Read More
//                   </button>
//                   <div className="card-footer mt-4">
//                     <p className=" text-muted text-center blog-p ">
//                       Last updated :
//                       <span>{new Date().toLocaleDateString()}</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default blog;

import { IoCreateOutline } from "react-icons/io5";

import React, { useState, useEffect } from "react";
import img1 from "../assets/images/blog/b1.jpg";
import { IoMdClose } from "react-icons/io";
import placeholder from "../assets/images/no-image.jpg";

const Blog = ({
  id,
  imageSrc,
  blogHead,
  blogBody,
  timeStamp,
  onDelete,
  author,
}) => {
  return (
    <div className="blog-post mt-4">
      <div className="card mb-4 mt-3 blog-details-page ">
        <div className="p-4 card-d  d-flex flex-column flex-md-column flex-xl-row flex-lg-column flex-sm-column">
          <div className="col-12 col-sm-12 col-md-12 mb-3 col-xl-3 mb-sm-0 text-center">
            <img
              src={imageSrc ? imageSrc : placeholder}
              alt=""
              className="img-fluid img-rounded-start blog-img"
            />
          </div>

          <div className="card-body col-12  col-md-12 col-xl-9  col-sm-12 p-4 ">
            <h3 className="card-title">
              <b>{blogHead}</b>
            </h3>
            <p className="text-muted text-end">Posted by: {author}</p>

            <p className="my-3">{blogBody}</p>
            <button
              className="button-deal btn btn-danger  blog-btn btn mt-3"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
            <div className="card-footer mt-4 ">
              <p className="text-muted text-center blog-p">
                Last updated :<span>{timeStamp}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PopupMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div className="popup-message text-danger mt-3 mb-4">
      <p>{message}</p>
    </div>
  );
};

const BlogForm = ({ onPublish, onClose }) => {
  const [formData, setFormData] = useState({
    imageSrc: "",
    blogHead: "",
    blogBody: "",
    author: "", // Added a new field for the name
  });

  const [showImageSizePopup, setShowImageSizePopup] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        // Image size exceeds 4MB
        setShowImageSizePopup(true);

        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          imageSrc: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePublish = () => {
    // Check if required fields are filled before publishing
    if (
      formData.blogHead.trim() === "" ||
      formData.blogBody.trim() === "" ||
      formData.author.trim() === ""
    ) {
      alert("Title, content, and name are required!");
      return;
    }

    onPublish({
      ...formData,
      timeStamp: new Date().toLocaleString(),
    });

    // Reset form data after publishing
    setFormData({
      imageSrc: "",
      blogHead: "",
      blogBody: "",
      author: "",
    });
    setShowImageSizePopup(false);
  };

  return (
    <div className="blog-form">
      <div className="text-end">
        <IoMdClose
          className="text-danger  mb-1"
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={onClose}
        />
      </div>

      <label htmlFor="imageSrc">Image:</label>
      <input
        type="file"
        id="imageSrc"
        name="imageSrc"
        className="mb-3"
        accept="image/*"
        onChange={handleImageChange}
      />
      {formData.imageSrc && (
        <img src={formData.imageSrc} className="mb-3" alt="Selected" />
      )}

      {showImageSizePopup && (
        <PopupMessage
          message="Please upload an image below 4MB."
          onClose={() => setShowImageSizePopup(false)}
        />
      )}

      <label htmlFor="blogHead">Blog Headline:</label>
      <input
        type="text"
        id="blogHead"
        className="mb-3"
        name="blogHead"
        value={formData.blogHead}
        onChange={handleChange}
      />
      <label htmlFor="blogBody">Blog Body:</label>
      <textarea
        id="blogBody"
        name="blogBody"
        className="mb-3"
        value={formData.blogBody}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="author">Author:</label>
      <input
        className="mb-3"
        type="text"
        id="author"
        name="author"
        value={formData.author}
        onChange={handleChange}
      />

      <button className="btn btn-dark" onClick={handlePublish}>
        Publish
      </button>
    </div>
  );
};

const BlogList = ({ blogs, onDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Blog key={blog.id} onDelete={onDelete} {...blog} />
      ))}
    </div>
  );
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    console.log("Stored Blogs:", storedBlogs);
    if (storedBlogs.length > 0) {
      setBlogs(storedBlogs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handlePublish = (blogData) => {
    setBlogs([...blogs, { ...blogData, id: Date.now() }]);
    setShowForm(false); // Hide the form after publishing
  };

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <>
      {/* Blog banner */}
      <section className="blog-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1 className="text-white">#Read More</h1>
              <p className="text-white h4">
                Get to know what our customers are saying..
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Details */}
      <section className="blog-details p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-end">
              {!showForm && (
                <button
                  className="btn btn-primary text-center  "
                  style={{ width: "150px" }}
                  onClick={handleShowForm}
                >
                  <IoCreateOutline
                    className="mx-2 "
                    style={{ fontSize: "20px", textAlign: "center" }}
                  />
                  Create Blog
                </button>
              )}
            </div>

            {showForm && (
              <BlogForm onPublish={handlePublish} onClose={handleCloseForm} />
            )}
            {/* First Blog Card */}
            {/* <div className="card mb-4 mt-3 blog-details-page"> */}
            <div className="p-4 card-d d-flex flex-column flex-sm-row ">
              <div className="card-body col-12  col-sm-12 col-md-12 p-4 ">
                <div className="card mb-4 mt-3 blog-details-page ">
                  <div className="p-4 card-d  d-flex flex-column flex-md-column flex-xl-row flex-lg-column flex-sm-column">
                    <div className="col-12 col-sm-12 col-md-12 mb-3 mb-sm-0 col-xl-3 text-center">
                      <img
                        src={img1}
                        alt=""
                        className="img-fluid img-rounded-start blog-img"
                      />
                    </div>

                    <div className="card-body col-12 col-xl-9 col-md-12  col-sm-12 p-4">
                      <h3 className="card-title">
                        <b>"Fashion Forward: Embracing Timeless Trends"</b>
                      </h3>
                      <p className="text-muted text-end">
                        Posted by: Sophia Rodriguez
                      </p>

                      <p className="my-3">
                        Dive into the world of fashion as we explore timeless
                        trends that continue to make a statement. From classic
                        pieces to modern twists, discover how to curate a
                        wardrobe that stands the test of time.
                      </p>
                      <button className="button-deal btn btn-danger  blog-btn btn mt-3">
                        Delete
                      </button>
                      <div className="card-footer mt-4">
                        <p className="text-muted text-center blog-p ">
                          Last updated :
                          <span>
                            {new Date(
                              2024,
                              0,
                              10,
                              11,
                              48,
                              12,
                              1
                            ).toLocaleString()}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <BlogList blogs={blogs} onDelete={handleDelete} />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default BlogPage;
