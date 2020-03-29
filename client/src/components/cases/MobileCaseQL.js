import React, { Component, Fragment } from "react";
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import MobileCaseItem from './MobileCaseItem';
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import Avatar from 'evergreen-ui/commonjs/avatar/src/Avatar';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import { motion } from 'framer-motion';
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import Icon from 'evergreen-ui/commonjs/icon/src/Icon';
import SearchInput from 'evergreen-ui/commonjs/search-input/src/SearchInput'
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import NewCaseMobileButton from "./NewCaseMobileButton";

const GET_MY_CASES = gql`
query getMyCases {
  cases(order_by: {createdDate: desc}) {
    id
    caseName
    description
    caseNumber
    caseStatus
    priority
    submitter
    resolver
    createdDate
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


class MobileCasePrivateList extends Component {
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

      const { cases } = this.props;

      let myCases = cases;

      const caseList = [];
      myCases.forEach((casex, index) => {
        caseList.push(
          <MobileCaseItem
            key={index}
            index={index}
            casex={casex}
          />
        );
      });

      return (
        <Fragment>
          <div className="caseListWrapper">
          <Heading size={700} marginBottom={28} marginRight={28} color="white"><Icon icon="issue" color="white" marginRight={8} />My Cases</Heading>
          <NewCaseMobileButton />
            <SearchInput marginLeft={28} marginTop={8} marginBottom={8} width={300} placeholder="Search Cases..." />
          <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={textVariants}>
            <ul>
              { caseList }
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
  


 const MobileCasesPrivateListQuery = () => {
  return (
    <Query query={GET_MY_CASES} pollInterval={500}>
      {({ loading, error, data, client}) => {
        if (loading) {
          return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
          <Spinner size={28} marginX="auto" marginY={120}  />
        </Pane></div>);
        }
        if (error) {
          console.error(error);
          return (<div>Error Loading the Case Graph!</div>);
        }
        return (<MobileCasePrivateList client={client} cases={data.cases} />);
      }}
    </Query>
  );
 };
export default MobileCasesPrivateListQuery;