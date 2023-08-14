import React, { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/ui/sidebar";
import Canvas from "@/components/workflow/canvas";
import { DragDropContext } from "react-beautiful-dnd";
import WorkflowNav from "../components/workflow/workflowNav";
import ActionModal from "../components/workflow/actionModal";
import DetailSidebar from "../components/workflow/DetailSidebar";
import { useSelector, useDispatch } from "react-redux";
import VarsionSidebar from "../components/workflow/versionSidebar";
import ActionSideBar from "../components/workflow/actionSidebar";
import { triggersData, actionsData } from "../utils/data";
import { selectTrigger } from "../store";
import WorkflowTest from "../components/workflow/WorkflowTest";

const { v4: uuidv4 } = require("uuid");

import "../app/globals.css";

function generateRandomString(length) {
  return uuidv4().substr(0, length).replace(/-/g, "");
}

function swapObjectsByIndex(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

const AboutPage = () => {
  const {
    isTriggerModalOpen,
    isDetailModalOpen,
    isActionModalOpen,
    isVersionHistoryOpen,
    isActionSidebarOpen,
  } = useSelector((state) => state.workflow);

  useEffect(() => {
    setTriggers(triggersData);
    setActions(actionsData);
  }, []);

  const dispatch = useDispatch();
  const [temp, setTemp] = useState([]);
  const [temp2, setTemp2] = useState([]);
  const [triggers, setTriggers] = useState([]);
  const [actions, setActions] = useState([]);
  const [plus, setPlus] = useState(true);
  const [secondDroppable, setSecondDroppable] = useState(false);
  const [showDragHere, setShowDragHere] = useState(true);

  const divRef = useRef(null);

  const handleDrag = (value) => {
    const randomString = generateRandomString(7);

    if (value.source.droppableId === "triggers") {
      if (value.destination.droppableId === "canvas") {
        const m = triggers[value.source.index];

        const obj = {
          id: `${randomString}`,
          value: `${m.value}`,
          icon: m.icon,
          type: m.type,
        };
        const newArr = [...temp, obj];
        setTemp(newArr);
        dispatch(selectTrigger(obj));
      }
    }

    if (value.destination.droppableId === "canvas2") {
      const m = actions[value.source.index];

      const obj = {
        id: `${randomString}`,
        value: `${m.value}`,
        icon: m.icon,
        type: m.type,
      };
      const newArr = [...temp2, obj];
      setTemp2(newArr);
    }
    if (value.destination.droppableId === value.source.droppableId) {
      const swaped = swapObjectsByIndex(
        temp,
        value.destination.index,
        value.source.index
      );
      setTemp(swaped);
    }
  };

  const onDragStart = (value) => {
    console.log(value);
    if (value.source.droppableId === "triggers") {
      setShowDragHere(false);
    }
  };

  return (
    <div className="max-w-screen max-h-screen">
      <div>
        <WorkflowNav temp={temp} temp2={temp2} />
      </div>
      {isActionModalOpen && <ActionModal />}
      <div className="flex min-h-screen min-w-full overflow-x-scroll ">
        <DragDropContext onDragEnd={handleDrag} onDragStart={onDragStart}>
          <Canvas
            temp={temp}
            setTemp={setTemp}
            temp2={temp2}
            setTemp2={setTemp2}
            secondDroppable={secondDroppable}
            setSecondDroppable={setSecondDroppable}
            showDragHere={showDragHere}
            plus={plus}
            setPlus={setPlus}
          />
          {isTriggerModalOpen && <Sidebar triggers={triggers} />}
          {isDetailModalOpen && <DetailSidebar />}
          {isVersionHistoryOpen && <VarsionSidebar />}
          {isActionSidebarOpen && <ActionSideBar triggers={actionsData} />}
        </DragDropContext>
      </div>
      <button
        onClick={() => {
          setTemp([]);
          setTemp2([]);
          setSecondDroppable(false);
          setShowDragHere(true);
        }}
        className="fixed bottom-0 left-36"
      >
        clear data
      </button>
      <WorkflowTest />
    </div>
  );
};

export default AboutPage;
