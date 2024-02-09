import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar1 from "../Assets/Avatar2.png";
import Post from "../Assets/Post.jpeg";
import { IoIosLogOut } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Liked, data } from "./Data";
import { Navigaotrs } from "./Data";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 part1">
            <div className="side1">
              <div className="Image">
                <img src={Avatar1} width={50} height={55} />
                <p>Saad Karim</p>
                <div className="followers">
                  {data.map((item) => {
                    return (
                      <div className="d-flex flex-column" key={item.id}>
                        <h6>{item.name}</h6>
                        <p>{item.status}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="side2">
              {Navigaotrs.map((Data) => {
                return (
                  <div className="d-flex" key={Data.id}>
                    <span>{Data.icon}</span>
                    <div>{Data.name}</div>
                  </div>
                );
              })}
            </div>

            <div className="side3">
              <div className="logout">
                <div className="d-flex">
                  <span>
                    <IoIosLogOut />
                  </span>
                  <div>Log out</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 part2  ">
            <div className="subpart2 d-flex justify-content-evenly align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enetr your search"
                />
                <button className="btn btn-outline-success searchBtn">
                  <FaSearch />
                </button>
              </div>
              <button
                className="btn btn-outline-success postbtn"
                onClick={() => navigate("/new-post")}
              >
                <span className="pluspost">+</span> Create new Post
              </button>
            </div>

            <div className="PostPart mx-auto mt-5 p-4">
              <div className="UserProfile ">
                <img src={Avatar1} width={50} height={50} />
                <div className="userName">
                  <h4>Saad</h4>
                  <h6>@saad_ali</h6>
                </div>
              </div>
              <div className="PostImages">
                <img src={Post} width={540} height={350} />
              </div>
              <div>
                <p>
                  LCD (Liquid Crystal Display) is a type of flat panel display
                  which uses liquid crystals in its primary form of operation.
                </p>
              </div>

              <div className="likesSection">
                {Liked.map((liked) => {
                  return (
                    <div className="d-flex" key={liked.id}>
                      <span>{liked.icon}</span>
                      <div>{liked.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-3 part3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
