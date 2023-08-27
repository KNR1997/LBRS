import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./InterestFields.css";
import axiosClient from "../../api/axiosConfig";

function InterestFields() {
  const [interestFields, setInterestFields] = useState([]);

  useEffect(() => {
    const getInterestFields = async() => {
      try{
        const resp = await axiosClient.get("/api/v1/interestFields/getAll");
        console.log(resp);
        setInterestFields(resp.data);
      } catch(error) {
        console.log(error);
      }
    }
    getInterestFields();
  }, []);

  return (
    <div>
      <Navbar />
      <Header type="list" subType="interestField" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2>search</h2>
          </div>
          <div className="listResult">
            <div className="grid-container">
              {interestFields.map(interestField => {
                return (
                  <div className="grid-item">{interestField.name}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestFields;
