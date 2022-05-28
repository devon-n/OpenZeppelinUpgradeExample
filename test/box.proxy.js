const { expect } = require("chai")

let Box
let box

describe("Box(proxy)", function () {

  beforeEach(async function () {
    Box = await ethers.getContractFactory("Box")
    box = await upgrades.deployProxy(Box, [42], { initializer: "store" })
  })

  it("Should retrieve the value previously initialized", async function () {
    expect((await box.retrieve()).toString()).to.equal("42")
    await box.store(100)
    expect((await box.retrieve()).toString()).to.equal("100")
  })

  it("Should deploy the proxy", async function () {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    let boxV2 = await upgrades.upgradeProxy(box.address, BoxV2)

    expect((await boxV2.retrieve()).toString()).to.equal("42")
    await boxV2.store(100)
    expect((await boxV2.retrieve()).toString()).to.equal("100")

    await boxV2.increment()
    expect((await boxV2.retrieve()).toString()).to.equal("101")
  })

})
