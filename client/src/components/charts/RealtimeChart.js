import React from 'react';
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import gql from 'graphql-tag';
import {Query, withApollo, Subscription} from 'react-apollo';
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

const options = {
    chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Browser market shares at a specific website, 2014'
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
    name: 'Share',
    data: [
      { name: 'Chrome', y: 61.41 },
      { name: 'Internet Explorer', y: 11.84 },
      { name: 'Firefox', y: 10.85 },
      { name: 'Edge', y: 4.67 },
      { name: 'Safari', y: 4.18 },
      { name: 'Other', y: 7.05 }
    ]
  }]
};


class RealTimeChart extends Component {
    constructor(props) {
      super(props);
      this.client = props.client;
    }
  
    render() {
      return (
        <div className="messageWrapper">

   <Subscription subscription={gql`
   subscription getMyAccounts {
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
  }`}>

{({ loading, error, data }) => {
if (loading) {
  return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
  <Spinner size={28} marginX="auto" marginY={120}  />
</Pane></div>);
}
if (error) {
  console.error(error);
  return (<span> Error Fetching Chart Subscription!</span>);
}
if (data) {

  const accounts = data.account;
  
  const accountsList = [];
  accounts.forEach((account, index) => {
    accountsList.push(
        <HighchartsReact
        highcharts={Highcharts} 
        options={options}
        account = {account.data} 
        />);
  });
  return (
    <Fragment>
      {accountsList}
    </Fragment>
    
  );
}
}}
</Subscription>

</div>
);
}
}

export default withApollo(RealTimeChart);