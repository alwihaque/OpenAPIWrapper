# OpenSea API Wrapper

This is a wrapper for the OpenSea API for Node.js.

## Current Supported Endpoints

✔️ Retrieving a single asset
✔️ Retrieving a single contract
✔️ Retrieving a single collection
✔️ Retrieving collection stats
✔️ Retrieving assets
✔️ Retrieving events

## Soon to be supported Endpoints

OPENSEA LISTINGS

❌ Retrieving orders - Testnets

OPENSEA TESTNETS API

❌ Retrieving assets - Testnets
❌ Retrieving events - Testnets
❌ Retrieving collections - Testnets
❌ Retrieving bundles - Testnet
❌ Retrieving a single asset - Testnets
❌ Retrieving a single contract - Testnets
❌ Retrieving a single collection - Testnets
❌ Retrieving collection stats - Testnets

## Usage

Example Usage: 

``` javascript
import {OpenSea} from "opensea-api-wrapper";
const openSea = new OpenSea();
const sampleNFT = {
    asset_contract_address: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
    token_id: 1
}
openSea.singleAsset(sampleNFT).then(res => {
    console.log(res.data);
}).catch(e => {
    console.log(e.message);
});
```