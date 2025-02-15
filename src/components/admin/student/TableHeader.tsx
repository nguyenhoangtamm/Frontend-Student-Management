const TableHeader: React.FC = () => {
    return (
      <thead>
        <tr className="bg-gray-100 text-left">
          <th><input type="checkbox" /></th>
          <th>Account Status</th>
          <th>Họ Tên</th>
          <th>MSSV</th>
          <th>Lớp</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };
  
  export default TableHeader;
  