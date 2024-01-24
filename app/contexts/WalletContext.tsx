'use client'
import { CookieSharp } from '@mui/icons-material';
import axios from 'axios';
import { PropsWithChildren, createContext, useCallback, useState } from 'react';
import Web3 from 'web3'


// window 객체 선언 
declare const window : any;


// 지갑 인터페이스 정의 
interface IWalletContext {
    web3: Web3 | null;
    account: string;
    login: () => void
}

 
// WalletContext 초기값 설정
export const WalletContext = createContext<IWalletContext>  ({
    web3: null,
    account: '',
    login: () => {},
})


// 베이스 URL 설정 
const axiosInstance = axios.create({
    baseURL : "http://localhost:3001",
}); 



export const WalletContextProvider = ({children} : PropsWithChildren) => {
    
    
    const [web3,setWeb3] = useState<Web3 | null >(null);   // web3 인스턴스 생성 
    const [account,setAccount] = useState('');      // 지갑 주소 

  

    // 로그인 
    const login = useCallback( async() => { 

        console.log('Start');   // 로그인 시작 


         // 지갑이 없으면 접근 불가
        if (typeof window.ethereum === 'undefined') {
            console.log('MetaMask를 설치해주세요 ');
            return;
        }


           // 사용자에게 계정 접근을 요청함
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });


       
        // 사용자 계정 첫번째를 가져옴 
        const account = accounts[0];

        console.log(account)

             
        // Web3 인스턴스 생성 
        const web3 = new Web3(window.ethereum);
        
        // web3 state 값 변경
        setWeb3(web3);



        console.log('end')

   

         // 서버에게 인증
        const authRequest = await axiosInstance.get(`/auth/${account.replace('0x','')}`);
        




        
        
        
        const result = await web3.eth.personal.sign(authRequest.data.message, account, '');

        console.log("result??",result);

        console.log(authRequest.data.id);
        console.log('END');


    },[]);


    return  <WalletContext.Provider value={ {web3, account , login }}> {children} </WalletContext.Provider>



}