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
import AddPatientForm from './AddPatientForm';

export default function NewPatientMobileButton(props) {

return (

<Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        title="New Patient"
        intent="success"
        hasHeader={true}
        hasFooter={false}
        confirmLabel="Create Patient"
      >
        <AddPatientForm />
      </Dialog>
        <Button appearance="primary" intent="success" marginRight={90} marginBottom={10} onClick={() => setState({ isShown: true })}>
          New Patient
        </Button>
    </Pane>
  )}
</Component>
)
};