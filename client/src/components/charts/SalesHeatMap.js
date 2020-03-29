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
    type: 'heatmap',
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1
  },

title: {
  text: ''
},

xAxis: {
  categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
},

yAxis: {
  categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  title: null,
  reversed: true
},

colorAxis: {
  min: 0,
  minColor: '#FFFFFF',
},

legend: {
  align: 'right',
  layout: 'vertical',
  margin: 0,
  verticalAlign: 'top',
  y: 25,
  symbolHeight: 280
},

tooltip: {
  formatter: function () {
      return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
          this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
  }
},

series: [{
  name: 'Sales per employee',
  borderWidth: 1,
  data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
  dataLabels: {
      enabled: true,
      color: '#15202b'
  }
}],

responsive: {
  rules: [{
      condition: {
          maxWidth: 500
      },
      chartOptions: {
          yAxis: {
              labels: {
                  formatter: function () {
                      return this.value.charAt(0);
                  }
              }
          }
      }
  }]
}};

  const SalesHeatMapQuery = () => {
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
            return (<div>Error Loading Account Pie Chart!</div>);
          }
          return (<HighchartsReact highcharts={Highcharts} client={client} options={options} />);
        }}
      </Query>
    );
   };
  
  
  export default SalesHeatMapQuery;