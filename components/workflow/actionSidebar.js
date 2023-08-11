import React from "react";
import { Input, Card, Avatar, AvatarImage, AvatarFallback } from "../ui";
import { Football } from "../icons";
import { Droppable, Draggable } from "react-beautiful-dnd";

const actionSidebar = ({ triggers }) => {
  return (
    <div className="w-[386px]  border-l-2 px-5">
      <h2 className="mx-10 my-5 text-[18px]  font-[300] capitalize">
        choose a action type
      </h2>
      <Input placeholder="Find Triggers" type="email" className="my-5" />

      <Droppable droppableId="actions">
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

export default actionSidebar;
