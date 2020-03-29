import React, { useEffect, useState, useContext } from 'react';
import useFetch from "../../components/useFetch";
import axios from 'axios';
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import Avatar from 'evergreen-ui/commonjs/avatar/src/Avatar';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import Checkbox from 'evergreen-ui/commonjs/checkbox/src/Checkbox'
import OrganizationContext from '../../components/OrganizationContext';
import { motion } from 'framer-motion';

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};


export default function PatientList(props) {

const { nodeName } = useContext(OrganizationContext);
const Patients = useFetch("https://dapps.ngrok.io/api/" + nodeName + "/getPatients");
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
            <Table>
            <Table.Head>
            <Table.TextHeaderCell>Id</Table.TextHeaderCell>
            <Table.TextHeaderCell>First Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Last Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Sex</Table.TextHeaderCell>
            <Table.TextHeaderCell>Age</Table.TextHeaderCell>
            <Table.TextHeaderCell>Email</Table.TextHeaderCell>
            <Table.TextHeaderCell>Phone</Table.TextHeaderCell>
            <Table.TextHeaderCell>Controller</Table.TextHeaderCell>
            <Table.TextHeaderCell>Processor</Table.TextHeaderCell>
          </Table.Head>
          <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={textVariants}>
                {patients.map(Patient => (
    <Table.VirtualBody height={50}>
    <TableRow key={patient.patientId}>
    <Checkbox marginLeft={8}></Checkbox>
    <Table.TextCell>{patient.patientId}</Table.TextCell>
    <TableCell>
      <Avatar name={patient.firstName} />
      <Text marginLeft={8} size={300} fontWeight={500}>
                    {patient.firstName}
                  </Text>
     </TableCell>
    <Table.TextCell>{patient.lastName}</Table.TextCell>
    <Table.TextCell>{patient.email}</Table.TextCell>
    <Table.TextCell>{patient.sex}</Table.TextCell>
    <Table.TextCell>{patient.age}</Table.TextCell>
    <Table.TextCell><a href="tel:{account.phone}">{patient.phone}</a></Table.TextCell>
    <Table.TextCell>{patient.controller}</Table.TextCell>
    <Table.TextCell>{patient.processor}</Table.TextCell>
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
