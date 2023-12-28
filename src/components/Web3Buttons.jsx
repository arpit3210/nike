import React from 'react';
import { Web3Button } from "@thirdweb-dev/react";

const Web3Buttons = () => {
  return (
    <Web3Button
    contractAddress="{{contract_address}}"
    action={async (contract) => contract.call("myFunctionName")}
  >
    Call myFunctionName from the connected wallet
  </Web3Button>
  )
}

export default Web3Buttons