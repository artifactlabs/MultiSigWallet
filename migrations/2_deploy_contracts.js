var MultisigWallet = artifacts.require("MultiSigWalletWithDailyLimit.sol");
var MultisigWalletFactory = artifacts.require("MultiSigWalletWithDailyLimitFactory.sol");

module.exports = function(deployer) {
  var args = process.argv;
  if (process.env.DEPLOY_FACTORY) {
    deployer.deploy(MultisigWalletFactory);
    console.log("Factory with Daily Limit deployed");
  }
  else if (args.length < 6) {
    throw("Multisig with daily limit requires to pass owner " +
      "list, required confirmations and daily limit");
  }
  else {
    deployer.deploy(MultisigWallet, args[3].split(","), args[4], args[5]);
    console.log("Wallet with Daily Limit deployed");
  }
};
