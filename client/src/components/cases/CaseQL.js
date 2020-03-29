import React, { Component, Fragment } from "react";
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import CaseItem from './CaseItem';
import { Table, TableBody, TableCell, TableRow, TableHeaderCell, TableHead } from 'evergreen-ui/commonjs/table';
import Avatar from 'evergreen-ui/commonjs/avatar/src/Avatar';
import Text from 'evergreen-ui/commonjs/typography/src/Text';
import { motion } from 'framer-motion';
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import TextDropdownButton from 'evergreen-ui/commonjs/buttons/src/TextDropdownButton'

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

class CasePrivateList extends Component {
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
          <CaseItem
            key={index}
            index={index}
            casex={casex}
          />
        );
      });

      return (
        <Fragment>
          <div className="caseListWrapper">
          <Table.Head background="#F7F8FA">
          <Table.TextHeaderCell>Id<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Case Name<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Description<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Case Number<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Case Status<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Priority<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Submitter<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
            <Table.TextHeaderCell>Resolver<TextDropdownButton icon="caret-down" height={24} appearance="minimal" /></Table.TextHeaderCell>
          </Table.Head>
            <ul>
              { caseList }
            </ul>
          </div>
        </Fragment>
      );
    }
  }


 const CasePrivateListQuery = () => {
  return (
    <Query query={GET_MY_CASES} pollInterval={500} >
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
        return (<CasePrivateList client={client} cases={data.cases} />);
      }}
    </Query>
  );
 };
export default CasePrivateListQuery;