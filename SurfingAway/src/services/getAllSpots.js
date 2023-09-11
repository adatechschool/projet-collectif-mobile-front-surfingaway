import { API_KEY } from "@env";

const getAllSpots = async () => {
  const cle = API_KEY
  try {
    const response = await fetch(
      "https://api.airtable.com/v0/appqndsWaTAmFBUIM/Surf%20Destinations?maxRecords=10&view=By%20Surf%20Break",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${cle}`,
        },
      }
    );
    const json = await response.json();
    return json.records;
  } catch (error) {
    console.error(error);
  }
};

export default getAllSpots;
