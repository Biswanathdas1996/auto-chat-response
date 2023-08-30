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

const customSegmentLabels = sections?.map((section) => {
  return {
    text: section?.text,
    position: CustomSegmentLabelPosition.Inside,
    color: "white",
    fontSize: "8px",
  };
});
const Chart = ({ NoofSegments, value }) => {
  return (
    <>
      <div className="chart-hldr w-1">
        <h2 className="title1">Customer Intent</h2>
        <center>
          <ReactSpeedometer
            width={300}
            needleHeightRatio={0.7}
            value={value}
            customSegmentStops={[0, 250, 750, 1000]}
            segmentColors={["#FF9E1C", "#64BDFD", "#3ACEBE"]}
            currentValueText=" "
            customSegmentLabels={[
              {
                text: "Complaint",
                position: "INSIDE",
                color: "#000",
                fontSize: "9px",
              },
              {
                text: "Query",
                position: "INSIDE",
                color: "#000",
                fontSize: "9px",
              },
              {
                text: "Purchase",
                position: "INSIDE",
                color: "#000",
                fontSize: "9px",
              },
            ]}
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

// ---------------------------------------------------
// START: Stories
// ------------------------------
