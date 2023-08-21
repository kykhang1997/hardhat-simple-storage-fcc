import { Addressable } from 'ethers';
import { run } from 'hardhat';

export const verify = async (
	contractAddress: string | Addressable,
	args: any[]
) => {
	console.log('Verifying contract...');
	try {
		await run('verify:verify', {
			address: contractAddress,
			constructorArguments: args,
		});
	} catch (e: any) {
		if (e.message.toLowerCase().includes('already verified')) {
			console.log('Already Verified! ', e);
		} else {
			console.error('verify ', e);
		}
	}
};
