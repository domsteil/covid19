import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import graphql2chartjs from 'graphql2chartjs';
import {Bar} from 'react-chartjs-2';
import { Spinner } from 'evergreen-ui';
import { Pane } from 'evergreen-ui/commonjs/layers';

const GET_MY_CONTACT_CHART_DATA = gql`
      query {
        ContactsByTitle: contacts {
            label: title
            data: title
          }
      }`;

      const chartOptions = {
        layout: { padding: { top: 0, bottom: 0, left: 0, right: 0 }, 
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        },
        maintainAspectRatio: false,
        legend: { display: true },
        title: {
          display: true,
          text: 'Contacts by Title',
          padding: 8,
          lineHeight: 4,
          fontSize: 12,
          fontColor: '#234361'
      },
      animation: {
        easing: 'easeInOutQuad'
      }
  };

const ContactBarChart = () => {
  return (
  <Query query={GET_MY_CONTACT_CHART_DATA} pollInterval={500}>
    {({ loading, error, data, client }) => {
    if (loading) {
            return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
            <Spinner size={28} marginX="auto" marginY={120}  />
        </Pane></div>);
       }
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;
    
    if (data) {
        const g2c = new graphql2chartjs(data, 'bar');

        return <Bar data={g2c.data} client={client} height={180} width={200} />;
      } else {
        return 'Loading/Error';
      }
    }}
  </Query>
  )
};

export default ContactBarChart;