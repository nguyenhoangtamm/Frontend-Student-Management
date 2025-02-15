import Card from "./Card";
import FeedbackTable from "./FeedbackTable";
import History from "./History";
import OverviewStats from "./OverviewStats";
import ReportTable from "./ReportTable";
import TopDormitory from "./TopDormitory";

const Overview = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Student Management: Overview</h1>
      <OverviewStats totalStudents={15000} totalHostels={43498} />
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card title="Chưa khai báo ngoại trú" value={15000} percentage={22.8} />
        <Card title="Tổng số nhà trọ đã duyệt" value={43498} percentage={11.8}/>
        <Card title="Số sinh viên chưa khai báo" value={87} percentage={11.8} />
      </div>
      <ReportTable />
      <TopDormitory />
      <FeedbackTable />
      <History />
    </div>
  );
};

export default Overview;
