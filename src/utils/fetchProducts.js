const uri = "http://localhost:3000/api/products";

export const fetchProducts = async (jwt) => {
  try {
    const jwtToken ="Bearer " + (localStorage.getItem("token"))
    const response = await fetch(uri, {
      headers: {
        "authorization": jwtToken
      }
    }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
