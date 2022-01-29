import { useState } from "react";
//unit testing to build a custom Hook that allows us to manage the visual mode of any component.
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //transition to a new mode
  function transition(current, replace=false) {
    replace && back();
    let newHistory = [...history];
    newHistory.push(current);
    setHistory(newHistory);
    setMode(current);
  }
  //return to the previous page
  function back() {
    let newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
    setMode(newHistory[newHistory.length - 1]);
  }
  return { mode, transition, back };
}
