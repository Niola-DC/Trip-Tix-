import React from 'react';

const TabComponent = ({ tabs, activeTab, setActiveTab }) => {

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col absolute left-0 right-0 md:w-1/2 mx-auto bottom-0">
      <div className=" text-white flex rounded-t-lg overflow-hidden">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button flex-1 py-2 ${
              activeTab === index
                ? 'bg-white font-semibold text-black'
                : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
