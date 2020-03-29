import React, { Component, Fragment } from "react";
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import PatientRecord from './PatientRecord';
import ChildCaseList from '../cases/ChildCaseList';
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import { motion } from 'framer-motion';
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import { useRouter } from 'next/router'
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import IconButton from 'evergreen-ui/commonjs/buttons/src/IconButton';
import Popover from 'evergreen-ui/commonjs/popover/src/Popover'
import AddPatientForm from './AddPatientForm';
import Button from 'evergreen-ui/commonjs/buttons/src/Button';


const GET_MY_Patient = gql`
query getMyPatientData($id: String) {
  Patients(where: {id: {_eq: $id}}) {
    id
    firstName
    lastName
    title
    phone
    email
    controller
    processor
    description
  }
  cases(where: {Patient_id: {_eq: $id}}) {
  id
  caseName
  caseNumber
  caseStatus
  Patient_id
  account_id
}
}
`;

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};



class PatientRecordPrivateList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filter: "all",
        clearInProgress: false,
      };

      this.filterResults = this.filterResults.bind(this);
      this.clearCompleted = this.clearCompleted.bind(this);
    }

    filterResults(filter) {
      this.setState({
        ...this.state,
        filter: filter
      });
    }

    clearCompleted() {}
    
    render() {

      const { id } = this.props;

      const { Patients } = this.props;
      const { cases } = this.props;

      let myPatients = Patients;
      let myCases = cases;

      const PatientList = [];
      myPatients.forEach((Patient, index) => {
        PatientList.push(
          <PatientRecord
            key={index}
            index={index}
            Patient={Patient}
            id={id}
          />
        );
      });

      const caseList = [];
      myCases.forEach((casex, index) => {
        caseList.push(
          <ChildCaseList
            key={index}
            index={index}
            casex={casex}
            id={id}
          />
        );
      });

      return (
        <Fragment>
          <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={textVariants}>
            <ul>
              { PatientList }
              <Heading align="left">Cases: </Heading>
              { caseList}
              <br/>
            </ul>
            </motion.div>
            </motion.div>
        </Fragment>
      );
    }
  }
  

 const PatientPrivateListQuery = (id) => {

  return ( 
  <Query query={GET_MY_Patient} variables={id}>
      {({ loading, error, data, client}) => {
        if (loading) {
          return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
          <Spinner size={28} marginX="auto" marginY={120}  />
        </Pane></div>);
        }
        if (error) {
          console.error(error);
          return (<div>Error Loading Patient Graph!</div>);
        }
        return (<PatientRecordPrivateList client={client} Patients={data.Patients} cases={data.cases} id={id} />);
      }}
    </Query>
  );
 };


export default PatientPrivateListQuery;