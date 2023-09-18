import React, { useContext, useState } from "react";
import bgImg from "../../assets/sl-mask.jpg";
import "./login.css";
import axiosClient from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/auth/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const [submitSuccess, setSubmitSuccess] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    const username = user;
    const password = pwd;

    try {
      const b64Encode = btoa(`${username}:${password}`);
      const config = {
        headers: {
          Authorization: `Basic ${b64Encode}`,
        },
      };

      const resp = await axiosClient.get("/api/v1/auth/me", config);

      console.log(resp);

      dispatch({ type: "LOGIN", payload: resp.data });
      setSubmitSuccess("You have registered successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      setSubmitSuccess("You have not registered successfully " + error);
    }
  };

  return (
    <section>
      <motion.div
        className="reg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="register">
          <div className="col-1">
            <h2>Log In</h2>
            <span>login and enjoy the service</span>
            <form id="form" className="flex flex-col" onSubmit={postData}>
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUser(e.target.value)}
              />
              <input
                type="text"
                placeholder="password"
                onChange={(e) => setPwd(e.target.value)}
              />
              <button className="active-btn">Log In</button>
            </form>
          </div>
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
