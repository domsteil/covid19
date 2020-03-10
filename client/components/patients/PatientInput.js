import React from 'react';
import gql from 'graphql-tag';

const ADD_Patient = gql `
  mutation ($Patient: String!) {
    insert_Patients(objects: {title: $Patient}) {
      affected_rows
      returning {
        firstName
        lastName
        phone
        email
        controller
        processor
      }
    }
  }
 `;


const PatientInput = ({isPublic = false}) => {

    const firstName = useFormInput('Dominic');
    const lastName = useFormInput('Steil');
    const email = useFormInput('dominic@dapps-inc.com');
    const phone = useFormInput('212-549-1940');
    const controller = useFormInput('Dapps Inc.');
    const processor = useFormInput('Dapps Inc.');

    const updateCache = (cache, {data}) => {
        // If this is for the public feed, do nothing
        if (isPublic) {
          return null;
        }
        // Fetch the todos from the cache
        const existingPatients = cache.readQuery({
          query: GET_MY_PatientS
        });
        // Add the new todo to the cache
        const newPatient = data.insert_Patients.returning[0];
        cache.writeQuery({
          query: GET_MY_PatientS,
          data: {Patients: [newPatient, ...existingPatients.Patients]}
        });
      };

      const resetInput = () => {
        setPatientInput('');
        input.focus();
      };

  return (
    <Mutation mutation={ADD_Patient} update={updateCache} onCompleted={resetInput}>
    {(addPatient, { loading, data}) => {
        return (
    <form className="formInput" onSubmit={(e) => {
      e.preventDefault();
      addPatient({variables: {Patient: PatientInput, isPublic }});
    }}>
      <input className="Patient" {...firstName} />
        <br/>
        <input className="Patient" {...lastName} />
        <br/>
        <input className="Patient" {...phone} />
        <br/>
        <input className="Patient" {...email} />
        <br/>
        <input className="Patient" {...controller} />
        <br/>
        <input className="Patient" {...processor} />
        <style jsx>{`

      .column {
        text-align: left;
        border-width: 1px;
        list-style: none;
        padding-bottom: 8px;
        padding-top: 8px;
        margin-right: 28px;
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

      .policyButton {
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


      .Patient {
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
    </form>
    )
}}
    </Mutation>
  );
};

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    };
}


export default PatientInput;