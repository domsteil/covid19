import React from "react"
import gql from "graphql-tag";
import { withApollo } from "react-apollo";
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import toaster from 'evergreen-ui/commonjs/toaster/src'

class AddPatientForm extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
          message: ''
        }
    }

    idRef = React.createRef();
    firstNameRef = React.createRef();
    lastNameRef = React.createRef();
    titleRef = React.createRef();
    phoneRef = React.createRef();
    emailRef = React.createRef();
    controllerRef = React.createRef();
    processorRef = React.createRef();

    createPatient = event => {
        event.preventDefault();
        const Patient = {
            id: this.idRef.current.value,
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            title: this.titleRef.current.value,
            phone: this.phoneRef.current.value,
            email: this.emailRef.current.value,
            controller: this.controllerRef.current.value,
            processor: this.processorRef.current.value
        };

        this.state ={
            message: ''
          }

        this.props.client
           .mutate({
               mutation: gql`
               mutation addPatient($Patient: Patients_insert_input!) {
                insert_Patients(objects: [$Patient]) {
                  returning {
                    id
                    firstName
                    lastName
                    phone
                    title
                    email
                    controller
                    processor
                }
              }
              }`,
            variables: { Patient }
           })
           .then(res => {
               console.log(res)
               this.setState({ message: 'Patient Created.'})
           })
           .catch(err => {
               console.log(err);
           });
        event.currentTarget.reset();
    };


    render() {
        return (
            <form className="Patient-edit" onSubmit={this.createPatient}>
             <div className="PatientInput">
        <input className="Patient" ref={this.idRef} placeholder="Patient Id"  />
        <br/>
        <input className="Patient" ref={this.firstNameRef} placeholder="First Name"  />
        <br/>
        <input className="Patient" ref={this.lastNameRef} placeholder="Last Name"  />
        <br/>
        <input className="Patient" ref={this.titleRef} placeholder="Title"  />
        <br/>
        <input className="Patient" ref={this.phoneRef} placeholder="Phone"  />
        <br/>
        <input className="Patient" ref={this.emailRef} placeholder="Email"  />
        <br/>
        <input className="Patient" ref={this.controllerRef} placeholder="Controller"  />
        <br/>
        <input className="Patient" ref={this.processorRef} placeholder="Processor" />
        <br/>
        <br/>
        <Button type="submit" appearance="primary" intent="success" onClick={() => toaster.success('Patient ' + this.firstNameRef.current.value + ' ' + this.lastNameRef.current.value + ' has been created ')
      }
      >
        Create Patient</Button>
        <br/>
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

      .successMessage {
        font-color: #50E3C2;
        color: #50E3C2;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        margin: 10px 0;
        font-size: 16px;
        font-weight: normal;
        margin-right: 30px;
        padding-left: 5px;
        text-align: center;
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
        width: 140px;
        height: 30px;
        margin-left: 85px;
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
        width: 280px;
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
        );
    }
}

export default withApollo(AddPatientForm);