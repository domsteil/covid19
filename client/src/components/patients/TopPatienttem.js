import React from 'react'
import gql from 'graphql-tag';
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
import IconButton from 'evergreen-ui/commonjs/buttons/src/IconButton'
import Textarea from 'evergreen-ui/commonjs/textarea/src/Textarea';
import Tablist from 'evergreen-ui/commonjs/tabs/src/Tablist'
import Tab from 'evergreen-ui/commonjs/tabs/src/Tab'
import PieChart from '../charts/PieChart';
import ScatterChart from '../charts/ScatterChart';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useMutation } from "@apollo/react-hooks";

const TopPatientItem = ({index, Patient}) => {
  const router = useRouter()
  const { id } = router.query

  return (
<Table>
    <Table.VirtualBody height={50}>
             <TableRow key={Patient.id}>
             <TableCell>
             <Avatar  name={Patient.firstName} />
             <Table.TextCell><Link href='/crm/Patient/[id]' as={`/crm/Patient/${Patient.id}`}>
            <a>{Patient.firstName} {Patient.lastName}</a>
          </Link></Table.TextCell>
             </TableCell>
             <Table.TextCell>{Patient.rating}</Table.TextCell>
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
          <Pane padding={16} borderBottom="muted">
            <Heading size={600}>Patient Details</Heading>
            <Paragraph size={400} color="muted">
              {Patient.firstName} {Patient.lastName}
            </Paragraph>
          </Pane>
          <Pane display="flex" padding={8}>
            <Tablist>
               {['Traits', 'Event History', 'Primary Patients', 'Transactions', 'Intelligence', 'Assets'].map(
                  (tab, index) => (
                    <Tab
                      key={tab}
                      isSelected={state.selectedIndex === index}
                      onSelect={() => setState({ selectedIndex: index })}
                    >
                      {tab}
                    </Tab>
                  )
                )}

            </Tablist>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <Card
            backgroundColor="white"
            elevation={0}
            height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
          <Pane padding={16} borderBottom="muted">
            <Heading size={500}>Patient Notes</Heading>
            <Paragraph >
            </Paragraph>
          </Pane>
          </Card>
          <PieChart />
          <ScatterChart />
        </Pane>
      </SideSheet>
      <IconButton height={24} marginTop={12} marginRight={20} icon="more" appearance="minimal" onClick={() => setState({ isShown: true })} />
    </React.Fragment>
  )}
</Component>
             </TableRow>
    </Table.VirtualBody>
                <style jsx>{`

                  

          
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
                }
            
                td {
                    text-align: left;
                    vertical-align: top;
                    color: rgb(68, 68, 68);
                    font-size: 8px;
                
                }
            
                tr {
                    text-align: left;
                    vertical-align: top;
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
              </Table>

  );

            };

export default TopPatientItem;
