import React from "react";
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
} from "../icons";
import { closeVarsionHistory } from "@/store";
import { useDispatch } from "react-redux";

const VersionDropDown = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex w-[364px] flex-col gap-y-3 px-[20px] pb-[12px] pt-2">
      <div className="flex">
        <div>
          <p className=" text-[18px] text-gray-900">Version History</p>
          <p className="font-sans text-[14px] leading-5 text-gray-500">
            You can view and restore previous versions of your workflows in
            Blend Metrics account
          </p>
        </div>

        <div
          className="cursor-pointer text-blue-500"
          onClick={() => dispatch(closeVarsionHistory())}
        >
          back
        </div>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="ghost"
              visual="gray"
              className="flex w-[320px] justify-between border"
            >
              All Version
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[320px]">
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
    </div>
  );
};

export default VersionDropDown;
