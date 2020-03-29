import React, { useEffect, useState, useContext } from 'react';
import useFetch from "../../components/useFetch";
import axios from 'axios';
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import Avatar from 'evergreen-ui/commonjs/avatar/src/Avatar';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import Icon from 'evergreen-ui/commonjs/icon/src/Icon';
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
import Checkbox from 'evergreen-ui/commonjs/checkbox/src/Checkbox'
import OrganizationContext from '../../components/OrganizationContext';
import Container from '../container';
import ReplyMessage from './ReplyMessage';

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};


export default function AccountList(props) {

const { nodeName } = useContext(OrganizationContext);
const messages = useFetch("https://dapps.ngrok.io/api/" + nodeName + "/getMessages");
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);

      setData(result.data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  fetchData();
}, []);


    return (
        <div>
            <Table backgroundColor="white" borderColor="white">
            <Table.Head align="left" backgroundColor="white" borderColor="white">
            <Table.TextHeaderCell>From</Table.TextHeaderCell>
            <Table.TextHeaderCell>To</Table.TextHeaderCell>
            <Table.TextHeaderCell>Message</Table.TextHeaderCell>
            <Table.TextHeaderCell>Time</Table.TextHeaderCell>
          </Table.Head>
          <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={textVariants}>
                {messages.map(message => (
    <Table.VirtualBody height={50}>
    <TableRow key={message.id} align="left">
    <TableCell marginLeft={8}>
      <Avatar name={message.from} />
         <Text marginLeft={8} marginRight={28}size={300} fontWeight={500}>
           {message.from}
         </Text>
     </TableCell>
     <TableCell marginLeft={8}>
      <Avatar name={message.to} />
         <Text marginLeft={8} marginRight={28}size={300} fontWeight={500}>
           {message.to}
         </Text>
     </TableCell>
     <Table.TextCell >{message.body}</Table.TextCell>
     <Table.TextCell marginLeft={28}>{message.time}</Table.TextCell>
     <Icon icon="tick-circle" color="success" marginRight={18} marginTop={12} />
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
            <Heading size={600}>Message Details</Heading>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="white" padding={16}>
          <Pane padding={16} borderBottom="muted">
            <Text>From:
                    <Text marginLeft={8} marginTop={28} size={300} fontWeight={500}>
                    {message.from}
                    </Text>
            </Text>
            <br/>
            <Text>To:
                    <Text marginLeft={8} size={300} fontWeight={500}>
                    {message.to}
                    </Text>
            </Text>
            <br/>
            <Text>Delivered At: <Text marginLeft={8} size={300} fontWeight={500}>{message.time}</Text></Text>
            <br/>
            <Text>UUID: <Text marginLeft={8} size={300} fontWeight={500}>{message.linearId}</Text></Text>
            <br/>
            <br/>
            <br/>
            <Paragraph >
              {message.body}
            </Paragraph>
          </Pane>
        </Pane>
      </SideSheet>
      <IconButton height={24} marginTop={12} marginRight={20} icon="more" appearance="minimal" onClick={() => setState({ isShown: true })} />
    </React.Fragment>
  )}
</Component>           
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
        </div>
    );
}
