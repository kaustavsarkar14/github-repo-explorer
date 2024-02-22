import axios from "axios";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { data } from "../dummy";
import SelectGraphType from "./SelectGraphType";

const CommitAcitivity = ({ repository }) => {
  const [commitData, setCommitData] = useState(data);
  const [graphType, setGraphType] = useState('c');
  useEffect(() => {
    // const res = axios
    //   .get(
    //     `https://api.github.com/repos/${repository.owner.login}/${repository.name}/stats/contributors`
    //   )
    //   .then((data) => setCommitData(data.data));
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
    series: commitData && commitData.length>0 && commitData.map((contributorData) => ({
        name: contributorData.author.login,
        type: "line",
        data: contributorData.weeks.map((week) => [week.w * 1000, week[graphType]]),
        showInLegend: true,
      })),
  };
  return (
    <div>
        <SelectGraphType graphType={graphType} setGraphType={setGraphType} />
      {commitData.length > 0 ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <p>No data available for Contributor Changes</p>
      )}
    </div>
  );
};

export default CommitAcitivity;
