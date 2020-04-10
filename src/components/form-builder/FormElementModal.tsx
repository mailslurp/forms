import React, {FunctionComponent, useState} from "react";
import {FormElement, FormElementType} from "../../lib/types";
import {Elements} from "../../lib/html";

interface ModalProps {
  onConfirm: (f: FormElement) => void;
  onClose: () => void;
}


function buildElement(elementType: FormElementType, name: string, label: string | undefined) {
  console.log("here", elementType, name, label);
  switch (elementType) {
    case FormElementType.INPUT:
      return Elements.input(name, label)
    default:
      throw "Unknown element type"
  }
}

export const FormElementModal: FunctionComponent<ModalProps> = (props) => {
  const [name, setName] = useState<string | undefined>()
  const [label, setLabel] = useState<string | undefined>()
  const [elementType, setElementType] = useState<FormElementType | undefined>(FormElementType.INPUT)
  return (
    <div className="modal form-modal" role="dialog">
      <form className="form" onSubmit={(e) => {
        e.preventDefault()
        props.onConfirm(buildElement(elementType!!, name!!, label))
      }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add form field</h5>
              <button type="button"
                      className="close"
                      aria-label="Close"
                      onClick={() => props.onClose()}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="label">Label</label>
                <input id="label" type="text" className="form-control"
                       onChange={e => setLabel(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="form-control"
                       onChange={e => setName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="types">Input type</label>
                <select id="types" className="form-control" value={elementType}
                        onChange={e => setElementType(e.target.value as any)}>
                  <option value={FormElementType.INPUT}>Text input</option>
                </select>
              </div>

            </div>
            <div className="modal-footer">
              <button
                // onClick={() => props.onConfirm()}
                type="submit"
                className="btn btn-primary">Add element
              </button>
              <button type="button"
                      className="btn btn-secondary"
                      onClick={() => props.onClose()}>
                Close
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
