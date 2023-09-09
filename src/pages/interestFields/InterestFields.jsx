import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./InterestFields.css";
import axiosClient from "../../api/axiosConfig";
import { InterestFieldsContext } from "../../context/interestFields/InterestFieldsContext";

function InterestFields() {
  const { dispatch, fields } = useContext(InterestFieldsContext);

  useEffect(() => {
    const getInterestFields = async() => {
      try{
        const resp = await axiosClient.get("/api/v1/interestFields/getAll");
        dispatch({ type: "GETFIELDS", payload: resp.data });
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
              {fields.map(field => {
                return (
                  <div className="grid-item" key={field.id}>{field.name}</div>
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
