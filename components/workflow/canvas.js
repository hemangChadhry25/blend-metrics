import React, { useState } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Card, Avatar, AvatarImage, AvatarFallback } from "../ui";
import { AppleGray, Plus2 } from "../icons/index";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTrigger,
  openActionSidebar,
  closeActionSidebar,
} from "../../store";
import DragHere from "./dragHere";
import DragArea from "./dragArea";
import PlusIcon from "./hoverIcon";
import Left from "./icons/left";
import Right from "./icons/right";

const Canvas = ({
  temp,
  temp2,
  secondDroppable,
  setSecondDroppable,
  showDragHere,
  plus,
  setPlus,
}) => {
  const dispatch = useDispatch();
  const { selectedTrigger } = useSelector((state) => state.workflow);

  const [hoverIcon, setHoverIcon] = useState("");

  const handleIconHover = (id) => {
    console.log(id);
    setHoverIcon(id);

    setTimeout(() => {
      setHoverIcon("");
    }, 3000);
  };
  return (
    <div
      className=" flex h-screen w-screen flex-col items-center overflow-x-scroll overflow-y-scroll"
      style={{
        backgroundImage: 'url("/Grid.png")',
      }}
    >
      <div className="mt-20 flex h-[100px] min-w-[300px] flex-col items-center justify-center ">
        <div className="absolute  ">
          <Droppable
            droppableId="canvas"
            direction="horizontal"
            className="min-w-[250px] bg-black"
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className=" flex h-[100px] min-w-[250px] flex-row "
              >
                {temp.map((item, index) => {
                  const hightLight =
                    selectedTrigger && selectedTrigger.id === item.id
                      ? "bg-blue-500 rounded-[5px] p-[1.8px]"
                      : "null";
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => {
                        return (
                          <div className="flex items-center">
                            <div className="items">
                              <div>
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="element mx-8 rounded-[5px] "
                                  onClick={() => {
                                    dispatch(selectTrigger(item));
                                    setPlus(true);
                                  }}
                                >
                                  <div className="flex items-center justify-center">
                                    <div className={`${hightLight}`}>
                                      <Card
                                        className=" w-[250px] border-gray-200 p-5"
                                        onMouseEnter={() =>
                                          handleIconHover(item.id)
                                        }
                                      >
                                        <div className="inline-flex gap-x-3">
                                          <Avatar
                                            size="md"
                                            className="mr-1 rounded-lg border-[1.5px] border-gray-400"
                                          >
                                            <AvatarFallback>
                                              {item.icon}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="space-y-1">
                                            <h3 className="text-[18px] text-gray-900">
                                              {item.value}
                                            </h3>
                                            <p className="text-[14px] text-gray-700">
                                              Item description here
                                            </p>
                                          </div>
                                        </div>
                                      </Card>
                                      {/* <Left className="ml-5" /> */}
                                    </div>
                                    {hoverIcon === item.id && <PlusIcon />}
                                  </div>
                                </div>

                                {/* <div className="ml-[93px] h-[20px] border-l-[3px]"></div> */}
                              </div>
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {snapshot.isDraggingOver && <DragArea />}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        {temp.length < 1 && showDragHere && <DragHere />}
        <div>
          {plus && temp.length > 0 && (
            <Plus2
              className=" mt-48 h-10 w-10 cursor-pointer rounded-full border bg-slate-300"
              onClick={() => {
                dispatch(openActionSidebar());
                setSecondDroppable(true);
                setPlus(false);
              }}
            />
          )}
        </div>
      </div>

      {secondDroppable && (
        <div className="mt-20 flex min-h-[300px] min-w-[250px] max-w-[250px] flex-col items-center justify-center px-20">
          <div className="">
            <Droppable
              droppableId="canvas2"
              direction="vertical"
              className="min-h-[300px] min-w-[250px]"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className=" flex min-h-[300px] min-w-[250px] flex-col "
                >
                  {temp2.map((item, index) => {
                    const hightLight =
                      selectedTrigger && selectedTrigger.id === item.id
                        ? "bg-blue-500 rounded-[5px] p-[1.8px]"
                        : "null";
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => {
                          return (
                            <div className="flex items-center">
                              <div className="items">
                                <div>
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="  rounded-[5px] "
                                    onClick={() => {
                                      dispatch(selectTrigger(item));
                                      setPlus(true);
                                    }}
                                  >
                                    <div className="flex items-center justify-center">
                                      <div className={`${hightLight}`}>
                                        <Card className=" w-[250px] border-gray-200 p-5">
                                          <div className="inline-flex gap-x-3">
                                            <Avatar
                                              size="md"
                                              className="mr-1 rounded-lg border-[1.5px] border-gray-400"
                                            >
                                              <AvatarFallback>
                                                {item.icon}
                                              </AvatarFallback>
                                            </Avatar>
                                            <div className="space-y-1">
                                              <h3 className="text-[18px] text-gray-900">
                                                {item.value}
                                              </h3>
                                              <p className="text-[14px] text-gray-700">
                                                Item description here
                                              </p>
                                            </div>
                                          </div>
                                        </Card>
                                        {/* <Left className="ml-5" /> */}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="ml-[125px] h-[100px] border-l-[3px]"></div>
                                </div>
                              </div>
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {snapshot.isDraggingOver && <DragArea />}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div>
            {/* {temp.length > 0 && (
              <Plus2
                className="mt-10 h-10 w-10 rounded-full border bg-slate-300"
                onClick={() => {
                  dispatch(openActionSidebar());
                  setSecondDroppable(true);
                  setPlus(false);
                }}
              />
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};
export default Canvas;
