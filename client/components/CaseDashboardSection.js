import DashboardProfileCard from './profile/DashboardProfileCard';
import CaseCard from './cases/CaseCard';
import RecentActivityCard from '../components/RecentActivityCard';
import AddCaseForm from './cases/AddCaseForm';
import MobileCaseCard from './cases/MobileCaseCard';
import MessageSection from '../components/MessageSection';
import Sidebar from '../components/Sidebar';
import CaseHeader from './cases/CaseHeader';
import CaseHighlight from './cases/CaseHighlight';
import CaseGraph from './cases/CaseGraph';
import CaseSegment from './cases/CaseSegment';
import Textbox from './messages/Textbox';
import ChatWrapper from './messages/ChatWrapper';

export default () =>
<section>
<div className="row">
    <div className="sidebarColumn">
    <br/>
    <Sidebar />
    </div>
    <div className="column">
    <br/>
    <br/>
    <CaseHeader />
    <div className="row">
    <CaseHighlight />
    <CaseGraph />
    <CaseSegment />
    </div>
    <CaseCard />
    <br/>
    <Textbox />
    </div>
    <div className="mobileColumn">
    <MobileCaseCard />
    </div>
    <div className="farColumn">
      <ChatWrapper />
    </div>
      </div>
      <style jsx>{`
      .column {
        text-align: left;
        margin-top: -100px;
      }

      .sidebarColumn {
        margin-left: 8%;
      }

      .vertical {
        align-left: 30px;
        height: 1200px;
      }

      .mobileColumn {
        display: none;
      }

      .farColumn {
        margin-right: 33%;
      }

     .col-left {
        box-sizing: border-box;
        min-height: 100%;
        background: #233659;
        background: linear-gradient(135deg,#565b73,#233659);
        padding: 25px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
     }

      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .mobileColumn {
          height: 1200px;
          width: 280px;
          display: inline;
  
          }
          .row {
            margin: -1.5rem 0;
          }
          
          .column {
            display: none;
          }

          .farColumn {
            display: none;
          }

          .sidebarColumn {
            display: none;
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