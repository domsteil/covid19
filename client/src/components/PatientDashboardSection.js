import DashboardProfileCard from './profile/DashboardProfileCard';
import PatientCard from './pontacts/PatientCard';
import RecentActivityCard from '../components/RecentActivityCard';
import AddPatientForm from './Patients/AddPatientForm';
import MobilePatientCard from './patients/MobilePatientCard';
import MessageSection from '../components/MessageSection';
import Sidebar from '../components/Sidebar';
import PatientHeader from './patients/PatientHeader';
import PatientHighlight from './patients/PatientHighlight';
import PatientGraph from './patients/PatientGraph';
import patientsegment from './patients/PatientSegment';
import Textbox from './messages/Textbox';
import ChatWrapper from './messages/ChatWrapper';

export default () =>
<section>
<div className="row">
    <div className="sidebarColumn">
    <br/>
    <br/>
    <Sidebar />
    </div>
    <div className="column">
    <br/>
    <PatientHeader />
    <div className="row">
    <PatientHighlight />
    <PatientGraph />
    <PatientSegment />
    </div>
    <PatientCard />
    <br/>
    <Textbox />
    </div>
    <div className="mobileColumn">
    <MobilePatientCard />
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

          .sidebarColumn {
            display: none;
          }

          .farColumn {
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