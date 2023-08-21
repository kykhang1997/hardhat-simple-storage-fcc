import { task } from 'hardhat/config';

//! create func in yarn hardhat

task(
	'block-number',
	'Prints the current block number',
	async (_taskArgs, hre) => {
		const blockNumber = await hre.ethers.provider.getBlockNumber();
		console.log(`Current block number: ${blockNumber}`);
	}
);

module.exports = {};
