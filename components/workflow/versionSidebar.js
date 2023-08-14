import React from "react";
import VersionDropDown from "./versionDropDown";
import VersionList from "./versionList";
const versionSidebar = () => {
  return (
    <div className="mt-12 overflow-y-scroll">
      <VersionDropDown />
      <VersionList />
    </div>
  );
};

export default versionSidebar;
