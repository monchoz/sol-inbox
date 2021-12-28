const HDWallerProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWallerProvider(
    'outdoor debris cannon sport discover toward miss rain book captain fish destroy',
    'https://rinkeby.infura.io/v3/ffaedf3129cc4a9abec7f173428444ae'
);
const web3 = new Web3(provider);

const deploy = async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    // Use one of those accounts to deploy the contract
    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ["Hola mundo!"] })
        .send({ from: accounts[0], gas: '1000000' });

    // Retrieve the address where our contract ended up on the blockchain network
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy();