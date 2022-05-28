// const { ethers, upgrades } = require("hardhat")

async function deploy() {

    /* Deploy First Contract */
    const Box = await ethers.getContractFactory("Box")
    console.log("Deploying proxy, box and proxy admin")
    const boxProxy = await upgrades.deployProxy(Box, [42], { initializer: "store" })
    console.log("Box Proxy deployed to: ", boxProxy.address)

    /* Upgrade to V2 */
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    let boxV2 = await upgrades.upgradeProxy(boxProxy.address, BoxV2)
    console.log("Upgraded proxy to: ", boxV2.address)
}



deploy()
.then(() => process.exit(0))
.catch(error => {
    console.error(error)
    process.exit(1)
})
