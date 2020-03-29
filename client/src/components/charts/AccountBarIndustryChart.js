import React, { Component, Fragment } from "react";
import graphql2chartjs from 'graphql2chartjs';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import { Pane } from 'evergreen-ui/commonjs/layers';
import { Spinner } from 'evergreen-ui';

 export default class AccountIndustryBarChart extends React.Component {

    state = {
        inClient: false
      };
    
      componentDidMount() {
        this.setState({ inClient: true });
      }
      
    render() {

    let g2c = new graphql2chartjs(data, 'bar');
    if (this.state.inClient) {
    <Query query={gql`
      query {
          accounts {
              label: accountName
              data: industry
              }
          }`}/>
        var Chart = require( 'react-chartjs-2' );
        graph = <Chart.Bar data={g2c.data} />;
        } else {
        graph = <div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
        <Spinner size={28} marginX="auto" marginY={120}  />
          </Pane></div>;
          }
        }
      }
    ;