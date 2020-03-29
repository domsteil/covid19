import React, { Component, Fragment } from "react";
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import { Pane } from 'evergreen-ui/commonjs/layers';
import { Spinner } from 'evergreen-ui';


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
          chartOptions: {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
              },
              title: {
                text: 'Account'
              },
              tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                      property: 'percentage',
                      operator: '>',
                      value: 4
                    }
                  }
                }
              },
              series: [{
                  name: '',
                  colorByPoint: true,
                  data: [{
                      name: this.props.accounts.accountName,
                      y: 10,
                      sliced: true,
                      selected: true},
                     ],
                  }]
        }
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

    render () {
      
      const { chartOptions } = this.state;

      return <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
      </div>
    }
  }
  
 const AccountIndustryPieChartQuery = () => {
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

export default AccountIndustryPieChartQuery;