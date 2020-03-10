import React, { Component, Fragment } from "react";
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import MobilePatientItem from './MobilePatientItem';
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import Avatar from 'evergreen-ui/commonjs/avatar/src/Avatar';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import { motion } from 'framer-motion';
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import Icon from 'evergreen-ui/commonjs/icon/src/Icon';
import SearchInput from 'evergreen-ui/commonjs/search-input/src/SearchInput'
import MobileUserInfo from '../mobileUserInfo';
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import Popover from 'evergreen-ui/commonjs/popover/src/Popover'
import AddPatientForm from './AddPatientForm';
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import NewPatientButton from "./NewPatientButton";
import NewPatientMobileButton from "./NewPatientMobileButton";

const GET_MY_PatientS = gql`
query getMyPatients {
  Patients(order_by: {created_at: desc, firstName: asc}) {
    id
    firstName
    lastName
    title
    phone
    description
    company {
      accountName
    }
    email
    controller
    processor
    created_at
  }
}`;


let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};



class MobilePatientPrivateList extends Component {
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

      const PatientList = [];
      myPatients.forEach((Patient, index) => {
        PatientList.push(
          <MobilePatientItem
            key={index}
            index={index}
            Patient={Patient}
          />
        );
      });

      return (
        <Fragment>
          <div className="PatientListWrapper">
          <MobileUserInfo className="mobileUser" />
          <Heading size={700} marginBottom={28} marginRight={28} color="white"><Icon icon="people" color="white" marginRight={8} />My Patients</Heading>
          <NewPatientMobileButton />
          <SearchInput marginLeft={28} marginTop={8} marginBottom={8} width={300} placeholder="Search Patients..." />
          <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={textVariants}>
            <ul>
              { PatientList }
            </ul>
            </motion.div>
            </motion.div>
          </div>
          <style jsx>{`
        .PatientListWrapper {

            marginLeft: -28px;
        }

        .mobileUser {
          margin-left: 100px;
          align: right;
        }
                
`}</style>
        </Fragment>
      );
    }
  }
  


 const MobilePatientPrivateListQuery = () => {
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
          return (<div>Error Loading the Patient Graph!</div>);
        }
        return (<MobilePatientPrivateList client={client} Patients={data.Patients} />);
      }}
    </Query>
  );
 };
export default MobilePatientPrivateListQuery;