import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { DosTab } from "../constants/DosTabs";
import CommandList from "./CommandList";
import CommandListType from "../constants/CommandListType";
import { useTheme } from "@mui/material";

const DosCommandTabs = ({ dosTasks }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabNames = Object.keys(DosTab);

  const getTasksByTabName = (tabName) => {
    return dosTasks.filter((t) => t.Tab === tabName);
  };

  let dictTabTasks = {};
  tabNames.map((t) => (dictTabTasks[t] = getTasksByTabName(t)));
  // The 'Tab' property is missing if the default tab is 'Test'.
  // Put all tasks with Tab property into 'Test' tab.
  dictTabTasks[tabNames[0]] = dosTasks.filter(
    (t) => !t.hasOwnProperty("Tab")
  );

  return (
    <>
      <Tabs value={activeTab} onChange={handleTabChange}>
        {tabNames.map(
          (name, index) =>
            dictTabTasks[name] && (
              <Tab
                key={index}
                label={name}
                style={{ fontSize: `${theme.typography.listTitle.fontSize}` }}
              />
            )
        )}
      </Tabs>

      {tabNames.map((name, index) => (
        <div key={index} hidden={activeTab !== index}>
          {activeTab === index &&
            dictTabTasks[name].map(
              (t, index) =>
                t.Commands &&
                t.Commands.length > 0 && (
                  <CommandList
                    key={index}
                    name={t.Name}
                    variant={CommandListType.Dos}
                    list={t.Commands}
                  />
                )
            )}
        </div>
      ))}
    </>
  );
};

export default DosCommandTabs;
