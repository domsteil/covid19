import React from 'react';
import { gql, graphql } from 'react-apollo';

const firstName = useFormInput('Dominic');
const lastName = useFormInput('Steil');
const email = useFormInput('dominic@dapps-inc.com');
const phone = useFormInput('212-549-1940');
const controller = useFormInput('Dapps Inc.');
const processor = useFormInput('Dapps Inc.');

const AddPatient = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({ 
        variables: { name: evt.target.value }
      })
      .then( res => {
        evt.target.value = '';  
      });
    }
  };

  const updateCache = (cache, {data}) => {
    // If this is for the public feed, do nothing
    if (isPublic) {
      return null;
    }
    // Fetch the Patients from the cache
    const existingPatients = cache.readQuery({
      query: GET_MY_PatientS
    });
    // Add the new Patient to the cache
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
    <form className="formInput" onSubmit={(e) => {
        e.preventDefault();
        addPatient({variables: {Patient: PatientInput, isPublic }});
      }}>
        <br/>
        <input className="Patient" {...firstName} />
        <br/>
        <input className="Patient" {...lastName} />
        <br/>
        <input className="Patient" {...email} />
        <br/>
        <input className="Patient" {...phone} />
        <br/>
        <input className="Patient" {...controller} />
        <br/>
        <input className="Patient" {...processor} />
        <br/>
    </form>
  );
};


const addPatientMutation = gql`
mutation addPatient($Patient: Patients_insert_input!) {
    insert_Patients(objects: [$Patient]) {
      returning {
        id
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




const AddPatientWithMutation = graphql(
  addPatientMutation
)(AddPatient);
export default AddPatientWithMutation;


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
