import axios from "axios";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { CircularProgress } from "@mui/material";

const TotalChanges = ({ repository }) => {
  const [codeFrequencyData, setCodeFrequencyData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const res = axios
      .get(
        `https://api.github.com/repos/${repository.owner.login}/${repository.name}/stats/code_frequency`
      )
      .then((data) => setCodeFrequencyData(data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  const options: Highcharts.Options = {
    title: {
      text: "Total Changes",
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
    series: [
      {
        name: "Total Change",
        type: "line",
        data:
          codeFrequencyData.length > 0 &&
          codeFrequencyData.map((data) => [data[0] * 1000, data[1] + data[2]]),
      },
    ],
  };
  if (loading)
  return (
    <div className="w-full h-20 flex justify-center items-center" >
      <CircularProgress />
    </div>
  );
  return (
    <div>
      {codeFrequencyData.length > 0 ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <p className="text-center my-2">No data available for Total Changes</p>
      )}
    </div>
  );
};

export default TotalChanges;
