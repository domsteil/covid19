import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import graphql2chartjs from 'graphql2chartjs';
import {Bar} from 'react-chartjs-2';
import { Spinner } from 'evergreen-ui';
import { Pane } from 'evergreen-ui/commonjs/layers';

const GET_MY_PRODUCT_CHART_DATA = gql`
query {
    ProductsByInventory: products(first: 20) {
        label: edges {
                    node {
                        title
                    }
        }
        data: edges {
                    node    {
                        totalInventory
                    }
        }
      }
    }
`;

      const chartOptions = {
        layout: { 
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        },
        legend: { display: true }
  };

const ProductInventoryBarChart = () => {
  return (
  <Query query={GET_MY_PRODUCT_CHART_DATA} pollInterval={500}>
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
          chartType: 'bar',
          backgroundColor: '#27BB75'
        };
      });

        return <Bar data={g2c.data} client={client} height={180} width={200} options={chartOptions} />;
      } else {
        return 'Loading/Error';
      }
    }}
  </Query>
  )
};

export default ProductInventoryBarChart;