import FeedbackTable from "./FeedbackTable";
import History from "./History";
import ReportTable from "./ReportTable";
import StatsCards from "./StatsCards";
import TopDormitory from "./TopDormitory";

const Overview = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Student Management: Overview</h1>
      <StatsCards />
      <ReportTable />
      <TopDormitory />
      <FeedbackTable />
      <History />
    </div>
  );
};

export default Overview;
