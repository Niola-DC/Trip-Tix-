import React, { useState } from "react";
import { TransportFilter } from "../TransportFilter";
import TabComponent from "../TabComponent";
import TabContent from "../TabContent";
import Navlinks from "../home/header/sub-component/Navlinks";

export default function Travel() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: '21 Tue', content: 'Content for Tuesday' },
    { label: 'WED 22', content: 'Content for Wednesday' },
    { label: '23 Thur', content: 'Content for Thursday' },
    { label: '24 Fri', content: 'Content for Friday' },
    { label: '25 Sat', content: 'Content for Saturday' },
    { label: '26 Sun', content: 'Content for Sunday' },
  ];

  return (
    <div>
      <div className="h-[40rem] md:h-80 pt-20 bg-cover bg-center flex flex-col items-center justify-center hero-section relative">
        <div className="mb-4">
          <TransportFilter />
        </div>
        <div className="mx-auto">
          <TabComponent tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
      <TabContent content={tabs[activeTab].content} />
    </div>
  );
}
