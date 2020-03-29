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
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['CEO', 'Founder', 'VP Sales', 'Head of Partners', 'CTO']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'John',
    data: [5, 3, 4, 7, 2]
  }, {
    name: 'Jane',
    data: [2, 2, 3, 2, 1]
  }, {
    name: 'Joe',
    data: [3, 4, 4, 2, 5]
  }]
};

  const ContactBarChartQuery = () => {
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
            return (<div>Error Loading Contact Bar Chart!</div>);
          }
          return (<HighchartsReact highcharts={Highcharts} client={client} options={options} />);
        }}
      </Query>
    );
   };
  
  
  export default ContactBarChartQuery;