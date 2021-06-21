import * as echarts from "echarts";
import { CSSProperties, useRef } from "react";

const lineChart = (lineChartOption: any, el: HTMLDivElement | null) => {
  if (!el) return;
  const myChart = echarts.init(el);
  myChart.setOption(lineChartOption);
};

interface LineChartProps {
  lineChartOption: any;
  style?: CSSProperties;
}

function LineChart(props: LineChartProps) {
  const { lineChartOption, style } = props;
  const chartRef = useRef<HTMLDivElement>(null);

  lineChart(lineChartOption, chartRef.current);

  return (
    <div
      style={{
        width: style?.width || 600,
        height: style?.height || 400,
        ...style,
      }}
      ref={chartRef}
    ></div>
  );
}

export default LineChart;
