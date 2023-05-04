// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import React from "react";

type DivProp = {
  content: string;
};

const MyDiv = (props: DivProp) => {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  );
};

export default MyDiv;
