import React from 'react';
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


const options = {
    chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'line'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'ACV'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: 'MSA',
    data: [7000.0, 6000.9, 9000.5, 14000.5, 18000.4, 21000.5, 25000.2, 26000.5, 23000.3, 18000.3, 13000.9, 9000.6]
  }, {
    name: 'SOW',
    data: [3000.9, 4000.2, 5000.7, 8000.5, 11000.9, 15000.2, 17000.0, 16000.6, 14000.2, 10000.3, 6000.6, 4000.8]
  }]
};

  const ContactLineChartQuery = () => {
    return ( 
    <Query query={GET_MY_ACCOUNTS} pollInterval={500}>
        {({ loading, error, data, client}) => {
          if (loading) {
            return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
            <Spinner size={28} marginX="auto" marginY={120}  />
          </Pane></div>);
          }
          if (error) {
            console.error(error);
            return (<div>Error Loading Contact Line Chart!</div>);
          }
          return (<HighchartsReact highcharts={Highcharts} client={client} options={options} />);
        }}
      </Query>
    );
   };
  
  
  export default ContactLineChartQuery;