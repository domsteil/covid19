import React, { useEffect, useState } from 'react';
import useFetch from "../../components/useFetch";
import axios from 'axios';
import querystring from 'querystring';
import Button from 'evergreen-ui/commonjs/buttons/src/Button';
import TypingIndicator from './TypingIndicator';
import { distanceInWordsToNow, isToday } from 'date-fns';
import { useContext } from 'react';
import UserContext from '../../components/UserContext';
import TextInput from 'evergreen-ui/commonjs/text-input/src/TextInput';
import Container from '../../components/container'
import Component from '@reach/component-component';
import CornerDialog from 'evergreen-ui/commonjs/corner-dialog/src/CornerDialog'
import Menu from 'evergreen-ui/commonjs/menu/src/Menu';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import Heading from 'evergreen-ui/commonjs/typography/src/Heading';


export default class TripleChat extends React.Component {

  static contextType = UserContext;
  constructor(props) {
    super()
    
    this.state = {
    status: '',
    hash: '',
    pass: '',
    file: null,
    policy:'',
    message: '',
    decryptedData: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handlePolicyChange = this.handlePolicyChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  

  handleHashChange = event => {
    this.setState({ hash: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ pass: event.target.value });
  }

  handleTyping = (body, mutate) => {
    const textLength = body.length;
    if ((textLength !== 0 && textLength % 5 === 0) || textLength === 1) {
      this.emitTypingEvent(mutate);
    }
    this.setState({ body });
  }

  handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  // Form Submit

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      this.setState({ message: 'Success.'})
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }


  handlePolicyChange(e) {
    this.setState({ policy: e.target.value });
  }

  // Emit Typing


  emitTypingEvent = async (mutate) => {
    if (this.context.user) {
      await mutate({
        mutation: emitTypingEvent,
        variables: {
          username: this.context.user
        }
      });
    }
  }

  getFiles() {
    const items = useFetch("https://app.triplecheck.network/listEncryptedFiles");
  }

  // File Upload

  fileUpload(file){

    const policy = this.state.policy;

    const url = "https://app.triplecheck.network/upload";
    const formData = new FormData();
    formData.append('policy', policy)
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
        }
    }
    return  post(url, formData, config)
  }

  // Handle Submit

  handleSubmit = event => {

    const hash = this.state.hash;

    const pass = this.state.pass;

    let axiosConfig = {
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
      }
    };

    axios.post(`https://app.triplecheck.network/decrypt`, querystring.stringify({ hash: hash, pass: pass}),  axiosConfig)
    .then(res => {

      const decryptedData = res.data;
      this.setState({ decryptedData });
      console.log(res.data);
    })
}

  render() {
    return (
      <main>
        <Component initialState={{ isShown: false }}>
            {({ state, setState }) => (
    <React.Fragment>
      <CornerDialog
        isShown={state.isShown}
        confirmLabel="Submit"
        onCancel={() => setState({ isShown: false })}
        onCloseComplete={this.handleSubmit}
        hasFooter={false}
      >
        <form onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.onChange} />
        <select className="policyDropdown" value={this.state.policy} onChange={this.handlePolicyChange}>
          <option value="policy1">Policy 1</option>
          <option value="policy2">Policy 2</option>
      </select>
      <Button type="submit" marginBottom={8} marginLeft={8} iconBefore="cloud-upload" >Upload</Button><h4 className="successMessage">{ this.state.message }</h4>
          <label className="tripleCheck">
            <input placeholder="Message Hash" className="message-box" type="text" name="hash" onChange={this.handleHashChange} />
          </label>
          <br/>
          <br/>
          <label className="tripleCheck">
            <input placeholder="Password" className="message-box" type="password" name="pass" onChange={this.handlePasswordChange} />
          </label>
          <br/>
          <br/>
          <Button className="policyButton" type="submit">Decrypt</Button><img className="center" src="../static/verification.png" height="28" width="28" align="middle" alt=""/>
        </form>
      </CornerDialog>
      <Button marginLeft={-17} marginBottom={8} appearance="minimal" iconBefore="message" onClick={() => setState({ isShown: true })}>
      <Menu.Item role="menuitem" icon="lock"><Text>Upload</Text></Menu.Item>
      </Button>
    </React.Fragment>
  )}
</Component>

        <style jsx>{`



.html {
  background-color: #6200EE;
}

.body {
background-color: #6200EE;

}


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

h4 {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  margin: 10px 0;
  font-size: 16px;
  font-weight: normal;
  padding-left: 5px;
  color: rgb(102, 102, 102);
}

p {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  margin: 10px 0;
  font-size: 14px;
  font-weight: normal;
  padding-left: 5px;
  color: rgb(102, 102, 102);
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
  width: 300px ;
  overflow: auto;
  margin: 0; 
  min-height: 42px; 
  height: 38px; 
  max-height: 180px; 
  border: 1px solid rgba(134,134,134,.7);
  border-color: rgb(234, 234, 234);
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

.tripleCheck {
  color: #FFF;
  text-color: #FFF;
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
  }
  .column {
    width: 8%;
    padding: 1.5rem 0;
    text-align: center;
    max-width: 100px;
  }

  .message-box {
    padding-bottom: 28px;
    width: 100px;
    overflow: auto;
    margin: 0; 
    min-height: 42px; 
    height: 38px; 
    max-height: 180px; 
    border: 2px solid rgba(134,134,134,.7);
    border-radius: .375rem;
    outline: 0;
    background: #FFFFFF;
    resize: none;
    box-shadow: none;
    color: #1d1c1d;
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    padding: 9px 30px 10px 50px;
    display: none;
  }

  
}
`}</style>
      </main>
    )
  }
}