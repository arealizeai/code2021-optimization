import React, { useState } from "react";
import "./styles.css";
import Renderer from "./Renderer";
import JsonViewer from "./JsonViewer";

export default function App() {
  const [jsonValue, setJsonValue] = useState(
    JSON.stringify({
      planBoundary: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 100,
          y: 0,
        },
        {
          x: 100,
          y: 100,
        },
        {
          x: 0,
          y: 100,
        },
      ],

      rooms: {
        1: {
          id: 1,
          width: 20,
          height: 20,
          anchorTopLeftX: -100,
          anchorTopLeftY: 0,
          type: "workRoom",
        },
        2: {
          id: 2,
          width: 20,
          height: 20,
          anchorTopLeftX: -80,
          anchorTopLeftY: 0,
          type: "workRoom",
        },
        3: {
          id: 3,
          width: 20,
          height: 20,
          anchorTopLeftX: -80,
          anchorTopLeftY: 0,
          type: "workRoom",
        },
        4: {
          id: 4,
          width: 60,
          height: 20,
          anchorTopLeftX: -100,
          anchorTopLeftY: 20,
          type: "meetRoom",
        },
        5: {
          id: 4,
          width: 40,
          height: 20,
          anchorTopLeftX: -40,
          anchorTopLeftY: 20,
          type: "meetRoom",
        },
        6: {
          id: 4,
          width: 40,
          height: 40,
          anchorTopLeftX: -60,
          anchorTopLeftY: 40,
          type: "meetRoom",
        },
        7: {
          id: 4,
          width: 40,
          height: 40,
          anchorTopLeftX: -100,
          anchorTopLeftY: 40,
          type: "meetRoom",
        },
      },
    })
  );

  return (
    <div className="App">
      <h1>Arealize Start Code Hackathon 2021</h1>
      <div className="App-container">
        <div className="App-container__json-viewer">
          <JsonViewer jsonValue={jsonValue} setJsonValue={setJsonValue} />
        </div>
        <div className="App-container__renderer">
          <Renderer jsonValue={jsonValue} />
        </div>
      </div>
    </div>
  );
}
