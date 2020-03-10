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
import IconButton from 'evergreen-ui/commonjs/buttons/src/IconButton'
import Link from 'evergreen-ui/commonjs/typography/src/Link'
import Strong from 'evergreen-ui/commonjs/typography/src/Strong'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import UpdatePatienttButton from './UpdatePatientButton';
import DeletePatientButton from './DeletePatientButton';

const PatientVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };



const MobilePatientItem = ({index, Patient}) => {
  const router = useRouter()
  const { id } = router.query

  return (
<Table>
<Pane
  height={240}
  width={380}
  elevation={0}
  float="left"
  display="flex"
  alignItems="left"
  justifyContent="left"
  backgroundColor="#15202b"
  
  
  padding={8}
  borderRadius={8}
  marginBottom={8}
  marginRight={28}
  marginLeft={-28}
>
<Text align="left" color="white">
<Strong size={500} marginBottom={8} color="#FFFFFF"> {Patient.firstName} {Patient.lastName} </Strong>
<br/>
<Text color="#8899A6">Title:</Text> {Patient.title}
<br/>
<Text color="#8899A6">Phone:</Text> <Link href={"tel:" + Patient.phone}><Icon icon="phone" marginRight={3} size={8}/>{Patient.phone}</Link>
<br/>
<Text color="#8899A6">Email:</Text> <Link href={"mailto:" + Patient.email}><Icon icon="envelope" marginRight={3} size={8}/>{Patient.email}</Link>
<br/>
<Text color="#8899A6">Controller:</Text> <Link href='/crm/organisations/[party]' as={`/crm/organisations/${Patient.controller}`}>{Patient.controller} </Link>
<br/>
<Text color="#8899A6">Processor: </Text> <Link href='/crm/organisations/[counterparty]' as={`/crm/organisations/${Patient.processor}`}>{Patient.processor} </Link>
<br/>
<br/>
<Text size={300} color="#8899A6">Created At: {Patient.created_at}</Text>
<Pane display="flex" float="left" alignItems="left" justifyContent="left" padding={8} marginTop={-28}>
<UpdatePatienttButton id={Patient.id} firstName={Patient.firstName} lastName={Patient.lastName} title={Patient.title} email={Patient.email} phone={Patient.phone} description={Patient.description}   />
<br/>
<DeletePatientButton id={Patient.id} firstName={Patient.firstName} lastName={Patient.lastName} />
</Pane>
</Text>
</Pane>
<br/>
<br/>
                <style jsx>{`

                
              `}</style>
              </Table>

  );

            };

export default MobilePatientItem;
