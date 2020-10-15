const StableCreditProtocol = artifacts.require("StableCreditProtocol");

module.exports = function (deployer) {
  deployer.deploy(StableCreditProtocol);
};
