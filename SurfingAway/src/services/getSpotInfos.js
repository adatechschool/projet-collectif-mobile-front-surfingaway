import { API_KEY } from "@env";

const getSpotInfos = async (id) => {
  const cle = API_KEY;
  console.log("GETSPOTINFOS id:" + id);

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/appqndsWaTAmFBUIM/Surf%20Destinations/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cle}`,
        },
      }
    );
    console.log("surf spot data fetch successfully");
    const json = await response.json();
    return json.fields;
  } catch (e) {}
};

export default getSpotInfos;
