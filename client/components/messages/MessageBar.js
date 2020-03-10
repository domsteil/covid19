import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { deflateSync } from 'zlib';
import useUrsula from "../useUrsula";
import Verify from "../verify";

var state;
var captureFile;
var onSubmit;
var uploadFile;

var address;


function useAsyncEndpoint(fn) {
  const [res, setRes] = useState({
    data: null,
    pending: deflateSync,
    completed: false,
    error: false,
  });
  const [req, setReq] = useState();

  state = {
    ipfsHash:null,
    buffer:'',
    ethAddress:'',
    transactionHash:'',
    txReceipt: ''
  };

//Take file input from user
 captureFile =(event) => {
      event.stopPropagation()
      event.preventDefault()
      const file = event.target.files[0]
      let reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend = () => this.convertToBuffer(reader)
    };

  
  useEffect(() => {
    if (!req) return;
    setRes({
      data: null,
      pending: true,
      completed: false,
      error: false,
    });
  axios(req)
  .then(res =>
    setRes({
      data: res.data,
      pending: false,
      error: false,
      complete: true
    }),
  )
  .catch(() =>
    setRes({
      data: null,
      pending: false,
      error: true,
      complete: true
    }),
  );
}, [req]
);
return [res, (...args) => setReq(fn(...args))];

}

let verifyData;



const publisherAPI = "https://app.triplecheck.network/upload";

function postPublisherEndpoint() {
  
  return useAsyncEndpoint(data => ({
  url: publisherAPI,
  method: "POST",
  data
}));
}

export default function MessageBar(props) {
  const [message, setMessage] = useState("Public Key for re-encryption");
  const [to, setTo] = useState("");
  const [who, setWho] = useState("");
  const [newMessage, postNewMessage] = postPublisherEndpoint();

  const handleKeyPress = (event) => {
  if(event.key == 'Enter'|| event.keyCode == 13) {
    handlePersonalSign();
  }
}

return (
    <section>
    <div className="row">
        <div className="column">
        
        <Verify />

        </div>
        </div>
        <style jsx>{`

      .column {
        text-align: center;
        border-width: 1px;
        list-style: none;
        padding-bottom: 8px;
        padding-top: 8px;
        margin-right: 28px;
      }

      .center {
        margin-left: 3px;
        margin-bottom: 10px;
      }

      .to {
        width: 260px;
        padding-bottom: 8px;
        padding-top: 8px;
        border: 1px solid #d0d4d9; 
        border-radius: .375rem;
        -webkit-box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
        box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
        line-height: 20px;
        min-height: auto; 
        padding-left: 0; 
        padding-right: 0;
      }

      .policyButton {
        -webkit-appearance: none;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: center;
        line-height: 0;
        white-space: nowrap;
        width: 120px;
        height: 30px;
        margin-left: 8px;
        font-weight: 500;
        font-size: 12px;
        color: rgb(102, 102, 102);
        background-color: rgb(255, 255, 255);
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 10px;
        margin-bottom: 2px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
      }

      .policyDropdown {
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: center;
        line-height: 0;
        white-space: nowrap;
        width: 120px;
        height: 30px;
        margin-left: 8px;
        font-weight: 500;
        font-size: 12px;
        color: rgb(102, 102, 102);
        background-color: rgb(255, 255, 255);
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 10px;
        margin-bottom: 2px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
      }

      
      .ipfsInput {
        -webkit-appearance: none;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: center;
        line-height: 0;
        white-space: nowrap;
        width: 300px;
        height: 30px;
        margin-left: 8px;
        font-weight: 500;
        font-size: 12px;
        color: #000;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 10px;
        margin-bottom: 2px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
        
      }

      .message-box {
        padding-bottom: 28px;
        width: 800px ;
        overflow: auto;
        margin: 0; 
        min-height: 42px; 
        height: 38px; 
        max-height: 180px; 
        border: 2px solid rgba(134,134,134,.7);
        border-radius: .375rem;
        outline: 0;
        background: #fff;
        resize: none;
        box-shadow: none;
        color: #1d1c1d;
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        padding: 9px 30px 10px 50px;"
      }

      .login {
        color: #FFF;
      }

      .account {
        font-size: 13px;
        line-height: 1.91667;
        font-weight: 400;
        color: #3d464d;
        border: 1px solid #bdc4c9;
        padding: 3.5px 7px;
        border-radius: 4px;
        margin-top: 28px;
        margin-left: 8px;
      }

      .row {
        flex-direction: column;
        margin: -1.5rem 0;
        text-align: center;
      }

      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .row {
          flex-direction: column;
          margin: -1.5rem 0;
          display: none;
        }
        .column {
          width: 8%;
          padding: 1.5rem 0;
          text-align: center;
          max-width: 100px;
          display: none;
        }

        .message-box {
          padding-bottom: 28px;
          width: 20px;
          margin: 0; 
          height: 20px;
          display: none;
        }

        .policyButton {
          -webkit-appearance: none;
          position: relative;
          display: inline-block;
          vertical-align: middle;
          text-transform: uppercase;
          text-align: center;
          line-height: 0;
          white-space: nowrap;
          width: 120px;
          height: 30px;
          margin-left: 8px;
          font-weight: 500;
          font-size: 12px;
          color: rgb(102, 102, 102);
          background-color: rgb(255, 255, 255);
          user-select: none;
          cursor: pointer;
          text-decoration: none;
          padding: 0px 10px;
          margin-bottom: 2px;
          border-radius: 5px;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(234, 234, 234);
          border-image: initial;
          transition: all 0.2s ease 0s;
          overflow: hidden;
          outline: none;
          display: none;
        }

        
      }
    `}</style>
        </section>
)

    }
