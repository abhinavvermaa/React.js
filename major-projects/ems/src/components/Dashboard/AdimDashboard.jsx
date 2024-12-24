import React from "react";
import Header from "../other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdimDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdimDashboard;
