import axios from "axios";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { data } from "../dummy";
import SelectGraphType from "./SelectGraphType";

const CommitAcitivity = ({ repository }) => {
  const [commitData, setCommitData] = useState([]);
  const [graphType, setGraphType] = useState("c");
  useEffect(() => {
    const res = axios
      .get(
        `https://api.github.com/repos/${repository.owner.login}/${repository.name}/stats/contributors`
      )
      .then((data) => setCommitData(data.data));
  }, []);
  const options: Highcharts.Options = {
    title: {
      text: "Contributor Changes",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Timestamp",
      },
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%Y-%m-%d", this.value);
        },
      },
    },
    yAxis: {
      title: {
        text: "Total Code Changes",
      },
    },
    series:
      commitData &&
      commitData.length > 0 &&
      commitData.map((contributorData) => ({
        name: contributorData.author.login,
        type: "line",
        data: contributorData.weeks.map((week) => [
          week.w * 1000,
          week[graphType],
        ]),
        showInLegend: true,
      })),
  };
  return (
    <div className="relative bg-white" >
        <div className="absolute right-6 z-10 md:mt-0 mt-10" >

      <SelectGraphType graphType={graphType} setGraphType={setGraphType} />
        </div>
      {commitData.length > 0 ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <p className="text-center my-2" >No data available for Contributor Changes</p>
      )}
    </div>
  );
};

export default CommitAcitivity;
