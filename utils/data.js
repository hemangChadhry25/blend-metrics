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
    icon: <AppEvent />,
  },
  {
    id: "4",
    value: "Webhook",
    icon: <Webhook />,
  },
  {
    id: "5",
    value: "Schedule",
    icon: <WorkFlow />,
  },
  {
    id: "6",
    value: "Forms",
    icon: <Forms />,
  },
  {
    id: "7",
    value: "Workflow",
    icon: <WorkFlow />,
  },
  {
    id: "8",
    value: "Message",
    icon: <Message />,
  },
  {
    id: "9",
    value: "Alert",
    icon: <AlertTriangle />,
  },
];
export const actionsData = [
  {
    id: "11",
    value: "Save Data",
    icon: <Database />,
  },
  {
    id: "12",
    value: "Send Message",
    icon: <Gmail />,
  },
  {
    id: "13",
    value: "Time Delay",
    icon: <TimeDelay />,
  },
  {
    id: "14",
    value: "Condition",
    icon: <Condition />,
  },
  {
    id: "15",
    value: "Video Recording",
    icon: <VideoRecording />,
  },
  {
    id: "16",
    value: "Split Path",
    icon: <SplitPath />,
  },
  {
    id: "17",
    value: "New Project",
    icon: <NewProject />,
  },
];
