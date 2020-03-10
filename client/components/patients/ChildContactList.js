import React from 'react'
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import Alert from 'evergreen-ui/commonjs/alert/src/Alert'
import Icon from 'evergreen-ui/commonjs/icon/src/Icon'
import { useRouter } from 'next/router'
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import Avatar from 'evergreen-ui/commonjs/avatar/src/Avatar';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import Checkbox from 'evergreen-ui/commonjs/checkbox/src/Checkbox'
import Component from "@reach/component-component";
import SideSheet from 'evergreen-ui/commonjs/side-sheet/src/SideSheet'
import Paragraph from 'evergreen-ui/commonjs/typography/src/Paragraph'
import Card from 'evergreen-ui/commonjs/layers/src/Card'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import { IconButton } from 'evergreen-ui/commonjs/buttons';
import Link from 'next/link'
import UpdatePatient from './UpdatePatient';


const ChildPatientList = ({index, Patient}) => {
    const router = useRouter();
    const { id } = router.query;

return (
<div>
<Alert
    hasIcon={false}
    intent="success"
    appearance="card"
    title=""
    marginBottom={28}
    marginTop={28}
  >
    <Table.VirtualBody height={50}>
             <TableRow key={Patient.id} >
<Table.TextCell><Link href="/crm/Patient/[id]" as={`/crm/Patient/${Patient.id}`}>
            <a>{Patient.id}</a>
          </Link></Table.TextCell>
             <TableCell flexBasis={180} >
               <Avatar  name={Patient.firstName}/>
                  <Text marginLeft={8} size={300} fontWeight={500}>
                    {Patient.firstName} {Patient.lastName}
                  </Text>
              </TableCell>
             <Table.TextCell>{Patient.title}</Table.TextCell>
             <Table.TextCell flexBasis={150} flexShrink={0} flexGrow={0}><a href={Patient.phone}><Icon icon="phone" marginRight={8} size={8}/>{Patient.phone}</a></Table.TextCell>
             <Table.TextCell flexBasis={180} flexShrink={0} flexGrow={0}><a href={Patient.email}><Icon icon="envelope" marginRight={8} size={8}/>{Patient.email}</a></Table.TextCell>
             <Table.TextCell></Table.TextCell>
             <Table.TextCell>{Patient.controller}</Table.TextCell>
             <Table.TextCell>{Patient.processor}</Table.TextCell>
             <Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <React.Fragment>
      <SideSheet
        isShown={state.isShown}
        onCloseComplete={() => setState({ isShown: false })}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
        }}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading size={600}>Patient Information</Heading>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <UpdatePatient id={Patient.id} firstName={Patient.firstName} lastName={Patient.lastName} title={Patient.title} email={Patient.email} phone={Patient.phone} />
        </Pane>
      </SideSheet>
      <IconButton height={24} marginTop={14} marginRight={20} icon="edit" appearance="minimal" onClick={() => setState({ isShown: true })} />
    </React.Fragment>
  )}
</Component>  
             </TableRow>
    </Table.VirtualBody>
  </Alert>

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
    
    
export default ChildPatientList;
    