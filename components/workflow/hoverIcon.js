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
      className="mb-8"
    >
      <Plus className="absolute mb-5 ml-6 h-8 w-8 cursor-pointer rounded-full border bg-slate-300 transition ease-in-out" />
    </div>
  );
};

export default HoverIcon;
