import LineChart from "./components/LineChart/LineChart";
import histNetWorth from "./python/static/161725.json";

const histNetWorthData = histNetWorth.reverse();
const lineChartOption = {
  title: {
    text: "基金历史净值图",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["单位净值", "累计净值", "日增长率"],
    selected: {
      单位净值: true,
      累计净值: true,
      日增长率: false,
    },
  },
  xAxis: {
    type: "category",
    data: histNetWorthData.map((histData) => histData.FSRQ),
  },
  yAxis: {
    type: "value",
  },
  dataZoom: [
    {
      type: "inside",
      start: 70,
      end: 100,
      minValueSpan: 10,
    },
    {
      show: true,
      type: "slider",
      bottom: 60,
      start: 98,
      end: 100,
      minValueSpan: 10,
    },
  ],
  series: [
    {
      name: "单位净值",
      data: histNetWorthData.map((histData) => histData.DWJZ),
      type: "line",
      smooth: true,
    },
    {
      name: "累计净值",
      data: histNetWorthData.map((histData) => histData.LJJZ),
      type: "line",
      smooth: true,
    },
    {
      name: "日增长率",
      data: histNetWorthData.map((histData) => histData.JZZZL),
      type: "line",
      smooth: true,
      clip: false,
    },
  ],
};

function App() {
  return (
    <LineChart
      lineChartOption={lineChartOption}
      style={{
        width: 1200,
        height: 800,
      }}
    />
  );
}

export default App;
