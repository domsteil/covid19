import React from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import Popover from 'evergreen-ui/commonjs/popover/src/Popover'
import Card from 'evergreen-ui/commonjs/layers/src/Card'
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import Alert from 'evergreen-ui/commonjs/alert/src/Alert'
import IconButton from 'evergreen-ui/commonjs/buttons/src/IconButton'
import Icon from 'evergreen-ui/commonjs/icon/src/Icon'
import Link from 'evergreen-ui/commonjs/typography/src/Link'
import Strong from 'evergreen-ui/commonjs/typography/src/Strong'
import Component from '@reach/component-component'
import Textarea from 'evergreen-ui/commonjs/textarea/src/Textarea'
import { useRouter } from 'next/router'
import Paragraph from 'evergreen-ui/commonjs/typography/src/Paragraph';
import EscalateCase from './EscalateCase';
import CloseCase from './CloseCase';
import ResolveCase from './ResolveCase';

const CaseRecord = ({index, casex, id}) => {

return (

<div>
<Heading size={900}>{casex.caseName} - {casex.caseNumber} </Heading>
<br/>
<Pane display="flex" padding={16} background="tint2" borderRadius={3}>
<Button iconBefore="headset" appearance="primary" intent="success" marginRight={16}>Log a Call</Button>
<Button iconBefore="new-object" marginRight={16}>New Task</Button>
<Button iconBefore="annotation" marginRight={16}>New Note</Button>
<EscalateCase />
<CloseCase />
<ResolveCase />
<Button iconBefore="layout-hierarchy" marginRight={16}>Change Owner</Button>
<Button iconBefore="feed-subscribed" appearance="primary" marginRight={16}>Subscribe</Button>
</Pane>
<br/>
<br/>
<Heading align="left">Case Details:</Heading>
<br/>
<Pane
background="white"
padding={8}
elevation={0}>
<div className="row">
<div className="column">
<Strong size={500}>Name:</Strong> {casex.caseName}
<br/>
<Strong size={500}>Number:</Strong> {casex.caseNumber}
<br/>
<Strong size={500}>Status:</Strong> {casex.caseStatus}
<br/>
<Strong size={500}>Priority:</Strong> {casex.priority}
</div>
<div className="column">
<Strong>Submitter:</Strong> <Link href="#">{casex.submitter} </Link>
<br/>
<Strong>Resolver: </Strong> <Link href="#"> {casex.resolver} </Link>
<br/>
</div>
<div className="column">
<Strong>Case Description:</Strong> <Paragraph>{casex.description}</Paragraph>
<br/>
</div>
</div>
</Pane>
<br/>
<Component initialState={{ value: 'Case Notes...'}}>
  {({ state, setState }) => (
    <Textarea
      onChange={e => setState({ value: e.target.value })}
      value={state.value}
    />
  )}
</Component>

<br/>
<br/>




                    <style jsx>{`


.column {
  text-align: left;
  border-width: 1px;
  list-style: none;
  padding-bottom: 8px;
  padding-top: 8px;
  margin-right: 28px;
}

.login {
  color: #FFF;
}

.signup {
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
                        width: 100%;
                        padding: 1.5rem 0;
                        text-align: center;
                        max-width: 330px;
                      }
    
                      th {
                        text-align: left;
                        color: rgb(102, 102, 102);
                        font-size: 14px;
                        font-weight: 400;
                        letter-spacing: 0px;
                        padding-left: -20px;
                    }
                
                    td {
                        text-align: left;
                        vertical-align: top;
                        color: rgb(68, 68, 68);
                        font-size: 8px;
                        padding-left: 50px;
                    
                    }
                
                    tr {
                        text-align: left;
                        vertical-align: top;
                        padding: 0px 10px;
                        color: rgb(68, 68, 68);
                        font-size: 14px;
                
                    }
              
                      
              .archetype-form__container {
                  background: 0 0;
                  color: #0d112b;
                  width: 100%;
                  margin: 0 auto;
                  text-align: left;
              }
                    }
                  `}</style>
                  </div>

                  );

              };
    
    
export default CaseRecord;
    