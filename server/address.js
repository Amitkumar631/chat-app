import https from "https";


export default function address_api (){
    const address_dict = {};
    const url = "https://random-data-api.com/api/address/random_address";
    https.get(url, (response) => {
        response.on("data", (data) => {
            const address = JSON.parse(data);
            address_dict["uid"] = address.uid;
            address_dict["city"] = address.city;
            address_dict["postcode"] = address.postcode;
            address_dict["country"] = address.country;
        });
    });
    return address_dict;
}

