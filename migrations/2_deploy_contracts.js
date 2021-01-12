var admin      = "";
var oldFactory = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
var Weth       = "0xc778417e063141139fce010982780140aa0cd5ab";
var Factory    = artifacts.require("UniswapV2Factory");
var Router     = artifacts.require("UniswapV2Router02")
var SushiToken = artifacts.require("SushiToken");
var MasterChef = artifacts.require("MasterChef");
var SushiBar   = artifacts.require("SushiBar");
var SushiMaker = artifacts.require("SushiMaker");
var Migrator   = artifacts.require("Migrator");

module.exports = function(deployer) {

deployer.deploy(Factory, admin).then(function() {
    return deployer.deploy(Router, Factory.address, Weth);
}).then(function() {
    return deployer.deploy(SushiToken);
}).then(function() {
    return deployer.deploy(MasterChef,
                           SushiToken.address,
                           admin,
                           100000000000,
                           999999999999,
                           10850000);
}).then(function() {
    return deployer.deploy(SushiBar,
                           SushiToken.address);
}).then(function() {
    return deployer.deploy(SushiMaker,
                           Factory.address,
                           SushiBar.address,
                           SushiToken.address,
                           Weth);
}).then(function() {
    return deployer.deploy(Migrator,
                           MasterChef.address,
                           oldFactory,
                           Factory.address,
                           50);
});
};
