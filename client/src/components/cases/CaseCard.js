import Container from '../container'
import CaseDetails from './CaseDetails';
import CaseHeader from './CaseHeader';
import CaseQL from './CaseQL';
import CaseList from './CaseList';


export default () =>
<Container center>
<section>
    <div className="caseCard">
    <CaseList />
      </div>
    <style jsx>{`

      .caseCard {
        overflow-y: scroll;
        overflow-x: hidden;
        background: #FFFFFF;
        margin-top: -100px;
        margin-left: -45px;
        margin-right: 28px;
        border-radius: 5px;
        background-color: #FFFFFF;
        box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(236, 239, 241);
        border-image: initial;
        border-radius: 4px;
        border-image: initial;
        width: 1100px;
        height: 400px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0,0,0,0.1);
      border: 1px solid #ccc;
    }
    
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: linear-gradient(left, #fff, #e4e4e4);
      border: 1px solid #aaa;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #fff;
    }
    
    ::-webkit-scrollbar-thumb:active {
      background: linear-gradient(left, #22ADD4, #1E98BA);
    }

    ::-webkit-scrollbar {
      width: 12px;
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
    </Container>