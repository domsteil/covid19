import React, { Component, Fragment } from "react";
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import TopPatientItem from './TopPatientItem';
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import { motion } from 'framer-motion';
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import TextDropdownButton from 'evergreen-ui/commonjs/buttons/src/TextDropdownButton'

const GET_MY_PatientS = gql`
query getMyPatients {
    Patients(where: {company: {accountName: {_neq: "null"}}}, order_by: {created_at: desc_nulls_last, company: {accountName: asc}}) {
      id
      firstName
      lastName
      title
      phone
      account_id
      company {
        accountName
      }
      email
      controller
      processor
      created_at
    }
  }
`;

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { x: 0, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};




class PatientPrivateList extends Component {
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

      const { Patients } = this.props;

      let myPatients = Patients;

      const topPatientList = [];
      myPatients.forEach((Patient, index) => {
        topPatientList.push(
          <TopPatientItem
            key={index}
            index={index}
            Patient={Patient}
          />
        );
      });

      return (
        <Fragment>
            <ul>
              { topPatientList }
            </ul>
        </Fragment>
      );
    }
  }
  

 const PatientPrivateListQuery = () => {
  return ( 
  <Query query={GET_MY_PatientS} pollInterval={500}>
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
        return (<PatientPrivateList client={client} Patients={data.Patients} />);
      }}
    </Query>
  );
 };


export default PatientPrivateListQuery;