import React, { useEffect, useState, useContext } from 'react';
import OrganizationContext from '../OrganizationContext';
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
import DeleteCase from './DeleteCase';

export default function DeleteCaseButton(props) {

return (

<Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        title="Delete Case"
        intent="success"
        hasHeader={true}
        hasFooter={false}
        confirmLabel="Delete Case"
      >
        <DeleteCase id={props.id} caseName={props.caseName} />
      </Dialog>
        <Button appearance="minimal" intent="danger" color="white" iconBefore="delete" marginTop={28} onClick={() => setState({ isShown: true })}>
          Delete
        </Button>
    </Pane>
  )}
</Component>
)
};