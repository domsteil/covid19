import Link from 'next/link'
import * as routes from '../constants/routes';
import { auth } from '../firebase';
import { ICONS } from '../constants/icons';
import Avatar from 'evergreen-ui/commonjs/avatar/src/Avatar'
import Tab from 'evergreen-ui/commonjs/tabs/src/Tab'
import Button from 'evergreen-ui/commonjs/buttons/src/Button'
import Icon from 'evergreen-ui/commonjs/icon/src/Icon'
import { IconButton } from 'evergreen-ui/commonjs/buttons';
import UserContext from '../components/UserContext';
import UserInfo from './UserInfo';
import ContactComponent from './ContactComponent';
import TripleChat from './messages/TripleChat';

export default () => (
  <div className="headerItems">

    <br/>
    
    <Link href='/cases'>
    <Tab>Cases</Tab>
    </Link>

    <Link href='/patients'>
    <Tab>Patients</Tab>
    </Link>

    <Link href='/message'>
      <Tab>Message</Tab>
    </Link>

    <UserInfo />


    <style jsx>{`
      a {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 11px;
        margin-right: 30px;
        padding-right: 70px;
        margin-right: 8px;
        color: #999;
        text-transform: uppercase;
        text-decoration: none;
      }

      .signOut {
        -webkit-appearance: none;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: center;
        line-height: 0;
        white-space: nowrap;
        width: 100px;
        height: 30px;
        font-weight: 500;
        font-size: 12px;
        color: rgb(102, 102, 102);
        background-color: rgb(255, 255, 255);
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        padding: 0px 25px;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(234, 234, 234);
        border-image: initial;
        transition: all 0.2s ease 0s;
        overflow: hidden;
        outline: none;
    }

      .headerItems {
        padding-bottom: 50px;
        margin-bottom: 40px;
        padding-right: 200px;
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

        .list {
          overflow-y: scroll;
          overflow-x: hidden;
          position: left;
          border-radius: 5px;
          box-shadow: 0 8px 28px 0 rgba(86,91,115,.15);
          text-align: left;
          align: left;
          margin-left: -38px;
          padding-left: 28px;
          padding-right: 28px;
          background-color: #FFFFFF;
          width: 390px;
          height: 500px;
        }

        .headerItems {
          display: none;
        }

    `}</style>
  </div>

)
