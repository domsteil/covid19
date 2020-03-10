import Link from 'next/link';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import Heading from 'evergreen-ui/commonjs/typography/src/Heading'
import SearchInput from 'evergreen-ui/commonjs/search-input/src/SearchInput'
import InboxSearch from './InboxSearch';
import { Pane } from 'evergreen-ui/commonjs/layers';


export default () => 
<section>
    <div className="actions">
    <InboxSearch />
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
  color: inherit;
  line-height: 1.5;
  font-size: 1.5rem;
  letter-spacing: -0.029375rem;
  font-weight: 600;
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
        font-weight: 500;
        font-size: 12px;
        color: rgb(102, 102, 102);
        background-color: rgb(255, 255, 255);
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
      }
      
      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .row {
          flex-direction: column;
          margin: -1.5rem 0;
        }

        h1 {
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
          margin: 10px 0;
          font-size: 1.7em;
          font-weight: 200;
          margin-right: 30px;
          padding-left: 5px;
          color: #000;
          text-align: left;
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