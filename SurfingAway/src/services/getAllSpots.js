const getAllSpots = async () => {
  try {
    const response = await fetch(
      "http://192.168.8.82:3000/spots",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log("all surf spots datas fetch successfully");
    return data
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAllSpots;