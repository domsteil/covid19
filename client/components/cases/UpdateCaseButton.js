import React, { useEffect, useState, useContext } from 'react';
import OrganizationContext from '../../components/OrganizationContext';
import Component from "@reach/component-component";
import Dialog from 'evergreen-ui/commonjs/dialog/src/Dialog';
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import Popover from 'evergreen-ui/commonjs/popover/src/Popover';
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import TextInput from 'evergreen-ui/commonjs/text-input/src/TextInput'
import toaster from 'evergreen-ui/commonjs/toaster/src'
import axios from 'axios';
import querystring from 'querystring';
import UpdateCase from './UpdateCase';

export default function UpdateCaseButton(props) {

return (

<Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        title="Update Case"
        intent="success"
        hasHeader={true}
        hasFooter={false}
        confirmLabel="Update Case"
      >
        <UpdateCase id={props.id} caseName={props.caseName} caseNumber={props.caseNumber} description={props.description} caseStatus={props.caseStatus} priority={props.priority}  />
      </Dialog>
        <Button appearance="minimal" intent="success" color="white" iconBefore="edit" marginBottom={10} marginTop={28} onClick={() => setState({ isShown: true })}>
          Update
        </Button>
    </Pane>
  )}
</Component>
)
};