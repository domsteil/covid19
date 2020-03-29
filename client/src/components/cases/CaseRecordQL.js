import React, { Component, Fragment } from "react";
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import CaseRecord from './CaseRecord';
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import { motion } from 'framer-motion';
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import { useRouter } from 'next/router'
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'


const GET_MY_CASE = gql`
query getMyCases($id: String) {
  cases(where: {id: {_eq: $id}}) {
    id
    caseName
    description
    caseNumber
    caseStatus
    priority
    submitter
    resolver
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



class CaseRecordPrivateList extends Component {
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

      const { cases } = this.props;

      let myCases = cases;

      const caseList = [];
      myCases.forEach((casex, index) => {
        caseList.push(
          <CaseRecord
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
              { caseList }
              <Heading color="rgb(102, 120, 138)" align="left">Case Feed:</Heading>
            </ul>
            </motion.div>
            </motion.div>
        </Fragment>
      );
    }
  }
  

 const CasePrivateListQuery = (id) => {

  return ( 
  <Query query={GET_MY_CASE} pollInterval={500} variables={id}>
      {({ loading, error, data, client}) => {
        if (loading) {
          return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
          <Spinner size={28} marginX="auto" marginY={120}  />
        </Pane></div>);
        }
        if (error) {
          console.error(error);
          return (<div>Error Loading Case Graph!</div>);
        }
        return (<CaseRecordPrivateList client={client} cases={data.cases} id={id} />);
      }}
    </Query>
  );
 };


export default CasePrivateListQuery;