import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { CustomSegmentLabelPosition } from "react-d3-speedometer";

const sections = [
  {
    text: "Very Negative",
  },
  {
    text: "Negative",
  },
  {
    text: "Neutral",
  },
  {
    text: "Positive",
  },
  {
    text: "Very Positive",
  },
];

const Chart = ({ NoofSegments, stntiment }) => {
  let value;
  switch (stntiment) {
    case "Neutral":
      value = 500;
      break;
    case "Negative":
      value = 300;
      break;
    case "Positive":
      value = 700;
      break;
    default:
      value = 500;
  }

  return (
    <>
      <div className="chart-hldr w-1">
        <h2 className="title1">Customer Delight</h2>
        <center>
          <ReactSpeedometer
            segments={NoofSegments}
            width={400}
            needleHeightRatio={0.7}
            value={value}
            maxSegmentLabels={NoofSegments}
            segmentColors={[
              "#EE6B6B",
              "#FF9E1C",
              "#64BDFD",
              "#009AFF",
              "#86CF6E",
            ]}
            currentValueText=" "
            customSegmentLabels={sections?.map((section) => {
              return {
                text: section?.text,
                position: CustomSegmentLabelPosition.Inside,
                color: "white",
                fontSize: "8px",
              };
            })}
            ringWidth={60}
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            needleColor={"#000000"}
            textColor={"#d8dee9"}
          />
        </center>
      </div>
    </>
  );
};
export default Chart;
