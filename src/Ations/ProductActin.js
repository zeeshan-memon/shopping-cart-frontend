import axios from "axios";
axios.defaults.withCredentials = true

export const getProducts = () => {
    return axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_URL,
        url: "/api/v1/products",
        responseType: "json",
        withCredentials: false,

    });
};

export const searchProdcut = (name) => {
    return axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_URL,
        url: "/api/v1/searchproductbyname/" + name,
        responseType: "json",
        withCredentials: false,

    });
};

export const getProductsByID = (id) => {
    return axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_URL,
        url: "/api/v1/products/"+id,
        responseType: "json",
        withCredentials: false,

    });
};
