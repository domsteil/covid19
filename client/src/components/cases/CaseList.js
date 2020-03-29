import React, { useEffect, useState, useContext } from 'react';
import useFetch from "../useFetch";
import { useSpring, animated } from 'react-spring'
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import OrganizationContext from '../OrganizationContext';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import Checkbox from 'evergreen-ui/commonjs/checkbox/src/Checkbox'
import Component from "@reach/component-component";
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import Link from 'next/link'
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
import TextDropdownButton from 'evergreen-ui/commonjs/buttons/src/TextDropdownButton'

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};



export default function CaseList(props) {

const { nodeName } = useContext(OrganizationContext);
const cases = useFetch("https://dapps.ngrok.io:8080/api/covid/getCases");
const router = useRouter()
const { id } = router.query


    return (
            <div>
        <Table>
        <Table.Head background="#F7F8FA">
          <Table.TextHeaderCell>Id<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Name<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Number<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Summary<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Location<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Country<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Latitude<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Longitude<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Date<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Status<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Priority<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Submitter<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
          </Table.Head>
          <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={textVariants}>
          {cases.map(casex => (
          <Table.VirtualBody height={50}>
             <TableRow key={casex.caseId}>
             <Checkbox marginLeft={8}></Checkbox>
             <Table.TextCell><Link href='/crm/case/[id]' as={`/crm/case/${casex.caseId}`}>
            <a>{casex.caseId}</a>
          </Link></Table.TextCell>
             <TableCell>
                  <Text marginLeft={8} size={300} fontWeight={500}>
                    {casex.description}
                  </Text>
              </TableCell>
             <Table.TextCell>{casex.summary}</Table.TextCell>
             <Table.TextCell>{casex.location}</Table.TextCell>
             <Table.TextCell>{casex.country}</Table.TextCell>
             <Table.TextCell>{casex.latitude}</Table.TextCell>
             <Table.TextCell>{casex.longitude}</Table.TextCell>
             <Table.TextCell>{casex.date}</Table.TextCell>
             <Table.TextCell>{casex.status}</Table.TextCell>
             <Table.TextCell>{casex.submitter}</Table.TextCell>
             </TableRow>
    </Table.VirtualBody>
                    ))}
              </motion.div>
            </motion.div>
            </Table>
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

    thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
    }

    th {
        color: rgb(102, 102, 102);
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0px;
    }

    td {
        text-align: left;
        vertical-align: top;
        padding: 0px 10px;
        color: rgb(68, 68, 68);
        font-size: 15px;
        border-bottom: 1px solid #e6ecf0;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 3px;
    
    }

      .agreements {
        font-size: 13px;
        font-color: #000
      }

      .agreementItems {
        font-size: 13px;
        font-color: #000
      }

      

      .agreementCard {
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
    </div>
    );
}
