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

    async singleContract({asset_contract_address}) {
        const baseUrl = `https://api.opensea.io/api/v1/asset_contract/${asset_contract_address}`
        try {
            return await axios.get(baseUrl);
        } catch (e) {
            return e;
        }
    }

    async singleCollection({collection_slug}) {
        const baseUrl = `https://api.opensea.io/api/v1/collection/${collection_slug}`
        try {
            return await axios.get(baseUrl);
        } catch (e) {
            return e;
        }

    }

    async collectionStats({collection_slug}) {
        const baseUrl = `https://api.opensea.io/api/v1/collection/${collection_slug}/stats`;
        try {
            return await axios.get(baseUrl);
        } catch (e) {
            return e;
        }
    }

    async retrievingBundles({
                                on_sale,
                                owner,
                                asset_contract_address,
                                asset_contract_addresses,
                                token_ids,
                                limit,
                                offset
                            }) {
        const baseUrl = `https://api.opensea.io/api/v1/bundles`;
        try {
            return await axios.get(baseUrl, {
                params: {
                    on_sale,
                    owner,
                    asset_contract_address,
                    asset_contract_addresses,
                    token_ids,
                    limit,
                    offset
                }
            });
        } catch (e) {
            return e;

        }
    }

    async retrieveCollections({asset_owner, offset, limit}) {
        const baseUrl = `https://api.opensea.io/api/v1/collections`;
        try {
            return axios.get(baseUrl, {
                params: {
                    asset_owner,
                    offset,
                    limit
                }
            });
        } catch (e) {
            return e;
        }
    }

    async retrievingEvents({
                               asset_contract_address,
                               collection_slug,
                               token_id,
                               account_address,
                               event_type,
                               only_opensea,
                               auction_type,
                               offset,
                               limit,
                               occurred_before,
                               occurred_after
                           }) {
        const baseUrl = `https://api.opensea.io/api/v1/events`;
        try {
            return axios.get(baseUrl, {
                params: {
                    asset_contract_address,
                    collection_slug,
                    token_id,
                    account_address,
                    event_type,
                    only_opensea,
                    auction_type,
                    offset,
                    limit,
                    occurred_before,
                    occurred_after
                }
            });
        } catch (e) {
            return e;
        }
    }


    async retrieveAssets({
                             owner,
                             token_ids,
                             asset_contract_address,
                             asset_contract_addresses,
                             order_by,
                             order_direction,
                             offset,
                             limit,
                             collection
                         }) {
        const baseUrl = `https://api.opensea.io/api/v1/assets`;
        try {
            return axios.get(baseUrl, {
                params: {
                    owner,
                    token_ids,
                    asset_contract_address,
                    asset_contract_addresses,
                    order_by,
                    order_direction,
                    offset,
                    limit,
                    collection
                }
            });
        } catch (e) {
            return e;
        }
    }

    async retrieveOrders({
                             asset_contract_address,
                             payment_token_address,
                             maker,
                             taker,
                             owner,
                             is_english,
                             bundled,
                             include_bundled,
                             listed_after,
                             listed_before,
                             token_id,
                             token_ids,
                             side,
                             sale_kind,
                             limit,
                             offset,
                             order_by,
                             order_direction
                         }) {
        const baseUrl = "https://api.opensea.io/wyvern/v1/orders";
        try {
            return axios.get(baseUrl, {
                params: {
                    asset_contract_address,
                    payment_token_address,
                    maker,
                    taker,
                    owner,
                    is_english,
                    bundled,
                    include_bundled,
                    listed_after,
                    listed_before,
                    token_id,
                    token_ids,
                    side,
                    sale_kind,
                    limit,
                    offset,
                    order_by,
                    order_direction
                }
            })
        }
        catch (e) {
            return e;

        }
    }
}






