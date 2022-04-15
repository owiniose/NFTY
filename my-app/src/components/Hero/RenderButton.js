import React from 'react';
import Button from '../../styles/GlobalComponents/Button';
import Web3Modal from 'web3modal';
import {useRef, useEffect, useState} from 'react';
import { providers } from 'ethers';

const RenderButton = () => {

const [ connectedWallet , setconnectedWallet] = useState (false);

const web3ModalRef = useRef(); // always returns object as current





const getSignerOrProvider = async (needSigner = false) => {
  const provider = await web3ModalRef.current.connect();
  const web3Provider = new providers.Web3Provider(provider);
  const { chainId } = await web3Provider.getNetwork();
  if (chainId !== 4) {
    alert("USE RINKEEBY NETWORK");
    throw new Error("Change network to Rinkeby");
  }
  if (needSigner) {
    const signer = web3Provider.getSigner();
    return signer;
  }
  return provider;
};

const connectWallet = async () => {
  try {
    await getSignerOrProvider();
    setconnectedWallet(true);
  } catch (error) {
    console.log(" error", error);
  }
};

  useEffect(()  =>  {

      web3ModalRef.current = new Web3Modal({
        network: 'rinkeby',
        providerOptions: {},
        
  });

  }, []);


    if (!connectedWallet){
      return(
        <Button onClick ={connectWallet}> Connect Wallet</Button>
      )
    }
    else
  return (
    <Button > Mint </Button>
  )
}

export default RenderButton