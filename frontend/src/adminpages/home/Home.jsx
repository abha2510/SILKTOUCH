import Chart from "../../admincomponents/chart/Chart";
import FeaturedInfo from "../../admincomponents/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../admincomponents/widgetSm/WidgetSm";
import WidgetLg from "../../admincomponents/widgetLg/WidgetLg";
import Sidebar from "../../admincomponents/sidebar/Sidebar";
import Topbar from "../../admincomponents/topbar/Topbar";

export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <Sidebar />
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}