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
    type: 'funnel3d',
    options3d: {
        enabled: true,
        alpha: 10,
        depth: 50,
        viewDistance: 50
    },
  },
  title: {
    text: 'Highcharts Funnel3D Chart'
},
plotOptions: {
    series: {
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b> ({point.y:,.0f})',
            allowOverlap: true,
            y: 10
        },
        neckWidth: '30%',
        neckHeight: '25%',
        width: '80%',
        height: '80%'
    }
},
series: [{
    name: 'Unique users',
    data: [
        ['Website visits', 15654],
        ['Downloads', 4064],
        ['Requested price list', 1987],
        ['Invoice sent', 976],
        ['Finalized', 846]
    ]
}]
};

  const AgreementFunnelChartQuery = () => {
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
            return (<div>Error Loading Agreement Funnel Chart!</div>);
          }
          return (<HighchartsReact highcharts={Highcharts} client={client} options={options} />);
        }}
      </Query>
    );
   };
  
  
  export default AgreementFunnelChartQuery;