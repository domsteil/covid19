import React from "react"
import gql from "graphql-tag";
import { withApollo } from "react-apollo";
import TextInput from 'evergreen-ui/commonjs/text-input/src/TextInput'
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import toaster from 'evergreen-ui/commonjs/toaster/src'


class AddCaseWithAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
          message: ''
        }
    }

    idRef = React.createRef();
    caseNameRef = React.createRef();
    caseNumberRef = React.createRef();
    descriptionRef = React.createRef();
    caseStatusRef = React.createRef();
    priorityRef = React.createRef();
    submitterRef = React.createRef();
    resolverRef = React.createRef();
    

    createCase = event => {
        event.preventDefault();
        const casex = {
            id: this.idRef.current.value,
            account_id: this.props.account_id,
            caseName: this.caseNameRef.current.value,
            caseNumber: this.caseNumberRef.current.value,
            description: this.descriptionRef.current.value,
            caseStatus: this.caseStatusRef.current.value,
            priority: this.priorityRef.current.value,
            submitter: this.submitterRef.current.value,
            resolver: this.resolverRef.current.value
        };

        this.state ={
            message: ''
          }

        this.props.client
           .mutate({
               mutation: gql`
               mutation addCase($casex: cases_insert_input!) {
                insert_cases(objects: [$casex]) {
                  returning {
                    id
                    account_id
                    caseName
                    caseNumber
                    description
                    caseStatus
                    priority
                    submitter
                    resolver
                }
              }
              }`,
            variables: { casex }
           })
           .then(res => {
               console.log(res)
               this.setState({ message: 'Case Created.'})
           })
           .catch(err => {
               console.log(err);
           });
        event.currentTarget.reset();
    };


    render() {
        return (
            <form className="case-edit" onSubmit={this.createCase}>
             <div className="caseInput">
        <input className="case" ref={this.idRef} placeholder="Case Id"  />
        <br/>
        <input className="case" ref={this.caseNameRef} placeholder="Case Name"  />
        <br/>
        <input className="case" ref={this.caseNumberRef} placeholder="Case Number"  />
        <br/>
        <input className="case" ref={this.descriptionRef} placeholder="Description"  />
        <br/>
        <input className="case" ref={this.caseStatusRef} placeholder="Status"  />
        <br/>
        <input className="case" ref={this.priorityRef} placeholder="Priority"  />
        <br/>
        <input className="case" ref={this.submitterRef} placeholder="Submitter"  />
        <br/>
        <input className="case" ref={this.resolverRef} placeholder="Resolver" />
        <br/>
        <br/>
        <Button className="policyButton" type="submit" onClick={() => toaster.success('Case ' + this.caseNameRef.current.value + ' has been created ')
      }
      >
      Create Case</Button>
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


      .case {
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

export default withApollo(AddCaseWithAccount);