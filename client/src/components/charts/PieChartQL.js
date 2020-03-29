import React, { Component, Fragment } from "react";
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import { Pane } from 'evergreen-ui/commonjs/layers';
import { Spinner } from 'evergreen-ui';
import PieChart from "./PieChart";


const GET_MY_ACCOUNTS = gql`
query getMyAccounts {
  accounts(order_by: {created_at: desc_nulls_last}) {
    id
    accountName
    accountType
    accountNotes
    industry
    rating
    phone
    controller
    processor
    is_public
    is_active
    created_at
    contacts {
      firstName
      lastName
      phone
      email
    }
  }
}
`;

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

class AccountIndustryPieChart extends React.Component {
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

    updateSeries = () => {
        // The chart is updated only with new options.
        this.setState({
          chartOptions: {
            series: [
              { data: [Math.random() * 5, 2, 1]}
            ]
          }
        });
      }

    render () {

        const { accounts } = this.props;

        let myAccounts = accounts;
        const accountList = [];
        myAccounts.forEach((account, index) => {
    
      return (
          <Fragment>
                  <PieChart accounts={myAccounts} index={index} />
          </Fragment>
      );
  }
}
  
 const PieChartQuery = () => {
  return ( 
    <Query query={GET_MY_ACCOUNTS} pollInterval={500}>
    {({ loading, error, data, client}) => {
      if (loading) {
        return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
        <Spinner size={28} marginX="auto" marginY={120}  />
      </Pane></div>);
      }
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;
  
      return <AccountIndustryPieChart client={client} accounts={data.accounts} />
    }}
  </Query>
  )
};

export default PieChartQuery;