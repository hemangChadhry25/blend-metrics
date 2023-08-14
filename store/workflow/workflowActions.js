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

export const selectTrigger = (trigger) => {
  return async (dispatch) => {
    dispatch({ type: SELECT_TRIGGER, payload: { trigger } });
  };
};

export const disselectTrigger = () => {
  return (dispatch) => {
    dispatch({ type: DISSELECT_TRIGGER });
  };
};

export const openActionModal = () => {
  return (dispatch) => {
    dispatch({ type: OPEN_ACTION_MODAL });
  };
};
export const closeActionModal = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_ACTION_MODAL });
  };
};

export const openVersionHistory = () => {
  return (dispatch) => {
    dispatch({ type: OPEN_VERSION_HISTORY });
  };
};

export const closeVarsionHistory = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_VERSION_HISTORY });
  };
};

export const openTriggerSidebar = () => {
  return (dispatch) => {
    dispatch({ type: OPEN_TRIGGER_SIDEBAR });
  };
};

export const closeTriggerSidebar = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_TRIGGER_SIDEBAR });
  };
};

export const openActionSidebar = () => {
  return (dispatch) => {
    dispatch({ type: OPEN_ACTION_SIDEBAR });
  };
};

export const closeActionSidebar = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_ACTION_SIDEBAR });
  };
};

export const openTestModal = () => {
  return (dispatch) => {
    dispatch({ type: OPEN_TEST_MODAL });
  };
};

export const closeTestModal = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_TEST_MODAL });
  };
};
