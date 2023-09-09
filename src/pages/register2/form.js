import React, { useContext, useEffect, useRef, useState } from "react";
import bgImg from "../../assets/signup.jpg";
import "./form.css";
import axiosClient from "../../api/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/auth/AuthContext";

export default function Form() {
  const nameRef = useRef();
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);

  const [user, setUser] = useState("");
  const [validUserName, setValidUserName] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const NAME_REGEX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

  const USER_REGEX = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

  const PWD_REGX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const [submitSuccess, setSubmitSuccess] = useState("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidUserName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const postData = async (e) => {
    e.preventDefault();
    try {
      const userReg = {
        name: name,
        username: user,
        roles: "ROLE_USER",
        password: pwd,
      };

      const resp = await axiosClient.post("/api/v1/auth/register", userReg);
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
            <h2>Sign In</h2>
            <span>register and enjoy the service</span>
            <form id="form" className="flex flex-col" onSubmit={postData}>
              <input
                type="text"
                // {...register("name")}
                ref={nameRef}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                // {...register("username")}
                placeholder="username"
                onChange={(e) => setUser(e.target.value)}
              />
              <input
                type="text"
                // {...register("password")}
                placeholder="password"
                onChange={(e) => setPwd(e.target.value)}
              />
              <input
                type="text"
                // {...register("confirmpwd")}
                placeholder="confirm password"
                onChange={(e) => setMatchPwd(e.target.value)}
              />
              <h5>
                Already have an Account? <Link to="/login">Log In</Link>
              </h5>
              <button
                className={
                  !validName || !validUserName || !validPwd || !validMatch
                    ? "inactive-btn"
                    : "active-btn"
                }
                disabled={
                  !validName || !validUserName || !validPwd || !validMatch
                }
              >
                Sign In
              </button>
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
