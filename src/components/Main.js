import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";
import CenterPanel from "./Panels/CenterPanel";
import { StrictMode } from "react";

/* Main game panel */
export default function Main() {
  return (
    <StrictMode>
      <main className="Main">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </main>
    </StrictMode>
  );
}
