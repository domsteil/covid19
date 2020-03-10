import React, { useState, useContext } from 'react'
import TextInput from 'evergreen-ui/commonjs/text-input/src/TextInput';
import Button from 'evergreen-ui/commonjs/buttons/src/Button';
import SideSheet from 'evergreen-ui/commonjs/side-sheet/src/SideSheet'
import Paragraph from 'evergreen-ui/commonjs/typography/src/Paragraph'
import Card from 'evergreen-ui/commonjs/layers/src/Card'
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import IconButton from 'evergreen-ui/commonjs/buttons/src/IconButton'
import Textarea from 'evergreen-ui/commonjs/textarea/src/Textarea';
import Tablist from 'evergreen-ui/commonjs/tabs/src/Tablist'
import Tab from 'evergreen-ui/commonjs/tabs/src/Tab'
import Component from '@reach/component-component';
import CornerDialog from 'evergreen-ui/commonjs/corner-dialog/src/CornerDialog'
import toaster from 'evergreen-ui/commonjs/toaster/src'
import OrganizationContext from '../../components/OrganizationContext';

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
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

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/exportCases', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE",
        "Accept-Encoding": "gzip, deflate",
        // "Authorization": "01-448dbac9-8c42df723645738886cdb3ce06f89e7af1d66517",
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <main>
        <Component initialState={{ isShown: false }}>
            {({ state, setState }) => (
    <React.Fragment>
      <CornerDialog
        title="Export Cases"
        isShown={state.isShown}
        confirmLabel="Export"
        onCancel={() => setState({ isShown: false })}
        onCloseComplete={handleOnSubmit}
      >
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
      </CornerDialog>
      <Button marginBottom={17} iconBefore="feed" onClick={() => setState({ isShown: true })}>
        Export Cases
      </Button>
    </React.Fragment>
  )}
</Component>
    </main>
  )
}