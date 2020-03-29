import React from 'react'
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import Avatar from 'evergreen-ui/commonjs/avatar/src/Avatar';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import Checkbox from 'evergreen-ui/commonjs/checkbox/src/Checkbox'
import Icon from 'evergreen-ui/commonjs/icon/src/Icon';
import Component from "@reach/component-component";
import SideSheet from 'evergreen-ui/commonjs/side-sheet/src/SideSheet'
import Paragraph from 'evergreen-ui/commonjs/typography/src/Paragraph'
import Card from 'evergreen-ui/commonjs/layers/src/Card'
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import { IconButton } from 'evergreen-ui/commonjs/buttons';
import { useRouter } from 'next/router'
import Link from 'next/link'
import UpdatePatient from './UpdatePatient';
import DeletePatient from './DeletePatient';


const PatientItem = ({index, Patient}) => {
  const router = useRouter()
  const { id } = router.query

  return (
<Table>
    <Table.VirtualBody height={50}>
             <TableRow key={Patient.id} >
             <Component initialState={{ checked: false }}>
  {({ state, setState }) => (
    <Checkbox
      checked={state.checked}
      onChange={e => setState({ checked: e.target.checked })}
    />
  )}
</Component>
<TableCell>
             <Avatar  name={Patient.firstName} />
             <Table.TextCell><Link href='/crm/Patient/[id]' as={`/crm/Patient/${Patient.id}`}>
            <a>{Patient.firstName} {Patient.lastName}</a>
          </Link></Table.TextCell>
             </TableCell>
             <Table.TextCell>{Patient.title}</Table.TextCell>
             <Table.TextCell><a href={"tel:" + Patient.phone}><Icon icon="phone" marginRight={8} size={8}/>{Patient.phone}</a></Table.TextCell>
             <Table.TextCell><a href={"mailto:" + Patient.email}><Icon icon="envelope" marginRight={8} size={8}/>{Patient.email}</a></Table.TextCell>
             <Table.TextCell><Link href='/crm/account/[id]' as={`/crm/account/${Patient.account_id}`}><a>{Patient.company.accountName}</a></Link></Table.TextCell>
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
          <UpdatePatient id={Patient.id} firstName={Patient.firstName} lastName={Patient.lastName} title={Patient.title} email={Patient.email} phone={Patient.phone} description={Patient.description} />
          <br/>
          <DeletePatient id={Patient.id} firstName={Patient.firstName} lastName={Patient.lastName} />
        </Pane>
      </SideSheet>
      <IconButton height={24} marginTop={14} marginRight={20} icon="edit" appearance="minimal" onClick={() => setState({ isShown: true })} />
    </React.Fragment>
  )}
</Component>  
             </TableRow>
    </Table.VirtualBody>
                <style jsx>{`
                .column {
                  text-align: left
                }
          
                .vertical {
                  align-left: 30px;
                  height: 1200px;
                }
          
                .table {
                  display: table;
                  border-collapse: separate;
                  border-spacing: 2px;
                  border-color: grey;
              }

              li { /* styles all li elements*/
                list-style-type: none;
            }
          
              thead {
                  display: table-header-group;
                  vertical-align: middle;
                  border-color: inherit;
                  border-bottom: 1px solid rgb(234, 234, 234);
                  border-left: 1px solid rgb(234, 234, 234);
                  border-radius: 4px 0px 0px 4px;
                  border-top: 1px solid rgb(234, 234, 234);
              }
          
              th {
                  color: rgb(102, 102, 102);
                  font-size: 14px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  padding-left: 28px;
              }
          
              td {
                  text-align: left;
                  vertical-align: top;
                  padding: 0px 10px;
                  color: rgb(68, 68, 68);
                  font-size: 14px;
                  border-bottom: 1px solid rgb(234, 234, 234);
              
              }
          
              tr {
                  text-align: left;
                  vertical-align: top;
                  padding: 0px 10px;
                  color: rgb(68, 68, 68);
                  font-size: 14px;
                  border-bottom: 1px solid rgb(234, 234, 234);
          
              }
          
                .accounts {
                  font-size: 13px;
                  font-color: #000
                }
          
                .accountItems {
                  font-size: 13px;
                  font-color: #000
                }
          
                
          
                .accountCard {
                  background: #fff;
                  border-radius: 5px;
                  box-shadow: 0 8px 28px 0 rgba(86,91,115,.15);
                  position: center;
                  text-align: center;
                  box-sizing: border-box;
                  align: center;
                  padding-left: 28px;
                  padding-right: 28px;
                  margin-top: 28px;
                  margin-left: 28px;
                  margin-right: 28px;
                  background-color: #F7F6F3;
                  width: 1000px;
                  height: 400px;
              }
          
               .col-left {
                  box-sizing: border-box;
                  min-height: 100%;
                  background: #233659;
                  background: linear-gradient(135deg,#565b73,#233659);
                  padding: 25px;
                  border-top-left-radius: 5px;
                  border-top-right-radius: 5px;
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
          
                  
          .archetype-form__container {
              background: 0 0;
              color: #0d112b;
              width: 100%;
              margin: 0 auto;
              text-align: left;
          }
                }
              `}</style>
              </Table>

  );

            };

export default PatientItem;
