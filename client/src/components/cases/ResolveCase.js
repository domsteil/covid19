import React, { useEffect, useState, useContext } from 'react';
import OrganizationContext from '../OrganizationContext';
import Component from "@reach/component-component";
import Dialog from 'evergreen-ui/commonjs/dialog/src/Dialog';
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import Popover from 'evergreen-ui/commonjs/popover/src/Popover';
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import TextInput from 'evergreen-ui/commonjs/text-input/src/TextInput'
import axios from 'axios';
import querystring from 'querystring';


export default function ResolveCase(props) {

const { nodeName } = useContext(OrganizationContext);
const [caseNumber, setCaseNumber] = useState('');
const [message, setMessage] = useState('');

let resolveCase = () => {
  
    let axiosConfig = {
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
      }
    };
  
    axios.post(`https://dapps.ngrok.io/api/` + nodeName + `/resolveCase?` + `caseNumber=` + caseNumber, querystring.stringify({ caseNumber: caseNumber}),  axiosConfig)
    .then(res => {
  
      const caseData = res.data;
      setMessage('Case' + caseNumber + 'has been resolved.'); // toast
      console.log(res.data);
    })
  }

  return (

  <Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        onCloseComplete={resolveCase}
        title="Resolve Case"
        intent="success"
        hasHeader={false}
        confirmLabel="Resolve Case"
      >
        Resolve the Case with the Counterparty
        <br/>
        <br/>
        <TextInput
          name={caseNumber}
          type="text"
          placeholder="Case Number"
          onChange={e => setCaseNumber(e.target.value)}
        />
        <br/>
      </Dialog>

      <Button marginRight={16} onClick={() => setState({ isShown: true })}>Resolve</Button> {message}
    </Pane>
  )}
</Component>
  )
};