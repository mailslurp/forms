import React, {FunctionComponent, useState} from "react";
import {FormMeta, ToProvider} from "../../lib/types";

interface SettingsInputProps {
  formMeta?: FormMeta;
  onChange: (f?: FormMeta) => void
}

const SettingsInput: FunctionComponent<SettingsInputProps> = (props) => {
  const [_to, set_to] = useState("")

  function emitChange(value: string) {
    set_to(value)
    if (/.+@.+/.test(value)) {
      const toProvider: ToProvider = {
        fieldName: "_to",
        fieldValue: value
      }
      const formMeta = {toProvider}
      props.onChange(formMeta)
    } else {
      props.onChange(undefined)
    }
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <form className="form-inline">
          <div className="form-group mb-0">
            <label htmlFor="emailAddress" className="mr-3">Email address</label>
            <input type="email"
                   className="form-control"
                   id="emailAddress"
                   aria-describedby="emailHelp"
                   placeholder=""
                   value={_to}
                   onChange={value => emitChange(value.target.value)}
            />
          </div>
          <div className="form-group d-block w-100">
            <small id="emailHelp" className="form-text text-muted">This is where form will data will be sent to.</small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SettingsInput;
