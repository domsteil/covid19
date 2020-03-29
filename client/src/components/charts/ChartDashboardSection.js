import ChartCard from './ChartCard';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import ScatterChart from './ScatterChart';
import DonutChart from './DonutChart';

export default () =>
<section>
<div className="row">
    <div className="column">
    <ChartCard />
    </div>
    <div className="column">
    <BarChart />
    </div>
    <div className="column">
    <ChartCard />
    </div>
      </div>
    <div className="row">
    <div className="column">
        <AreaChart />
    </div>
    <div className="column">
        <DonutChart />
    </div>
    <div className="column">
        <ScatterChart />
    </div>
      </div>
    <style jsx>{`
      .column {
        text-align: left
        padding-top: 100px;
      }

      .mobileColumn {
        display: none;
      }

      .vertical {
        align-left: 30px;
        height: 1200px;
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