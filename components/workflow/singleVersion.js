import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  Button,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../ui";
import { MoreHorizontal, PencilLine, Copy, Trash, Clock, Link } from "../icons";
const singleVersion = () => {
  return (
    <div className="flex flex-col justify-between  border-t border-gray-200 bg-white py-2">
      <div>
        <div className="flex items-start justify-between px-[20px]">
          <p className="font-sans text-[16px] font-[500] text-gray-900">
            New Team Version
          </p>
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-6 px-1.5 py-1 text-gray-500"
                  variant="ghost"
                  visual="gray"
                >
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <PencilLine /> Name this Version
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy /> Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Clock /> restore this version
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link /> Link
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem visual="destructive">
                  <Trash /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="px-[20px]">
        <p className=" text-[14px] text-gray-500">June 19, 2023 at 11:48 AM</p>
        <div className="my-[10px] flex">
          <Avatar isOnline className="">
            <AvatarImage alt="Man" src="/man.jpg" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <p className="ml-3 font-sans text-[14px] font-[400] text-gray-500">
            manually saved by Ronald Richards
          </p>
        </div>
      </div>
    </div>
  );
};

export default singleVersion;
