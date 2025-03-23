import React, { createContext, useContext, useState } from "react";

interface ScrollContextType {
  triggerScrollToHome: boolean;
  setTriggerScrollToHome: (value: boolean) => void;

  triggerScrollToProjects: boolean;
  setTriggerScrollToProjects: (value: boolean) => void;

  triggerScrollToTimeline: boolean;
  setTriggerScrollToTimeline: (value: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  triggerScrollToHome: false,
  setTriggerScrollToHome: () => {},

  triggerScrollToProjects: false,
  setTriggerScrollToProjects: () => {},

  triggerScrollToTimeline: false,
  setTriggerScrollToTimeline: () => {},
});

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [triggerScrollToHome, setTriggerScrollToHome] = useState(false);
  const [triggerScrollToProjects, setTriggerScrollToProjects] = useState(false);
  const [triggerScrollToTimeline, setTriggerScrollToTimeline] = useState(false);

  return (
    <ScrollContext.Provider
      value={{
        triggerScrollToHome,
        setTriggerScrollToHome,
        triggerScrollToProjects,
        setTriggerScrollToProjects,
        triggerScrollToTimeline,
        setTriggerScrollToTimeline,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
