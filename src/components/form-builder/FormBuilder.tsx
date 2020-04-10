import React, {FunctionComponent, useState} from "react";
import {FiPlusCircle} from 'react-icons/fi'
import {FormElement, FormElements} from "../../lib/types";
import {FormElementModal} from "./FormElementModal";

interface FormBuilderProps {
  formElements: FormElements
  onChange: (f: FormElements) => void
}

const FormBuilder: FunctionComponent<FormBuilderProps> = (props) => {
  const size = Object.keys(props.formElements).length
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <section>
      {showModal &&
      <FormElementModal
        onConfirm={(f: FormElement) => {
          setShowModal(false)
          const clone = {...props.formElements}
          clone[size] = f;
          props.onChange(clone)
        }}
        onClose={() => setShowModal(false)}/>
      }
      <div className="card shadow-sm">
        <div className="card-body">
          {size > 0 &&
          <section>
            <hr/>
          </section>}
          <button className="btn btn-outline-primary border-dashed px-5"
                  onClick={() => {
                    setShowModal(!showModal)
                  }}>
          <span>
            <FiPlusCircle/>
          </span>
            <span className="ml-3">Add form input</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FormBuilder;
