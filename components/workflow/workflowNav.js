import React from "react";
import { ArrowLeft2, MoreHorizontal } from "../icons/index";
import { Button } from "../ui/index";
import { useDispatch, useSelector } from "react-redux";
import { openActionModal } from "@/store";
import DeleteWorkflowModal from "./deleteWorkflowModal";

const handleDownloadJSON = (data1, data2) => {
  const toDownload = [...data1, ...data2];
  const json = JSON.stringify(toDownload, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const WorkflowNav = ({ temp, temp2 }) => {
  const dispatch = useDispatch();

  return (
    <div className=" absolute top-0 z-50 flex min-w-[100vw] items-center justify-between border-b-2 bg-white p-1">
      <div className="flex items-center justify-center">
        <div className=" rounded-lg border border-slate-400 p-3">
          <ArrowLeft2 />
        </div>
        <h2 className="m ml-4 font-semibold text-slate-500">Test Workflow</h2>
      </div>
      <div className="flex items-center">
        <div
          className="mr-2 cursor-pointer rounded-lg border border-slate-400 p-3 hover:bg-slate-200"
          onClick={() => dispatch(openActionModal())}
        >
          <MoreHorizontal />
        </div>
        <Button
          onClick={() => {
            handleDownloadJSON(temp, temp2);
          }}
        >
          publish
        </Button>
      </div>
    </div>
  );
};

export default WorkflowNav;
