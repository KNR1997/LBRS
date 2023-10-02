import { fetchDataFromApi } from "./baseConfig";

export const fetchBeaches = async () => {
    const response = fetchDataFromApi("/api/beaches");
    return response;
};

