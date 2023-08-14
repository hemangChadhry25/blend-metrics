import React from "react";
import { Plus } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { openTriggerSidebar } from "../../store";
const DragHere = () => {
  const dispatch = useDispatch();

  return (
    <div className="absolute z-10 flex min-w-[250px] flex-col p-8">
      <div className="flex flex-col border-2 border-dashed bg-gray-50 p-6">
        <p className="width-full text-center text-[16px]">
          Drag Your Trigger Here
        </p>
        <p className="text-[12px] text-gray-500">
          Click on the Plus icon below to add your first workflow step
        </p>
      </div>
      <div className="align-center mt-8 flex flex-col  items-center">
        <Plus
          className="h-8 w-8 cursor-pointer rounded-full border bg-slate-200"
          onClick={() => dispatch(openTriggerSidebar())}
        />
      </div>
    </div>
  );
};

export default DragHere;
