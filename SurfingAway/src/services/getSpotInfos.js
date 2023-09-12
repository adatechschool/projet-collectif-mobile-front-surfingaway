import { API_KEY } from "@env";

const getSpotInfos = async () => {
    const cle = API_KEY

    try {
        const response = await fetch(
            `https://api.airtable.com/v0/appqndsWaTAmFBUIM/Surf%20Destinations/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${cle}`,
            },
        }
        );
        const json = await response.json();
        return json.fields;
    } catch (e) {

    }
};


export default getSpotInfos