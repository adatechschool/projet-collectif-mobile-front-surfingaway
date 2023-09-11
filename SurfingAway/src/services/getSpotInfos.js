

const getSpotInfos = async () => {
    try {
        const response = await fetch(
            'https://api.airtable.com/v0/appqndsWaTAmFBUIM/Surf%20Destinations/recAwiuWLgQGw1Sge', {
            method: "GET",
            headers: {
                "Authorization": "Bearer patTj1G8Tm1pMi0Ey.a9d49202cda871f9eeaab172dbc2d295eae08842a5b1a09b9f315d2c3e7214f0",
            },
        }
        );
        const json = await response.json();
        return json.fields;
    } catch (e) {

    }
};





export default getSpotInfos