require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember pupil include problem onion senior'; 
let testAccounts = [
"0xbecfc265ead22f35ed866880c773a72ac07cff06cd4a8a5a2aeb8245398baa17",
"0x5d6efff91bb1d128eec150d9ee88675eeaa07002124511feaa1b1adb1f7f2d03",
"0x59284b9e013fc69b24879fe42961311ad6e772962d8005a5ca7176bc65d64ead",
"0x15a7344d05f24db67be850dcd6b3b435081bb3f57ef30b924c099d8dd132c48e",
"0xa4949f9161db4b00c12c60901e154e59e5f92d50f50ec9ba8746573ae49c1b3b",
"0x915839d38174d570f3214211d142453ffa79a5e2a9a9b4be814026e80dcac5f1",
"0x50abeba6d3ddad3cc6047db8ba411fb50fcc67f6935d80641dc60529807074a0",
"0x2b0cb86ddde571826090cf34a86be8f7cf4fbe24979d559ad58d430f341a2edc",
"0xadeaf6d9d27fef64ed50205898d8ba4d313e96b8830e6d6c57915be233a1161d",
"0x3a83f0f4bb91d02cf51d2333b88b96fbb00b3d1233e1b151e0c58149ca043110"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
