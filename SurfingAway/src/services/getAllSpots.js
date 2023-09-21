
let apiData = null;
let apiDataPromise = null;

const getAllSpots = async () => {
  try {
    const data = await fetch(
      "http://192.168.8.82:3000/articles",
      {
        method: "GET",
      }
    );
    const json = await data.json();
    console.log(data);
    console.log("all surf spots datas fetch successfully");
    return data
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchDataSurfSpots = async () => {
  if (!apiData) {
    if (!apiDataPromise) {
      apiDataPromise = getAllSpots()
        .then((data) => {
          apiData = data;
          return apiData;
        })
        .catch((error) => {
          console.error(error);
          throw error;
        });
    }
    await apiDataPromise;
  }

  return apiData;
};

export default fetchDataSurfSpots;
