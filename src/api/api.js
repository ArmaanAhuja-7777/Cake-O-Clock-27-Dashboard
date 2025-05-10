const BASE_URL = "http://localhost:5000/api";

// AUTH
export const login = async (credentials) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return await res.json();
};

export const signup = async (userData) => {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return await res.json();
};

// ORDERS
export const fetchOrders = async (token) => {
  const res = await fetch(`${BASE_URL}/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await res.json();
};

// PRODUCTS
export const createProduct = async (token, data) => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// CATEGORIES
export const createCategory = async (token, data) => {
  const res = await fetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
