import React, { useContext, useEffect, useState } from "react";
import "./InterestFields.css";
import axiosClient from "../../api/axiosConfig";
import { InterestFieldsContext } from "../../context/interestFields/InterestFieldsContext";
import axios from "axios";
import { AuthContext } from "../../context/auth/AuthContext";
import NavbarNew from "../../components/NEW/NavbarNew";

function InterestFields() {
  const { dispatch, state } = useContext(InterestFieldsContext);
  const { currentUser } = useContext(AuthContext);
  const [interestedFields, setInterestedFields] = useState([]);

  useEffect(() => {
    const getInterestFields = async () => {
      try {
        const resp = await axiosClient.get("/api/v1/interestFields/getAll");
        dispatch({ type: "GETFIELDS", payload: resp.data });
      } catch (error) {
        console.log(error);
      }
    };

    const getUserLikedFields = async () => {
      try {
        const resp = await axiosClient.get("/api/v1/interestFields/getUserLikedInterestFields");
        const interestFields = resp.data;
        setInterestedFields([...interestedFields, ...interestFields]);
      } catch (error) {
        console.log(error);
      }
    };

    getInterestFields();
    getUserLikedFields();
  }, []);

  const postInterestedFields = (field) => {
    dispatch({ type: "ADDTOLIKEFIELD", payload: field });
  };

  const createInterestFields = () => {
    const postData = {
      interestArrayList: interestedFields,
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

  const handleButtonClick = (interestField) => {
    if(interestedFields.length === 0){
      setInterestedFields([...interestedFields, interestField]);
    } else if(interestedFields.length !== 0 && !checkFieldAdded(interestField)){
      setInterestedFields([...interestedFields, interestField]);
    } else {
      const filteredNumbers = interestedFields.filter((field) => field.id !== interestField.id);
      setInterestedFields(filteredNumbers);
    }
  };

  const checkFieldAdded = (interestField) => {
    let added = false;
    if(interestedFields != null) {
      for(let i = 0; i < interestedFields.length; i++) {
        if (interestedFields[i].id === interestField.id){
          added = true;
          break;
        }
      }
    }
    return added;
  }

  return (
    <div>
      <NavbarNew />
      {/* <Header type="list" subType="interestField" /> */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="heading">
            <h2 className="title">What are you interested in?</h2>
            <p className="para">Choose three or more.</p>
          </div>
          <div className="listResult">
            <div className="interest-fields">
              <div className="be">
                <div className="cz">
                  {state.fields.map((interestField, index) => {
                    if(checkFieldAdded(interestField)) {
                      return (
                        <button
                        key={index}
                        className="do"
                        onClick={() => {
                          handleButtonClick(interestField);
                        }}
                      >
                        <div className={`dr active`}>
                          {interestField.name}
                          <div className="dm">
                            {}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-check-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </div>
                        </div>
                      </button>   )                
                    } else {
                      return (
                        <button
                          key={index}
                          className="do"
                          onClick={() => {
                            handleButtonClick(interestField);
                          }}
                        >
                          <div className="dr">
                            {interestField.name}
                            <div className="dm">
                              {}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-plus-lg"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="continue">
            <div className="continue-sub">
              <div className="continue-sub-1">
                <button
                  className="continue-btn"
                  onClick={() => createInterestFields()}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestFields;
