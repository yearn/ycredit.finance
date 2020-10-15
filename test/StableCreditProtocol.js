const StableCreditProtocol = artifacts.require("StableCreditProtocol");

contract("StableCreditProtocol", accounts => {
  it("LINK must be set to 0x271bf4568fb737cc2e6277e9B1EE0034098cDA2a", () =>
    StableCreditProtocol.deployed()
    .then(instance => instance.LINK.call())
    .then(link => {
      assert.equal(
        link.valueOf(),
        0x271bf4568fb737cc2e6277e9B1EE0034098cDA2a,
        "invalid link"
      );
    })
  );
});
