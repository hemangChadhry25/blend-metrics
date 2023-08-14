import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
  DropdownMenuSeparator,
} from "../ui";

import {
  ChevronDown,
  PencilLine,
  Copy,
  Zap,
  Trash,
  Clock,
  Link,
  AlertCircle,
  CheckCircle,
} from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { closeTestModal } from "@/store";

const WorkflowTest = () => {
  const dispatch = useDispatch();
  const { isTestModalOpen } = useSelector((state) => state.workflow);
  return (
    <>
      {isTestModalOpen ? (
        <>
          <div className="fixed inset-0 left-0 top-0 z-50 flex h-auto w-[585px]  items-center  p-[20px] outline-none focus:outline-none">
            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
              <div className="flex flex-col items-start justify-between rounded-t  border-solid border-gray-300 p-5">
                <h6 className="font=semibold text-xl">Workflow Test</h6>
                <div className="flex w-full flex-col items-center justify-center">
                  <p className="text-gray-700">Login Test results</p>
                  <p className="text-sm text-gray-500">
                    Logic test allow you to review any errors in your automation
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <DropdownMenu className="">
                  <DropdownMenuTrigger>
                    <div
                      variant="ghost"
                      visual="gray"
                      className="mb-4 flex h-[52px] w-[520px] justify-between rounded-lg border p-2"
                    >
                      <div className="flex items-center justify-between ">
                        <CheckCircle className="h-[1.5rem] w-10 rounded-full  text-success-500" />
                        <div className="flex flex-col items-start">
                          <p>2 Passed Connections</p>
                          <p className="text-xs text-gray-500">
                            Successful Connection mean your workflow is on its
                            way to be published
                          </p>
                        </div>
                      </div>

                      <ChevronDown className="mt-2" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[520px]">
                    <DropdownMenuItem>
                      <PencilLine /> Name this Version
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy /> Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Clock /> Restore this version
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link /> Copy Link
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem visual="destructive">
                      <Trash /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu className="">
                  <DropdownMenuTrigger>
                    <div
                      variant="ghost"
                      visual="gray"
                      className="flex h-[52px] w-[520px] justify-between rounded-lg border p-2"
                    >
                      <div className="flex items-center justify-between ">
                        <AlertCircle className="h-[1.5rem] w-10 text-red-500" />
                        <div className="flex flex-col items-start">
                          <p>2 Failed Connections</p>
                          <p className="text-xs text-gray-500">
                            Successful Connection mean your workflow is on its
                            way to be published
                          </p>
                        </div>
                      </div>

                      <ChevronDown className="mt-2" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[520px]">
                    <DropdownMenuItem>
                      <PencilLine /> Name this Version
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy /> Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Clock /> Restore this version
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link /> Copy Link
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem visual="destructive">
                      <Trash /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="border-blueGray-200 flex items-center justify-center rounded-b  border-solid p-6">
                <Button className="mr-4">Test Again</Button>
                <Button
                  variant="outlined"
                  visual="gray"
                  onClick={() => dispatch(closeTestModal())}
                >
                  close
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default WorkflowTest;
