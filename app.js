import axios from 'axios';
const API_KEY = '';

const singleAsset = async ({asset_contract_address, token_id, account_address}) => {
    const baseURL = `https://api.opensea.io/api/v1/asset/${asset_contract_address}/${token_id}/`
    try {
        return await axios.get(baseURL, {
            headers: {
                'X-API-KEY': API_KEY
            },
            params: {
                account_address
            }
        });
    } catch (e) {
        console.log(e.message);

    }
}
const singleContract = async ({asset_contract_address}) => {
    const baseUrl = `https://api.opensea.io/api/v1/asset_contract/${asset_contract_address}`
    try {
        return await axios.get(baseUrl, {
            headers: {
                'X-API-KEY': API_KEY
            }
        });
    }
    catch (e) {
        console.log(e.message);
    }
}
const persianMafiaLingard = {
    asset_contract_address: "0xF4ee95274741437636e748DdAc70818B4ED7d043",
    token_id: 1228
}

singleContract(persianMafiaLingard).then(response => {
    console.log(response.data)
}).catch(e => {
    console.log(e.message);
})
