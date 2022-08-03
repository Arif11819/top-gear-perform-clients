import React from 'react';
import EmployeeEngagement from '../HomeSection/EmployeeEngagement/EmployeeEngagement';
import Management from '../HomeSection/Management/Management';
import PerformanceManagement from '../HomeSection/PerformanceManagement/PerformanceManagement';

const Home = () => {
  return (
    <div>
      <Management></Management>
      <PerformanceManagement></PerformanceManagement>
      <EmployeeEngagement></EmployeeEngagement>
    </div>
  );
};

export default Home;