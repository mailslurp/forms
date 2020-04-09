import React, {FunctionComponent} from "react";

interface StepProps {
  title: string
  step: number
  className?: string
}

const Step: FunctionComponent<StepProps> = (props) => {
  return (
    <section className={props.className}>
      <header className="mb-4 d-flex justify-content-start align-items-center">
          <span className="rounded-circle bg-primary text-light font-weight-bold text-monospace step">
            {props.step}
          </span>
        <h3 className="my-0 ml-3">{props.title}</h3>
      </header>
      <div>
        {props.children}
      </div>
    </section>
  )
}

export default Step;
