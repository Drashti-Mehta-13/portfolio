import axios from "axios";

const base = "http://localhost:5000/api/portfolios";

export const getPortfolios = () => axios.get(base);
export const getPortfolioById = (id) => axios.get(`${base}/${id}`);
export const createPortfolio = (data) => axios.post(base, data);
