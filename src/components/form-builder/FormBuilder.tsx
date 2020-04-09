import React, {FunctionComponent} from "react";
import {FiPlusCircle} from 'react-icons/fi'
import {FormField} from "../../lib/types";

interface FormBuilderProps {
  formFields: Array<FormField>
  onChange: (f: Array<FormField>) => void
}

const FormBuilder: FunctionComponent<FormBuilderProps> = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <button className="btn btn-outline-primary border-dashed px-5">
          <span>
            <FiPlusCircle/>
          </span>
          <span className="ml-3">Add form input</span>
        </button>
      </div>
    </div>
  )
}

export default FormBuilder;
