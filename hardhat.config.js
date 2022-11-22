require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://serene-ultra-seed.matic-testnet.discover.quiknode.pro/23ca744fae7d3f495adcfa426a909048b909057a/",
      accounts: ["1719b4e794d4b4ddedf5e988c53d99b3065f52b7713fa49b84b24141dc9ebf13"],
    }
  }
};