import React from "react";
import {
  Label,
  HelperText,
  Button,
  Card,
  RadioGroup,
  RadioGroupItemSelector,
} from "../ui/index";
import { AppleGray, Google, Plus, CheckCircle } from "../icons/index";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { disselectTrigger } from "../../store";
import DetailsTabs from "./detailsTabs";

const DetailSidebar = () => {
  const dispatch = useDispatch();
  const { selectedTrigger } = useSelector((state) => state.workflow);

  return (
    <div className="z-100 mt-12 h-[683px] w-[402px] border-l-2 pl-5">
      <div className="border-b-2">
        <div className="mx-1 my-4  flex justify-between text-[18px] font-[300] capitalize">
          <div className="align-center flex">
            <div className="mx-4 rounded-lg border border-slate-400 p-5">
              <AppleGray />
            </div>
            <div>
              <div className="mx-2 text-lg font-medium">
                {selectedTrigger && selectedTrigger.value}
              </div>
              <p className="mb-0 text-sm text-gray-500">
                trigger short description here
              </p>
            </div>
          </div>
          <div
            className="cursor-pointer text-blue-500"
            onClick={() => dispatch(disselectTrigger())}
          >
            back
          </div>
        </div>
      </div>
      <DetailsTabs />
      <div className="rounded-lg  p-2">
        <div>
          <h4 className="mx-2 my-5 text-lg capitalize text-slate-600">
            which event will start the workflow
          </h4>
        </div>
        <RadioGroup className="grid gap-y-2">
          <RadioGroupItemSelector size="md" value="Option 1">
            <Label size="sm">Option 1</Label>
            <HelperText size="sm">Short description here</HelperText>
          </RadioGroupItemSelector>
          <RadioGroupItemSelector size="md" value="Option 2">
            <Label size="sm">Option 2</Label>
            <HelperText size="sm">Short description here</HelperText>
          </RadioGroupItemSelector>
          <RadioGroupItemSelector size="md" value="Option 3">
            <Label size="sm">Option 3</Label>
            <HelperText size="sm">Short description here</HelperText>
          </RadioGroupItemSelector>
          <RadioGroupItemSelector size="md" value="Option 4">
            <Label size="sm">Option 4</Label>
            <HelperText size="sm">Short description here</HelperText>
          </RadioGroupItemSelector>
        </RadioGroup>
      </div>
      <div>
        <h4 className="mx-4 my-4">Connect your account</h4>
        <Card className="p-3">
          <div className="flex justify-between gap-x-3">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-gray-200">
              <Google />
            </div>
            <div className="flex  gap-y-1">
              <span className=" text-sm font-medium text-gray-800">
                connect your gmail account
              </span>
              <div className=" ml-2 ">
                <Button variant="outlined" visual="gray" leftIcon={<Plus />}>
                  connect
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <p className="my-5 text-slate-600">
          Gmail is a secure partner with Blend Metrics. Your credentials are
          encrypted & can be removed at any time, You can manage all of your
          connected accounts here
        </p>
      </div>
    </div>
  );
};

export default DetailSidebar;
