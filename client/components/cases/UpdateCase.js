import React from "react"
import gql from "graphql-tag";
import { withApollo } from "react-apollo";
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import TextInputField from 'evergreen-ui/commonjs/text-input/src/TextInputField'
import toaster from 'evergreen-ui/commonjs/toaster/src'


class UpdateCase extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
          message: '',
          caseName: this.props.caseName,
          caseNumber: this.props.caseNumber,
          caseStatus: this.props.caseStatus,
          description: this.props.description,
          priority: this.props.priority,
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
    

    updateCase = event => {
        event.preventDefault();
        const id = this.props.id;
        const casex = {
            caseName: this.state.caseName ? this.state.caseName : null,
            caseNumber: this.state.caseNumber ? this.state.caseNumber : null,
            caseStatus: this.state.caseStatus ? this.state.caseStatus : null,
            description: this.state.description ? this.state.description : null,
            priority: this.state.priority ? this.state.priority : null,
        };

        this.props.client
           .mutate({
               mutation: gql`
               mutation (
                $id: String
                $casex: cases_set_input!
              ) {
                update_cases (
                where: { id : { _eq: $id }}
                _set: $casex
                ) {
                  returning {
                      id
                      caseName
                      caseNumber
                      caseStatus
                      description
                      priority
                      resolver
                      submitter
                  }
                }
              }`,
            
            variables: { id, casex }
           })
           .then(res => {
               console.log(res)
               this.setState({ message: 'Case Updated.'})
           })
           .catch(err => {
               console.log(err);
           });
        event.currentTarget.reset();
    };
    


    render() {
        return (
        <form className="case-edit" onSubmit={this.updateCase}>
        <div className="caseInput">
        <br/>
        <br/>
        <input className="case" value={this.props.caseName ? this.state.caseName : null} onChange={e => this.setState({'caseName': e.target.value })} placeholder="Case Name"  />
        <input className="case" value={this.props.caseNumber ? this.state.caseNumber : null} onChange={e => this.setState({'caseNumber': e.target.value })} placeholder="Case Number"  />
        <input className="case" value={this.props.caseStatus ? this.state.caseStatus : null} onChange={e => this.setState({'caseStatus': e.target.value })} placeholder="Case Status"  />
        <input className="case" value={this.state.description} onChange={e => this.setState({'description': e.target.value })} placeholder="Description" />
        <input className="case" value={this.state.priority} onChange={e => this.setState({'priority': e.target.value })} placeholder="Priority" />
        <br/>
        <br/>
        <Button appearance="primary" intent="success" type="submit" onClick={() => toaster.success('Case: ' + this.state.caseNumber + ' has been updated ')
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


      .case {
        font-size: 13px;
        line-height: 1.91667;
        font-weight: 400;
        color: #3d464d;
        border: 1px solid #bdc4c9;
        padding: 3.5px 7px;
        border-radius: 4px;
        margin: 8px;
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

export default withApollo(UpdateCase);