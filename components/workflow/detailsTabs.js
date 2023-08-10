import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/index";
import { CheckCircle, AlertTriangle, AlertCircle2 } from "../icons";
const detailsTabs = () => {
  return (
    <Tabs defaultValue="All">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="setup">
          Setup
          <CheckCircle className="text-success-500" />
        </TabsTrigger>
        <TabsTrigger value="conditions">Conditions</TabsTrigger>
        <TabsTrigger value="test">Test</TabsTrigger>
      </TabsList>
      {/* <TabsContent value="All" />
      <TabsContent value="conditions" />
      <TabsContent value="test" /> */}
    </Tabs>
  );
};

export default detailsTabs;
