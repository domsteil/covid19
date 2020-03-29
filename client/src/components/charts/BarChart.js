import React from 'react';
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import gql from 'graphql-tag';
import {Query, withApollo, Subscription} from 'react-apollo';
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'


const GET_MY_ACCOUNTS = gql`
query getMyAccounts {
  accounts(order_by: {created_at: desc_nulls_last}) {
    id
    accountName
    accountType
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
}`;



if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}


const options = {
    chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'bar'
  },
  title: {
    text: 'Accounts by Industry'
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
  series: [
    { name: 'Chrome', y: 61.41 },
    { name: 'Internet Explorer', y: 11.84 },
    { name: 'Firefox', y: 10.85 },
    { name: 'Edge', y: 4.67 },
    { name: 'Safari', y: 4.18 },
    { name: 'Other', y: 7.05 }
  ]
};

    const BarChart = () => {
        return ( 
        <Query query={GET_MY_ACCOUNTS}>
            {({ loading, error, data, client}) => {
              if (loading) {
                return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
                <Spinner size={28} marginX="auto" marginY={120}  />
              </Pane></div>);
              }
              if (error) {
                console.error(error);
                return (<div>Error Loading Account Graph!</div>);
              }
              return (<HighchartsReact
                highcharts={Highcharts} 
                options={options}
                client={client} 
                accounts={data.accounts} />);
            }}
          </Query>
        );
       };

  export default BarChart;