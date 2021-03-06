//  Datasets: https://github.com/nytimes/covid-19-data/
//  Controler for initializing Charts
import init from "./data.js";
import LineChart from "./LineChart/line_chart.js";

const main = async () => {
  // Hacktober Fest Issue: create a cool loader for when data is getting pulled in
  // Get all data
  const data = await init();
  console.log("Initialized data sets", Object.keys(data));

  LineChart(data);
};

main();
