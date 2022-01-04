import axios from 'axios';

export class OpenSea {
    constructor(API_KEY = "") {
        this.API_KEY = API_KEY
    }

    async singleAsset({asset_contract_address, token_id, account_address}) {
        const baseURL = `https://api.opensea.io/api/v1/asset/${asset_contract_address}/${token_id}/`
        try {
            return await axios.get(baseURL, {
                headers: {
                    'X-API-KEY': this.API_KEY
                },
                params: {
                    account_address
                }
            });
        } catch (e) {
            console.log(e.message);

        }
    }
    async singleContract ({asset_contract_address}) {
        const baseUrl = `https://api.opensea.io/api/v1/asset_contract/${asset_contract_address}`
        try {
            return await axios.get(baseUrl, {
                headers: {
                    'X-API-KEY': this.API_KEY
                }
            });
        }
        catch (e) {
            console.log(e.message);
        }
    }

}



