import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

const fetchPlaceData = async (url) => {
  console.log("fetching Cart");
  const response = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
  const placeData = response.data;
  return placeData;
};

export const usePlaceData = (id) => {
  return useQuery(["place-data", id], () => fetchPlaceData(`/api/beaches?populate=*&[filters][id]=${id}`));
};
