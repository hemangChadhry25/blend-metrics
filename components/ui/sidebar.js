import React from "react";
import { Input, Card, Avatar, AvatarImage, AvatarFallback } from "./index";
import { Football } from "../icons/index";
import { Droppable, Draggable } from "react-beautiful-dnd";

const sidebar = ({ triggers }) => {
  // console.log(triggers);
  return (
    <div className="mt-12 h-[683px] w-[402px]  self-stretch border-l-2 px-5 pt-[28px]">
      <h2 className="mx-4 my-2 text-[20px]  font-[400] capitalize">
        choose a trigger type
      </h2>
      <Input placeholder="Find Triggers" type="email" className="my-5" />

      <Droppable droppableId="triggers">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {triggers.map((item, index) => {
              // console.log(item);
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="single-item"
                      >
                        {/* <span className="icon">{item.icon}</span> */}
                        <Card className="my-2 border-gray-200 px-3 py-[18px]">
                          <div className="inline-flex gap-x-3">
                            <Avatar
                              size="md"
                              className="rounded-[8px] border bg-white"
                            >
                              <AvatarImage src="/boy.jpg" alt="Boy" />
                              <AvatarFallback>{item.icon}</AvatarFallback>
                            </Avatar>

                            <div className="space-y-1">
                              <p className=" text-gray-900">{item.value}</p>
                              <p className="text-[14px] text-gray-700">
                                choose this to start your workflow
                              </p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default sidebar;
