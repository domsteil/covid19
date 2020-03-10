import React, { useState, useEffect, useContext } from 'react';
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import TextInputField from 'evergreen-ui/commonjs/text-input/src/TextInputField'

export default function PatientForm(props) {
    const firstName = useFormInput('Dominic');
    const lastName = useFormInput('Steil');
    const email = useFormInput('dominic@dapps-inc.com');
    const phone = useFormInput('212-549-1940');
    const controller = useFormInput('Dapps Inc.');
    const processor = useFormInput('Dapps Inc.');



    handleSubmit = event => {
      event.preventDefault();
  
      let axiosConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE"
        }
      };
  
      axios.post(`https:/localhost:10050/createPatient`, querystring.stringify({ firstName: firstName, lastName: lastName, email: email, phone: phone, controller: controller, processor: processor}),  axiosConfig)
      .then(res => {
  
        const PatientData = res.data;
        this.setState({ PatientData });
        console.log(res.data);
      })
  }

    useEffect(() => {
        document.title = firstName + ' ' + lastName;
    });

return (
    <section>
    <div className="row">
        <div className="column">
        <form onSubmit={this.handleSubmit}>
        <TextInputField className="Patient" {...firstName} />
        <TextInputField className="Patient" {...lastName} />
        <TextInputField className="Patient" {...email} />
        <TextInputField className="Patient" {...phone} />
        <TextInputField className="Patient" {...controller} />
        <TextInputField className="Patient" {...processor} />
        <br/>
        <button className="policyButton" type="submit">Create Patient</button>
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

      .login {
        color: #FFF;
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

        
      }
    `}</style>
    </section>
  );
}


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

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    });
}