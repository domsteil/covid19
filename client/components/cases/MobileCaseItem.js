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
import UpdateCaseButton from './UpdateCaseButton';
import DeleteCaseButton from './DeleteCaseButton';

const caseVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };



const MobileCaseItem = ({index, casex}) => {
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
<br/>
<Strong size={500} marginBottom={8} color="#FFFFFF"> {casex.caseName} </Strong>
<br/>
<Text color="#8899A6">Case Number: </Text> {casex.caseNumber}
<br/>
<Text color="#8899A6">Description: </Text> {casex.description}
<br/>
<Text color="#8899A6">Case Status: </Text>{casex.caseStatus}
<br/>
<Text color="#8899A6">Case Priority: </Text>{casex.priority}
<br/>
<Text color="#8899A6">Submitter:</Text> <Link href="#">{casex.submitter} </Link>
<br/>
<Text color="#8899A6">Resolver: </Text> <Link href="#"> {casex.resolver} </Link>
<br/>
<br/>
<Text size={300} color="#8899A6">Created At: {casex.createdDate}</Text>
<Pane display="flex" float="left" alignItems="left" justifyContent="left" padding={8} marginTop={-28}>
<br/>
<UpdateCaseButton id={casex.id} caseName={casex.caseName} caseNumber={casex.caseNumber} description={casex.description} caseStatus={casex.caseStatus} priority={casex.priority} />
<br/>
<DeleteCaseButton id={casex.id} caseName={casex.caseName} />
</Pane>
</Text>
</Pane>
                <style jsx>{`

                
              `}</style>
              </Table>

  );

            };

export default MobileCaseItem;
