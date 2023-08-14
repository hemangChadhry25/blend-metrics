import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import {
  Card,
  Avatar,
  AvatarImage,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  Button,
} from "../ui";
import {
  AppleGray,
  Plus2,
  MoreHorizontal,
  Trash,
  PencilLine,
  Zap,
  Copy,
} from "../icons/index";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTrigger,
  openActionSidebar,
  closeActionSidebar,
  openTestModal,
} from "../../store";
import DragHere from "./dragHere";
import DragArea from "./dragArea";
import PlusIcon from "./hoverIcon";
import Lines from "./lines";
import { duplicateObject, deleteObject } from "../../utils/helpers";

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
  setTemp,
  setTemp2,
  zoomLevel,
}) => {
  const dispatch = useDispatch();
  const { selectedTrigger } = useSelector((state) => state.workflow);
  const [points, setPoints] = useState([]);
  const [top, setTop] = useState(null);
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

  const duplicate = (value) => {
    if (value.type === "trigger") {
      const newArray = duplicateObject(value, temp);
      setTemp(newArray);
    }
    if (value.type === "action") {
      const newArray = duplicateObject(value, temp2);
      setTemp2(newArray);
    }
  };
  const deleteobj = (value) => {
    if (value.type === "trigger") {
      const newArray = deleteObject(value, temp);
      setTemp(newArray);
    }
    if (value.type === "action") {
      const newArray = deleteObject(value, temp2);
      setTemp2(newArray);
    }
  };
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
        // createMarker2(topCenterX, topCenterY);
        // console.log("top Center Point:", topCenterX, topCenterY);
        setTop({ x: topCenterX, y: topCenterY });
        for (let i = 0; i < temp.length; i++) {
          elements[i] = document.getElementById(`ref${i + 1}`);
          const { left, top, width, height } =
            elements[i].getBoundingClientRect();
          const bottomCenterX = left + width / 2;
          const bottomCenterY = top + height;
          // createMarker1(bottomCenterX, bottomCenterY);
          // console.log("Bottom Center Point:", bottomCenterX, bottomCenterY);
          coordinated.push({ x: bottomCenterX, y: bottomCenterY });
          // console.log(coordinated);
          // createCurvedLine(
          //   { x: bottomCenterX, y: bottomCenterY },
          //   { x: topCenterX, y: topCenterY }
          // );
          // const angle = Math.atan2(
          //   topCenterY - bottomCenterY,
          //   topCenterX - bottomCenterX
          // );
          // const distance = Math.sqrt(
          //   Math.pow(topCenterX - bottomCenterX, 2) +
          //     Math.pow(topCenterY - bottomCenterY, 2)
          // );
          // const line = document.createElement("div");
          // line.className = "absolute h-[1px] origin-left bg-black";
          // line.style.width = `${distance}px`;
          // line.style.transform = `rotate(${angle}rad)`;
          // line.style.left = `${bottomCenterX}px`;
          // line.style.top = `${bottomCenterY}px`;
          // document.body.appendChild(line);
        }
      }
      setPoints(coordinated);
      // console.log(coordinated);
    }
  }, [temp, temp2]);

  const handleIconHover = (id) => {
    setHoverIcon(id);

    setTimeout(() => {
      setHoverIcon("");
    }, 3000);
  };
  return (
    <div
      className=" flex max-h-screen w-[80vw]  flex-col items-center overflow-x-scroll overflow-y-scroll p-[150px] pb-0"
      style={{
        backgroundImage: 'url("/Grid.png")',
        transform: `scale(${zoomLevel})`,
        transformOrigin: "top left",
        transition: "transform 0.2s ease-in-out",
      }}
      id="canvas"
    >
      <div className="flex h-[80px] min-w-[300px] flex-col items-center justify-center ">
        <div>
          <Droppable
            droppableId="canvas"
            direction="horizontal"
            className="min-w-[250px] "
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className=" flex h-[65px] min-w-[250px] flex-row"
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
                            <div>
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="mx-8 rounded-[5px] "
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
                                      className=" w-[256px] border-gray-200 p-[12px]"
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
                                        <div className="flex">
                                          <div className="flex flex-col justify-between">
                                            <h3 className="text-[18px] text-gray-900">
                                              {item.value}
                                            </h3>
                                            <p className="text-[14px] text-gray-700">
                                              Item description here
                                            </p>
                                          </div>

                                          <DropdownMenu className="ml-12">
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
                                                <PencilLine /> Edit
                                              </DropdownMenuItem>
                                              <DropdownMenuItem
                                                onClick={() => duplicate(item)}
                                              >
                                                <Copy /> Duplicate
                                              </DropdownMenuItem>
                                              <DropdownMenuItem
                                                onClick={() =>
                                                  dispatch(openTestModal())
                                                }
                                              >
                                                <Zap /> Run Test
                                              </DropdownMenuItem>
                                              <DropdownMenuSeparator />
                                              <DropdownMenuItem
                                                visual="destructive"
                                                onClick={() => deleteobj(item)}
                                              >
                                                <Trash /> Delete
                                              </DropdownMenuItem>
                                            </DropdownMenuContent>
                                          </DropdownMenu>
                                        </div>
                                      </div>
                                    </Card>
                                    <div ref={markerRef} className="marker" />
                                    {/* <Left className="ml-5" /> */}
                                  </div>
                                  {hoverIcon === item.id && <PlusIcon />}
                                </div>
                              </div>

                              {/* <div className="ml-[93px] h-[20px] border-l-[3px]"></div> */}
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
            <div className="mr-[50px] mt-[50px]">
              <Plus2
                className="absolute h-10 w-10 cursor-pointer rounded-full border bg-slate-300"
                onClick={() => {
                  dispatch(openActionSidebar());
                  setSecondDroppable(true);
                  setPlus(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        {temp2.length > 0 && (
          <Lines temp={temp} temp2={temp2} points={points} top={top} />
        )}
      </div>
      {secondDroppable && (
        <div className="flex min-h-[300px] min-w-[250px] flex-col items-center justify-center px-20">
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
                                      <Card
                                        className=" w-[256px] border-gray-200 p-[12px]"
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
                                          <div className="flex">
                                            <div className="flex flex-col justify-between">
                                              <h3 className="text-[18px] text-gray-900">
                                                {item.value}
                                              </h3>
                                              <p className="text-[14px] text-gray-700">
                                                Item description here
                                              </p>
                                            </div>

                                            <DropdownMenu className="ml-12">
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
                                                  <PencilLine /> Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                  onClick={() =>
                                                    duplicate(item)
                                                  }
                                                >
                                                  <Copy /> Duplicate
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                  <Zap /> Run Test
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem
                                                  visual="destructive"
                                                  onClick={() =>
                                                    deleteobj(item)
                                                  }
                                                >
                                                  <Trash /> Delete
                                                </DropdownMenuItem>
                                              </DropdownMenuContent>
                                            </DropdownMenu>
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
