import React from "react";
import { Plus } from "../icons";
import { useDispatch } from "react-redux";
import { openTriggerSidebar } from "../../store";

const HoverIcon = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={(e) => {
        dispatch(openTriggerSidebar());
        e.stopPropagation();
      }}
    >
      <Plus className="relative z-10 ml-6 h-8 w-8 cursor-pointer rounded-full border bg-slate-300 transition duration-500 delay-150 ease-in-out" />
    </div>
  );
};

export default HoverIcon;
