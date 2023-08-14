import React from "react";
import { CheckCircle, Trash, Link } from "../icons";
import { openVersionHistory } from "../../store";
import { useDispatch } from "react-redux";

const ActionModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed right-20 z-10  max-w-[233.25px] rounded-lg border border-gray-200  bg-white">
      <div className="flex flex-col items-center">
        <span className="my-1 mt-2 flex w-full cursor-pointer p-1 px-2 text-center text-gray-500  hover:bg-gray-200">
          <Link className="mx-2 mt-1" />
          Clone Workflow
        </span>
        <span className="my-1 flex w-full cursor-pointer p-1 px-2 text-center text-gray-500 hover:bg-gray-200">
          <Link className="mx-2 mt-1" />
          Run Workflow Test
        </span>
        <span
          className="my-1 flex w-full cursor-pointer p-1 px-2 text-gray-500 hover:bg-gray-200"
          onClick={() => dispatch(openVersionHistory())}
        >
          <Link className="mx-2 mt-1" />
          Show Version History
        </span>
        <span className=" my-1 mt-2 flex w-full cursor-pointer border-t bg-white p-2 leading-4 text-red-500 hover:bg-red-200">
          <Trash className="mx-2" />
          Delete Workflow
        </span>
      </div>
    </div>
  );
};

export default ActionModal;
