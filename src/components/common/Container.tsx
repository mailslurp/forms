import React, {FunctionComponent} from "react";

export const Container: FunctionComponent<any> = (props) => {
  return (
    <div className="container py-5">{props.children}</div>
  )
}

