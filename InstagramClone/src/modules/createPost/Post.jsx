import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Post = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    caption: "",
    desc: "",
    img: "",
  });
  const [url, setUrl] = useState("");
  const uplaodImage = async () => {
    const formData = new FormData();
    formData.append("file", data.img);
    formData.append("upload_preset", "SaadApp");
    formData.append("cloud_name", "di93utakg");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/di93utakg/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (res.status === 200) {
      return await res.json();
    } else {
      return "Error";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { secure_url } = await uplaodImage();
    setUrl(secure_url);

    const response = await fetch("http://localhost:3000/api/new-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization : `Bearer ${localStorage.getItem('user:token')}`
      },
      body: JSON.stringify({
        caption: data.caption,
        desc: data.desc,
        url: secure_url,
      }),
    });
    if (response.status === 200) {
      navigate("/");
    } else {
      console.log("Error");
    }
  };

  return (
    <div className=" Post d-flex justify-content-center align-items-center ">
      <div className=" p-4" style={{ width: 600, height: 500 }}>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control py-3"
            name="title"
            placeholder="Caption.."
            required
            value={data.caption}
            onChange={(e) => setData({ ...data, caption: e.target.value })}
          />
          <textarea
            className="form-control py-3 mt-3 no-resize shadow-sm"
            rows={10}
            placeholder="Description"
            required
            value={data.desc}
            onChange={(e) => setData({ ...data, desc: e.target.value })}
          />
          <input
            type="file"
            className="form-control py-2 mt-3 "
            name="image"
            onChange={(e) => setData({ ...data, img: e.target.files[0] })}
          />
          <button
            type="submit"
            className="btn btn-outline-success btn-sm mt-3 p-2"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
