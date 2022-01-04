import axios from 'axios';

export class OpenSea {
    constructor(API_KEY = "") {
        this.API_KEY = API_KEY;
        axios.defaults.headers.common['X-API-KEY'] = API_KEY;
    }

    async singleAsset({asset_contract_address, token_id, account_address}) {
        const baseURL = `https://api.opensea.io/api/v1/asset/${asset_contract_address}/${token_id}/`
        try {
            return await axios.get(baseURL, {
                params: {
                    account_address
                }
            });
        } catch (e) {
            return e;

        }
    }
    async singleContract ({asset_contract_address}) {
        const baseUrl = `https://api.opensea.io/api/v1/asset_contract/${asset_contract_address}`
        try {
            return await axios.get(baseUrl);
        }
        catch (e) {
            return e;
        }
    }
    async singleCollection ({collection_slug}) {
        const baseUrl = `https://api.opensea.io/api/v1/collection/${collection_slug}`
        try {
            return await axios.get(baseUrl);
        }
        catch (e) {
            return e;
        }

    }
    async collectionStats ({collection_slug}) {
        const baseUrl = `https://api.opensea.io/api/v1/collection/${collection_slug}/stats`;
        try {
            return await axios.get(baseUrl);
        }
        catch (e) {
            return e;
        }
    }


}





