import MinHeader from './MinHeader';

export default () => 
<section>
    <div className="horizontalCard">
    <MinHeader />
    <div className="tabs"></div>
    <div className="actionGroup">
    </div>
      </div>
    <style jsx>{`

      .vertical {
        align-left: 30px;
        height: 1200px;
      }

      .actionGroup {
        align: right;
      }

      .horizontalCard {
        position: right;
        text-align: right;
        width: 100%;
        height: 60px;
        margin-top: -5px;
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

        .horizontalCard {
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