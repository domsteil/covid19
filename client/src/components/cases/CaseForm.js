import React, { useState, useContext, useEffect } from 'react';
import useFormInput from '../useFormInput';
import axios from 'axios';
import Text from 'evergreen-ui/commonjs/typography/src/Text'
import Button from 'evergreen-ui/commonjs/buttons/src/Button';
import Card from 'evergreen-ui/commonjs/layers/src/Card';
import OrganizationContext from '../OrganizationContext';
import toaster from 'evergreen-ui/commonjs/toaster/src'
import querystring from 'querystring';

export default function CaseForm(props) {

    const caseId = useFormInput('');
    const caseNumber = useFormInput('');
    const summary = useFormInput('');
    const location = useFormInput('');
    const country = useFormInput('');
    const latitude = useFormInput('');
    const longitude = useFormInput('');
    const date = useFormInput('');
    const caseName = useFormInput('');
    const caseStatus = useFormInput('');
    const casePriority = useFormInput('');
    const resolver = useFormInput('');

    let createCase = () => {
  
      let axiosConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
        }
      };
  
      axios.post(`https://stateset.network/api/stateset/createCase?`, 
      querystring.stringify({ 
        caseId: caseId, 
        caseName: caseName,
        caseNumber: caseNumber,
        summary: summary,
        country: country,
        location: location,
        latitude: latitude,
        longitude: longitude,
        date: date, 
        caseStatus: caseStatus,
        casePriority: casePriority, 
        resolver: resolver }),  axiosConfig)
      .then(res => {

        const caseId = res.data.caseId;
  
        toaster.success(
          'Case ' + caseId + ' has been created.')
        })
        .catch(error => {
          toaster.danger(res.data)
      });
    }

return (
    <section>
    <Card elevation={1} background="white" >
    <div className="row">
        <div className="column">
        <form onSubmit={createCase}>
        <Text size={700}>Case Id</Text>
        <input className="case" {...caseId} />
        <br/>
        <Text>Case Name</Text>
        <input className="case" {...caseName} />
        <br/>
        <Text>Description</Text>
        <input className="case" {...summary} />
        <br/>
        <Text>Country</Text>
        <input className="case" {...country} />
        <br/>
        <Text>Latitude</Text>
        <input className="case" {...latitude} />
        <br/>
        <Text>Longitude</Text>
        <input className="case" {...longitude} />
        <br/>
        <Text>Date</Text>
        <input className="case" {...date} />
        <br/>
        <Text>Case Number</Text>
        <input className="case" {...caseNumber} />
        <br/>
        <Text>Case Status</Text>
        <input className="case" {...caseStatus} />
        <br/>
        <Text>Case Priority</Text>
        <input className="case" {...casePriority} />
        <br/>
        <br/>
        <Button appearance="primary" type="submit" invert>Submit New Case</Button>
        <br/>
        <br/>
        </form>
        </div>
        
    </div>
        <style jsx>{`
      .column {
        text-align: left;
        border-width: 1px;
        list-style: none;
        padding-bottom: 8px;
        padding-top: 8px;
        margin-right: 28px;
      }

      .button {
        -webkit-appearance: none;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: center;
        line-height: 0;
        white-space: nowrap;
        width: 120px;
        height: 30px;
        margin-left: 8px;
        font-weight: 500;
        font-size: 12px;
        color: rgb(102, 102, 102);
        background-color: rgb(255, 255, 255);
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 10px;
        margin-bottom: 2px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
      }

      .login {
        color: #FFF;
      }

      h2 {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        margin: 10px 0;
        font-size: 24px;
        font-weight: normal;
        margin-right: 30px;
        padding-left: 5px;
        color: #FFF;
        text-align: center;
      }

      h3 {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        margin: 10px 0;
        font-size: 17px;
        font-weight: normal;
        margin-right: 30px;
        padding-left: 5px;
        color: #FFF;
        text-align: center;
      }


      .case {
        font-size: 13px;
        line-height: 1.91667;
        font-weight: 400;
        color: #3d464d;
        border: 1px solid #bdc4c9;
        padding: 3.5px 7px;
        border-radius: 4px;
        margin-top: 28px;
        margin-left: 8px;
      }

      .row {
        flex-direction: column;
        margin: -1.5rem 0;
        text-align: center;
      }

      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .row {
          flex-direction: column;
          margin: -1.5rem 0;
        }
        .column {
          width: 100%;
          padding: 1.5rem 0;
          text-align: center;
          max-width: 330px;
        }

        h2 {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            margin: 10px 0;
            font-size: 24px;
            font-weight: normal;
            margin-right: 30px;
            padding-left: 5px;
            color: #FFF;
            text-align: center;
          }

        
      }
    `}</style>
      </Card>
    </section>
  );
}