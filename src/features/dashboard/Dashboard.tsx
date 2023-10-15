import React from "react";

// UI IMPORT
import { Icon, Table } from "../../ui";

const cards = [
  { title: "Total Campaigns", amount: 20, icon: "TotalCampaign" },
  { title: "Total Calenders", amount: 20, icon: "TotalCalendars" },
  { title: "Total Events", amount: 20, icon: "TotalEvents" },
];

const Dashboard = () => {
  const columns = [
    { name: "name", title: "Campaign Name" },
    { name: "accounts", title: "Accounts" },
    { name: "calendar", title: "Calender" },
    { name: "events", title: "Total Events" },
    {
      name: "status",
      title: "Status",
      Cell: (item: any) => (
        <div className="font-medium text-white dark:text-white hover:underline bg-pink-600 rounded-md p-1">
          {item?.status}
        </div>
      ),
    },
  ];

  const items: any = [
    {
      name: "Test",
      accounts: "Test",
      calendar: "Test",
      events: "Test",
      status: "Pending",
    },
    {
      name: "Test",
      accounts: "Test",
      calendar: "Test",
      events: "Test",
      status: "Pending",
    },
    {
      name: "Test",
      accounts: "Test",
      calendar: "Test",
      events: "Test",
      status: "Pending",
    },
    {
      name: "Test",
      accounts: "Test",
      calendar: "Test",
      events: "Test",
      status: "Pending",
    },
    {
      name: "Test",
      accounts: "Test",
      calendar: "Test",
      events: "Test",
      status: "Pending",
    },
    {
      name: "Test",
      accounts: "Test",
      calendar: "Test",
      events: "Test",
      status: "Pending",
    },
  ];
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-10">
        {cards?.map((card: any) => {
          return (
            <>
              <div className="flex flex-col items-center justify-center rounded-lg border space-y-3 shadow-md">
                <Icon name={card?.icon} size={50} />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xl">{card?.title}</p>
                  <h2 className="text-2xl pt-1">
                    <b>{card?.amount}</b>
                  </h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Table columns={columns} items={items} />
    </div>
  );
};

export default Dashboard;
