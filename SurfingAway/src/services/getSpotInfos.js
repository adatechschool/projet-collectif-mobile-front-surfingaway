import { API_KEY } from '@env';

const getSpotInfos = async () => {
    try {
        const response = await fetch(
            'https://api.airtable.com/v0/appqndsWaTAmFBUIM/Surf%20Destinations/recAwiuWLgQGw1Sge', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
            },
        }
        );
        const json = await response.json();
        return json.fields;
    } catch (e) {

    }
};





export default getSpotInfos