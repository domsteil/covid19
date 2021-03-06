import Container from '../container'
import MobilePatientQL from './MobilePatientQL'


export default () =>
<Container center>
<section>
    <div >
    <MobilePatientQL />
      </div>
    <style jsx>{`


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

        .accountCard {
          overflow-y: scroll;
          overflow-x: scroll;
          background-color: #FFFFFF;
          box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
          flex: 1 1 auto;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(236, 239, 241);
          border-image: initial;
          border-radius: 4px;
          border-image: initial;
          position: left;
          margin-bottom: 50px;
          margin-top: 50px;
          margin-left: -40px;
          text-align: center;
          width: 400px;
          height: 280px;
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