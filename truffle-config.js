// const HDWalletProvider = require('truffle-hdwallet-provider');
// const mnemonic = '';

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
   development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   },
   // ropsten: {
   //   provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/API`),
   //   network_id: 3,       // Ropsten's id
   //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
   //   confirmations: 2,    // # of confs to wait between deployments. (default: 0)
   //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
   //   skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
   //  }
   // test: {
   //   host: "127.0.0.1",
   //   port: 7545,
   //   network_id: "*"
   // }
  },
  //
    plugins: [
        "truffle-contract-size"
    ],
  compilers: {
    solc: {
        version: "0.6.12",
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       } 
      //  evmVersion: "byzantium"
      }
    }
  }
};
