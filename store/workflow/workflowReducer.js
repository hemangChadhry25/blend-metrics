import {
  SELECT_TRIGGER,
  DISSELECT_TRIGGER,
  OPEN_ACTION_MODAL,
  CLOSE_ACTION_MODAL,
  OPEN_VERSION_HISTORY,
  CLOSE_VERSION_HISTORY,
  OPEN_TRIGGER_SIDEBAR,
  CLOSE_TRIGGER_SIDEBAR,
  OPEN_ACTION_SIDEBAR,
  CLOSE_ACTION_SIDEBAR,
  OPEN_TEST_MODAL,
  CLOSE_TEST_MODAL,
} from "./workflowTypes";

const initialState = {
  loading: false,
  selectedTrigger: null,
  isDetailModalOpen: false,
  isTriggerModalOpen: false,
  isActionModalOpen: false,
  isVersionHistoryOpen: false,
  isActionSidebarOpen: false,
  isTestModalOpen: false,
};

const workflowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TRIGGER:
      return {
        ...state,
        selectedTrigger: action.payload.trigger,
        isDetailModalOpen: true,
        isTriggerModalOpen: false,
        isVersionHistoryOpen: false,
        isActionSidebarOpen: false,
      };
    case DISSELECT_TRIGGER:
      return {
        ...state,
        selectedTrigger: null,
        isTriggerModalOpen: false,
        isDetailModalOpen: false,
        isVersionHistoryOpen: false,
        isActionSidebarOpen: false,
      };
    case OPEN_ACTION_MODAL:
      return { ...state, isActionModalOpen: !state.isActionModalOpen };
    case CLOSE_ACTION_MODAL:
      return { ...state, isActionModalOpen: false };
    case OPEN_VERSION_HISTORY:
      return {
        ...state,
        isDetailModalOpen: false,
        isTriggerModalOpen: false,
        isActionModalOpen: false,
        isVersionHistoryOpen: true,
        isActionSidebarOpen: false,
      };
    case CLOSE_VERSION_HISTORY:
      return {
        ...state,
        isDetailModalOpen: false,
        isTriggerModalOpen: false,
        isActionModalOpen: false,
        isVersionHistoryOpen: false,
        isActionSidebarOpen: false,
      };
    case OPEN_TRIGGER_SIDEBAR:
      return {
        ...state,
        isDetailModalOpen: false,
        isTriggerModalOpen: true,
        isActionModalOpen: false,
        isVersionHistoryOpen: false,
        isActionSidebarOpen: false,
      };
    case CLOSE_TRIGGER_SIDEBAR:
      return {
        ...state,
        isDetailModalOpen: false,
        isTriggerModalOpen: false,
        isActionModalOpen: false,
        isVersionHistoryOpen: false,
        isActionSidebarOpen: false,
      };
    case OPEN_ACTION_SIDEBAR:
      return {
        ...state,
        isDetailModalOpen: false,
        isTriggerModalOpen: false,
        isActionModalOpen: false,
        isVersionHistoryOpen: false,
        isActionSidebarOpen: true,
      };
    case CLOSE_ACTION_SIDEBAR:
      return {
        ...state,
        isDetailModalOpen: false,
        isTriggerModalOpen: false,
        isActionModalOpen: false,
        isVersionHistoryOpen: false,
        isActionSidebarOpen: false,
      };
    case OPEN_TEST_MODAL:
      return { ...state, isTestModalOpen: true };
    case CLOSE_TEST_MODAL:
      return { ...state, isTestModalOpen: false };

    default:
      return { ...state };
  }
};
export default workflowReducer;
