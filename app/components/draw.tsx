import { useState } from "react";
import { Input } from "./ui-lib";
import { IconButton } from "./button";

export function Draw() {
  const [prompt, setPrompt] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      Prompt:
      <Input
        value={prompt}
        onInput={(e) => setPrompt(e.currentTarget.value)}
      ></Input>
      <IconButton
        text="Draw"
        style={{
          backgroundColor: "cyan",
        }}
      ></IconButton>
    </div>
  );
}
