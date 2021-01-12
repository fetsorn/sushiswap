var admin = "";
var oldFactory = "";
var Weth = "";
var Factory = artifacts.require("UniswapV2Factory");
var Router = artifacts.require("UniswapV2Router02")
var SushiToken = artifacts.require("SushiToken");
var MasterChef = artifacts.require("MasterChef");
var SushiBar = artifacts.require("SushiBar");
var SushiMaker = artifacts.require("SushiMaker");
var Migrator = artifacts.require("Migrator")


module.exports = function(deployer) {

deployer.deploy(Weth).then(function() {
    return deployer.deploy(Factory, admin);
}).then(function() {
    return deployer.deploy(Router, Factory.address, Weth.address)
}).then(function() {
    return deployer.deploy(SushiToken)
}).then(function() {
    return deployer.deploy(MasterChef,
                           SushiToken.address,
                           admin,
                           100000000000,
                           999999999999,
                           10850000)
}).then(function() {
    return deployer.deploy(SushiBar,
                           SushiToken.address)
}).then(function() {
    return deployer.deploy(SushiMaker,
                           Factory.address,
                           SushiBar.address,
                           SushiToken.address,
                           Weth.address)
}).then(function() {
    return deployer.deploy(Migrator,
                           MasterChef.address,
                           oldFactory,
                           Factory.address,
                           50)
});
};
