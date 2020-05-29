import React from "react";
// import Plot from "react-plotly.js";
// import { vis } from "../../data";

class Visualization extends React.Component {
  state = {
    // curData: [
    //   {
    //     type: "sunburst",
    //     maxdepth: 2,
    //     ids: vis.ids,
    //     labels: vis.labels,
    //     parents: vis.parent,
    //     marker: {
    //       colors: vis.labels.map((x) => {
    //         return this.props.flavors.includes(x) ||
    //           this.props.effects.includes(x)
    //           ? "#7BAA47"
    //           : "whitesmoke";
    //       }),
    //     },
    //     textposition: "inside",
    //     insidetextorientation: "radial",
    //   },
    // ],
  };
  render() {
    return (
      <div>visualization goes here</div>
      // <Plot data={this.state.curData} layout={{ margin: { l: 0, r: 0, b: 0, t: 0 } }} />
    );
  }
}

export default Visualization;
