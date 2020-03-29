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
import AddCaseWithAccount from './AddCaseWithAccount';
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function NewCaseButton(props) {

const router = useRouter()
const { id } = router.query

return (

<Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        title="New Case"
        intent="success"
        hasHeader={true}
        hasFooter={false}
        confirmLabel="Create Case"
      >
        <AddCaseWithAccount account_id={id} />
      </Dialog>
        <Button marginRight={16} appearance="primary" intent="success" marginRight={16} onClick={() => setState({ isShown: true })}>
          New Case
        </Button>
    </Pane>
  )}
</Component>
)
};