import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import Popover from 'evergreen-ui/commonjs/popover/src/Popover'
import CaseForm from './CaseForm';
import Component from "@reach/component-component";
import Dialog from 'evergreen-ui/commonjs/dialog/src/Dialog'
import TextInput from 'evergreen-ui/commonjs/text-input/src/TextInput'
import SearchInput from 'evergreen-ui/commonjs/search-input/src/SearchInput'
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import Select from 'evergreen-ui/commonjs/select/src/Select'
import CloseCase from './CloseCase';
import EscalateCase from './EscalateCase';
import ResolveCase from './ResolveCase';
import ExportCases from './ExportCases';


export default () => 
<section>
  <div className="actions">
  <Pane display="flex" padding={16} background="#F4F6F8" borderRadius={3}>
  <Pane flex={1} alignItems="center" display="flex">
    <Heading size={800}>My Cases</Heading>
  </Pane>
    <Popover
  content={({ close }) => (
    <Pane
      width={340}
      height={700}
      paddingX={40}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <CaseForm />
    </Pane>
  )}
>
  <Button appearance="primary" marginRight={16}>Create Case</Button>
</Popover>
<CloseCase />
<EscalateCase />
<ResolveCase/>
<ExportCases />
</Pane>
    </div>
    <style jsx>{`

h1 {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  margin: 10px 0;
  font-size: 2em;
  font-weight: 200;
  margin-right: 30px;
  padding-left: 5px;
  color: #000;
  text-align: left;
  font-family: var(--font-sans);
  line-height: 1.5;
  font-size: 1.5rem;
  letter-spacing: -0.029375rem;
  font-weight: 600;
}

      .caseButton {
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
        font-weight: 500;
        font-size: 12px;
        color: rgb(102, 102, 102);
        background-color: rgb(255, 255, 255);
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 25px;
        margin-top: -45px;
        margin-bottom: 50px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
    }

      .actions {
        align: right;
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

        .actions {
          align: right;
        }

        
.archetype-form__container {
    background: 0 0;
    color: #0d112b;
    width: 100%;
    margin: 0 auto;
    text-align: left;
}
      }
    `}</style>
    </section>