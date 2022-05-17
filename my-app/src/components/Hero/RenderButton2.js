import React from 'react'
import Web3Modal from "web3modal";
import { useRef, useEffect, useState } from "react";
import { providers } from "ethers";
import Button from '../../styles/GlobalComponents/Button';
import Link from 'next/link';

const RenderButton2 = () => {
  
  
  
    // const [connectedWallet, setConnectedWallet] = useState(false);
    // const web3ModalRef = useRef(); // return the object with key named current
  
    // // providers and signer  =>
    // // providers is used for to get data from sc
    // // signer is used for to sign data / set the data to sc
  
    // const getSignerOrProvider = async (needSigner = false) => {
    //   const provider = await web3ModalRef.current.connect();
    //   const web3Provider = new providers.Web3Provider(provider);
    //   const { chainId } = await web3Provider.getNetwork();
    //   if (chainId !== 4) {
    //     alert("USE RINKEEBY NETWORK");
    //     throw new Error("Change network to Rinkeby");
    //   }
    //   if (needSigner) {
    //     const signer = web3Provider.getSigner();
    //     return signer;
    //   }
    //   return provider;
    // };
  
    // const connectWallet = async () => {
    //   try {
    //     await getSignerOrProvider();
    //     setConnectedWallet(true);
    //   } catch (error) {
    //     console.log(" error", error);
    //   }
    // };
  
    // useEffect(() => {
    //   web3ModalRef.current = new Web3Modal({
    //     network: "rinkeby",
    //     providerOptions: {},
    //   });
    // }, []);
  
  
  
    return (
        <Link href="#how"><Button> Learn How </Button></Link>
        )
}

export default RenderButton2