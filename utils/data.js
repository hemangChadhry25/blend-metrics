import {
  AppEvent,
  Webhook,
  Clock,
  Forms,
  WorkFlow,
  Message,
  AlertTriangle,
  Database,
  Gmail,
  Condition,
  TimeDelay,
  SplitPath,
  NewProject,
  VideoRecording,
} from "../components/icons";

export const triggersData = [
  {
    id: "10",
    value: "App Event",
    type: "trigger",
    icon: <AppEvent />,
  },
  {
    id: "4",
    value: "Webhook",
    type: "trigger",
    icon: <Webhook />,
  },
  {
    id: "5",
    value: "Schedule",
    type: "trigger",
    icon: <WorkFlow />,
  },
  {
    id: "6",
    value: "Forms",
    type: "trigger",
    icon: <Forms />,
  },
  {
    id: "7",
    value: "Workflow",
    type: "trigger",
    icon: <WorkFlow />,
  },
  {
    id: "8",
    value: "Message",
    type: "trigger",
    icon: <Message />,
  },
  {
    id: "9",
    value: "Alert",
    type: "trigger",
    icon: <AlertTriangle />,
  },
];
export const actionsData = [
  {
    id: "11",
    value: "Save Data",
    type: "action",
    icon: <Database />,
  },
  {
    id: "12",
    value: "Send Message",
    type: "action",
    icon: <Gmail />,
  },
  {
    id: "13",
    value: "Time Delay",
    type: "action",
    icon: <TimeDelay />,
  },
  {
    id: "14",
    value: "Condition",
    type: "action",
    icon: <Condition />,
  },
  {
    id: "15",
    value: "Video Recording",
    type: "action",
    icon: <VideoRecording />,
  },
  {
    id: "16",
    value: "Split Path",
    type: "action",
    icon: <SplitPath />,
  },
  {
    id: "17",
    value: "New Project",
    type: "action",
    icon: <NewProject />,
  },
];
