import { API_KEY } from "@env";
let apiData = null;
let apiDataPromise = null;

const getAllSpots = async () => {
  const cle = API_KEY;
  try {
    const response = await fetch(
      "https://api.airtable.com/v0/appqndsWaTAmFBUIM/Surf%20Destinations?maxRecords=10&view=By%20Surf%20Break",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cle}`,
        },
      }
    );
    const json = await response.json();
    console.log("all surf spots datas fetch successfully");
    return json.records;
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
