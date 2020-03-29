import React, { useEffect, useState } from 'react';
import useFetch from "../../components/useFetch";
import axios from 'axios';
import querystring from 'querystring';
import Button from 'evergreen-ui/commonjs/buttons/src/Button';
import TypingIndicator from '../../components/messages/TypingIndicator';
import { distanceInWordsToNow, isToday } from 'date-fns';
import { useContext } from 'react';
import UserContext from '../../components/UserContext';
import OrganizationContext from '../../components/OrganizationContext';
import TextInput from 'evergreen-ui/commonjs/text-input/src/TextInput';
import Textarea from "evergreen-ui/commonjs/textarea/src/Textarea";
import Container from '../../components/container'
import Component from '@reach/component-component';
import CornerDialog from 'evergreen-ui/commonjs/corner-dialog/src/CornerDialog'
import Menu from 'evergreen-ui/commonjs/menu/src/Menu';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import Autocomplete from 'evergreen-ui/commonjs/autocomplete/src/Autocomplete';
import toaster from 'evergreen-ui/commonjs/toaster/src'

export default function SendMessage(props) {

    const { userId } = useContext(UserContext);
    const { nodeName } = useContext(OrganizationContext);
    const [to, setTo] = useState('');
    const [body, setBody] = useState('');


    let sendMessage = () => {
  
        let axiosConfig = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
            }
          };
      
          axios.post(`https://dapps.ngrok.io/api/` + nodeName + `/sendMessage`, querystring.stringify({ body: body, nodeName: nodeName, to: to, userId: userId}),  axiosConfig)
          .then(res => {

            toaster.success(
                'The message has been sent.')
          })
        }

return (
    <main>
    <Component initialState={{ isShown: false }}>
            {({ state, setState }) => (
    <React.Fragment>
      <CornerDialog
        height={800}
        isShown={state.isShown}
        confirmLabel="Send Message"
        onCancel={() => setState({ isShown: false })}
        onCloseComplete={sendMessage}
        title="New Message"
        hasFooter={true}
      >
 <Autocomplete
  onChange={(changedItem) => setTo(changedItem)}
  selectedItem={to}
  title="Organizations"
  items={['StateSet', 'WhiteHaute', 'SevenTrain', 'PrincetonCapital', 'PartyD', 'PartyE', 'PartyF', 'PartyG']}
  children={(props) => {
    const { getInputProps, getRef, openMenu, inputValue  } = props
    return (
        <TextInput
          name={to}
          type="text"
          placeholder="Organizations"
          value={inputValue}
          className="signin"
          onFocus={openMenu}
          innerRef={getRef}
          {...getInputProps()}
        />
    )
  }}

/>
        <br/>
    <Textarea
          name={body} 
          onChange={e => setBody(e.target.value)}  
          type="text"
          height={300}
          placeholder="Message Body"
    />
      </CornerDialog>
      <Button  marginLeft={330} marginBottom={3} appearance="primary" onClick={() => setState({ isShown: true })}>New Message</Button>
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