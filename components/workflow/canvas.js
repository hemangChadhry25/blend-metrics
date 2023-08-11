import React, { useState, useEffect, useRef } from "react";
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
const APP = {};
// pass objects
function createLine(bottomCenter, topCenter) {
  console.log("values in create line", bottomCenter, topCenter);
  const angle = Math.atan2(
    topCenter.y - bottomCenter.y,
    topCenter.x - bottomCenter.x
  );
  const distance = Math.sqrt(
    Math.pow(topCenter.x - bottomCenter.x, 2) +
      Math.pow(topCenter.y - bottomCenter.y, 2)
  );

  const line = document.createElement("div");
  line.className = "absolute h-[1px] origin-left bg-black";
  line.style.width = `${distance}px`;
  line.style.transform = `rotate(${angle}rad)`;
  line.style.left = `${bottomCenter.x}px`;
  line.style.top = `${bottomCenter.y}px`;

  document.body.appendChild(line); // Append line to the body or another appropriate parent
}

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
  const dynamicDivRef1 = useRef(null);

  const markerRef = useRef(null);

  const [hoverIcon, setHoverIcon] = useState("");
  function createMarker1(x, y) {
    const marker = document.createElement("div");
    marker.style.position = "absolute";
    marker.style.width = "6px";
    marker.style.height = "6px";
    marker.style.backgroundColor = "green";
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;

    document.body.appendChild(marker);
  }
  function createMarker2(x, y) {
    const marker = document.createElement("div");
    marker.style.position = "absolute";
    marker.style.width = "6px";
    marker.style.height = "6px";
    marker.style.backgroundColor = "red";
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;

    document.body.appendChild(marker);
  }

  // first add 4 elements in the first row the add action and after adding action
  // calculate the center points of all the above row the the top point to action and draw line

  useEffect(() => {
    let coordinated = [];
    if (temp.length > 0) {
      let elements = [];

      console.log(elements);
    }

    if (temp2.length > 0) {
      let elements = [];
      for (let i = 0; i < temp2.length; i++) {
        elements[i] = document.getElementById(`re${i + 1}`);
        const { left, top, width } = elements[i].getBoundingClientRect();
        const topCenterX = left + width / 2;
        const topCenterY = top;
        createMarker2(topCenterX, topCenterY);
        console.log("Bottom Center Point:", topCenterX, topCenterY);

        // calculate here the bottom points of above row

        for (let i = 0; i < temp.length; i++) {
          elements[i] = document.getElementById(`ref${i + 1}`);
          const { left, top, width, height } =
            elements[i].getBoundingClientRect();
          const bottomCenterX = left + width / 2;
          const bottomCenterY = top + height;
          createMarker1(bottomCenterX, bottomCenterY);
          console.log("Bottom Center Point:", bottomCenterX, bottomCenterY);
          coordinated.push({ x: bottomCenterX, y: bottomCenterY });
          // createCurvedLine(
          //   { x: bottomCenterX, y: bottomCenterY },
          //   { x: topCenterX, y: topCenterY }
          // );
          const angle = Math.atan2(
            topCenterY - bottomCenterY,
            topCenterX - bottomCenterX
          );
          const distance = Math.sqrt(
            Math.pow(topCenterX - bottomCenterX, 2) +
              Math.pow(topCenterY - bottomCenterY, 2)
          );
          const line = document.createElement("div");
          line.className = "absolute h-[1px] origin-left bg-black";
          line.style.width = `${distance}px`;
          line.style.transform = `rotate(${angle}rad)`;
          line.style.left = `${bottomCenterX}px`;
          line.style.top = `${bottomCenterY}px`;
          document.body.appendChild(line);
        }
      }

      console.log(elements);
    }
  }, [temp, temp2]);

  const handleIconHover = (id) => {
    setHoverIcon(id);

    setTimeout(() => {
      setHoverIcon("");
    }, 3000);
  };
  return (
    <>
      <div
        className=" flex h-screen w-screen flex-col items-center overflow-x-scroll overflow-y-scroll"
        // style={{
        //   backgroundImage: 'url("/Grid.png")',
        // }}
        id="canvas"
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
                                    <div
                                      className="flex items-center justify-center"
                                      id={`ref${index + 1}`}
                                    >
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
                                        <div
                                          ref={markerRef}
                                          className="marker"
                                        />
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
                                      <div
                                        className="flex items-center justify-center"
                                        id={`re${index + 1}`}
                                      >
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
    </>
  );
};
export default Canvas;
