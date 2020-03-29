import React from 'react';
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import { Pane } from 'evergreen-ui/commonjs/layers';
import { Spinner } from 'evergreen-ui';

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

class AgreementPieChart extends React.Component {
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
              text: ''
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
                name: 'Status',
                colorByPoint: true,
                data: [{
                  name: 'REQUEST',
                  y: 61.41,
                  sliced: true,
                  selected: true
                }, {
                  name: 'Amended',
                  y: 11.84
                }, {
                  name: 'Terminated',
                  y: 10.85
                }, {
                  name: 'In Effect',
                  y: 4.67
                }, {
                  name: 'Other',
                  y: 2.61
                }],
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

export default AgreementPieChart;