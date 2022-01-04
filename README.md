# OpenSea API Wrapper

This is a wrapper for the OpenSea API for Node.js.

## Current Supported Endpoints

1. Retrieving a single asset
2. Retrieving a single contract
3. Retrieving a single collection
4. Retrieving collection stats

## Soon to be supported Endpoints

1. Retrieving assets
2. Retrieving events
3. Retrieving bundles
4. Retrieving collection stats
5. Retrieving orders

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