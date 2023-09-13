import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./InterestFields.css";
import axiosClient from "../../api/axiosConfig";
import { InterestFieldsContext } from "../../context/interestFields/InterestFieldsContext";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import axios from "axios";
import { AuthContext } from "../../context/auth/AuthContext";
import camping from "../../assets/camping.jpg";
import hiking from "../../assets/hiking.jpg";
import natureWild from "../../assets/nature_wild.jpg";
import resort from "../../assets/resorts.webp";

function InterestFields() {
  const { dispatch, state } = useContext(InterestFieldsContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getInterestFields = async () => {
      try {
        const resp = await axiosClient.get("/api/v1/interestFields/getAll");
        console.log(resp);
        dispatch({ type: "GETFIELDS", payload: resp.data });
      } catch (error) {
        console.log(error);
      }
    };
    getInterestFields();
  }, []);

  const addToLikedFieldList = (field) => {
    dispatch({ type: "ADDTOLIKEFIELD", payload: field });
  };

  const createInterestFields = () => {
    const postData = {
      interestArrayList: state.interestFields,
    };

    // Your username and password
    const username = currentUser;
    const password = "password";

    // Encode the credentials
    const base64Credentials = btoa(`${username}:${password}`);

    // Set up the headers with the Authorization header
    const headers = {
      Authorization: `Basic ${base64Credentials}`,
      "Content-Type": "application/json", // Optional content type header
    };

    axios
      .post("http://localhost:8080/api/v1/interestFields/create", postData, {
        headers,
      })
      .then((response) => {
        // Handle success
        console.log("POST request was successful:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("POST request failed:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" subType="interestField" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2>Liked</h2>
            <div>
              {state.interestFields.map((interestField) => {
                return <div key={interestField.id}>{interestField.name}</div>;
              })}
            </div>
            <div>
              <button onClick={() => createInterestFields()}>Submit</button>
            </div>
          </div>
          <div className="listResult">
            {/* <div className="grid-container">
              {state.fields.map((field) => {
                return (
                  // <div
                  //   className="grid-item"
                  //   key={field.id}
                  //   onClick={() => addToLikedFieldList(field)}
                  // >
                  //   {field.name}
                  // </div>
                  <div className="be">
                    <div className="cz">
                      <button className="do">
                        <div className="dr">
                          business
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div> */}
            <div className="interest-fields">
              <div className="be">
                <div className="cz">
                  <button className="do">
                    <div className="dr">business</div>
                  </button>
                </div>
              </div>

              <div className="be">
                <div className="cz">
                  <button className="do">
                    <div className="dr">business</div>
                  </button>
                </div>
              </div>

              <div className="be">
                <div className="cz">
                  <button className="do">
                    <div className="dr">
                      business
                      <div className="dm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default InterestFields;
