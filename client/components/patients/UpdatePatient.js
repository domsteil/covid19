import React from "react"
import gql from "graphql-tag";
import { withApollo } from "react-apollo";
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import Textarea from 'evergreen-ui/commonjs/textarea/src/Textarea'
import TextInputField from 'evergreen-ui/commonjs/text-input/src/TextInputField'
import toaster from 'evergreen-ui/commonjs/toaster/src'


class UpdatePatient extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
          message: '',
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          title: this.props.title,
          email: this.props.email,
          phone: this.props.phone,
          description: this.props.description
        }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.setState({
        loading: false,
        error: false,
        error_msg: ''
      });
    }

    async onFormSubmit(e) {
    e.preventDefault();

        this.setState({
            loading: true,
        });
        
    }
    

    updatePatient = event => {
        event.preventDefault();
        const id = this.props.id;
        const Patient = {
            firstName: this.state.firstName ? this.state.firstName : null,
            lastName: this.state.lastName ? this.state.lastName : null,
            title: this.state.title ? this.state.title : null,
            email: this.state.email ? this.state.email : null,
            phone: this.state.phone ? this.state.phone : null,
            description: this.state.description ? this.state.description : null
        };

        this.props.client
           .mutate({
               mutation: gql`
               mutation (
                $id: String
                $Patient: Patients_set_input!
              ) {
                update_Patients (
                where: { id : { _eq: $id }}
                _set: $Patient
                ) {
                  returning {
                    id
                    firstName
                    lastName
                    title
                    email
                    phone
                    description
                  }
                }
              }`,
            
            variables: { id, Patient }
           })
           .then(res => {
               console.log(res)
               this.setState({ message: 'Patient Updated.'})
           })
           .catch(err => {
               console.log(err);
           });
        event.currentTarget.reset();
    };
    


    render() {
        return (
        <form className="Patient-edit" onSubmit={this.updatePatient}>
        <div className="PatientInput">
        <br/>
        <br/>
        <input className="Patient" value={this.props.firstName ? this.state.firstName : null} onChange={e => this.setState({'firstName': e.target.value })} placeholder="First Name"  />
        <input className="Patient" value={this.props.lastName ? this.state.lastName : null} onChange={e => this.setState({'lastName': e.target.value })} placeholder="Last Name"  />
        <input className="Patient" value={this.state.title} onChange={e => this.setState({'title': e.target.value })} placeholder="Title" />
        <input className="Patient" value={this.state.phone} onChange={e => this.setState({'phone': e.target.value })} placeholder="Phone" />
        <input className="Patient" value={this.state.email} onChange={e => this.setState({'email': e.target.value })} placeholder="Email" />
        <br/>
        <br/>
        <Textarea className="Patient" value={this.state.description} onChange={e => this.setState({'description': e.target.value })} placeholder="Description" />
        <br/>
        <br/>
        <Button appearance="primary" intent="success" type="submit" onClick={() => toaster.success('Patient: ' + this.state.firstName + " " + this.state.lastName + ' has been updated ')
      }
      >Save</Button>
        </div>
        <style jsx>{`
      .column {
        text-align: left;
        border-width: 1px;
        list-style: none;
        padding-bottom: 8px;
        padding-top: 8px;
      }

      .login {
        color: #FFF;
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

export default withApollo(UpdatePatient);