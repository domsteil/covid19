import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import graphql2chartjs from 'graphql2chartjs';
import {Pie} from 'react-chartjs-2';
import { Spinner } from 'evergreen-ui';
import { Pane } from 'evergreen-ui/commonjs/layers';


const GET_MY_ACCOUNT_CHART_DATA = gql`
      query {
        AccountsByIndustry: accounts {
            label: industry
            data: employees
          }
      }`;

      const chartOptions = {
        layout: { padding: { top: 0, bottom: 0, left: 0, right: 0 } },
        hoverbackgroundColor: '#27BB75',
        maintainAspectRatio: true,
        legend: { display: false },
        title: {
          display: true,
          text: '',
          padding: 8,
          lineHeight: 4,
          fontSize: 12,
          fontColor: '#234361'
      },
      animation: {
        easing: 'easeInOutQuad'
      }
  };



const AccountPieChart = () => {
  return (
  <Query query={GET_MY_ACCOUNT_CHART_DATA} pollInterval={500}>
    {({ loading, error, data, client }) => {
    if (loading) {
            return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
            <Spinner size={28} marginX="auto" marginY={120}  />
        </Pane></div>);
       }
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;
    
    if (data) {
      const g2c = new graphql2chartjs(data, (datasetName, dataPoint) => {
        return {
          chartType: 'pie',
          backgroundColor: '#bb276d'
        };
      });

        return <Pie data={g2c.data} client={client} height={180} width={200} options={chartOptions} />;
      } else {
        return 'Loading/Error';
      }
    }}
  </Query>
  )
};

export default AccountPieChart;