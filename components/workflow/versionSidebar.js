import React from "react";
import VersionDropDown from "./versionDropDown";
import VersionList from "./versionList";
const versionSidebar = () => {
  return (
    <div>
      <VersionDropDown />
      <VersionList />
    </div>
  );
};

export default versionSidebar;
