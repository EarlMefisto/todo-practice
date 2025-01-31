import { useState, MouseEvent } from "react";
import { FullInput } from "./FulInput";
import { Input } from "./Input";
import { Button } from "./Button";

export const AboutInput = () => {
  const [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  let [title, setTitle] = useState("");

  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message]);
  };

  const callBackButtonHandler = () => {
    addMessage(title);
    setTitle("");
  };

  return (
    <div>
      <FullInput addMessage={addMessage} />
      <Input setTitle={setTitle} title={title} />
      <Button buttonName="+" callBack={callBackButtonHandler} />
      {message.map((m, index) => {
        return <div key={index}>{m.message}</div>;
      })}
    </div>
  );
};
