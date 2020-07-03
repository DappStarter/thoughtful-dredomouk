require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad good nasty flip term'; 
let testAccounts = [
"0x9a980b475ee6d13f1303125e52cd77f7b77b651dbb79ccbef4fe5be20c377c08",
"0x14a9095e2369777120df36c9bebcfb509acdb0b51a7ffed2ca906889653443cf",
"0xbd3ac049e929fef3b9ab58863a0d403f163f7f8d174bbee46e726b25eba4d2f8",
"0xd6fedba05c3f068041b37d1a7b751a6f5f8e29b3a77cfd366bece77bb3347b50",
"0xaf89bf1d76da92441fa65a142821ede2d3ef1ec5d6aaba4555b8ec3bb00ec1a3",
"0x788a28dbb9b0dda504df6140830cbdf9a77204233f60e2d71c4c2e7550a0f3fe",
"0x2f60004fa3fdf2006968b231348a0c8d2a280ca345b7a3759af4601eaf2f00a8",
"0xa2db19af7bd888318567a8b32934573838def4636a1010c54ebe40d6897a3149",
"0x2900585ccf432606e69f93c0c0ee928c0d4a9b98f1d79de7dcc2e6b5a02eaf99",
"0xa0390517e4736fd2d98f1b569cad23b074090cb4d969d1225375a43f1755c229"
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
