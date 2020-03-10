import axios from 'axios';
import querystring from 'querystring';
import React, { useEffect, useState, useContext } from 'react';
import OrganizationContext from '../../components/OrganizationContext';
const { Parser } = require('json2csv');
const fs = require("fs");
const ObjectsToCsv = require('objects-to-csv');

export default (props) => {
  
    let axiosConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE",
            "Accept-Encoding": "gzip, deflate",
            "Content-Type": "application/json"
        }
      };
  
    axios.get("https://dapps.ngrok.io/api/covid/getCases", axiosConfig)
      .then(res => {
  
        console.log(res.data);
        const caseFields = [ "caseId", "caseName", "caseNumber", "summary", "location", "latitude", "longitude", "date", "caseStatus", "priority", "submitter", "processor"];
  
        // convert json to csv
        const json2csvParser = new Parser({ fields: caseFields });
        const csv = json2csvParser.parse(res.data);
  
        // console log 
        console.log(csv);
        
        // save updated csv and write to file dir
        const caseFile = new ObjectsToCsv(res.data);

        caseFile.toDisk('../covid19/data/cases/case-data.csv', { append: true })
        }
    )
};