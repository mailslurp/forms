import React from "react";
import "./HTMLDisplay.css";
import Config from "../../config";
import {FormField, FormMeta} from "../../lib/types";
import {Forms} from "../../lib/forms";

interface HTMLDisplayProps {
  formMeta?: FormMeta,
  formFields: Array<FormField>
}

/**
 * Take formFields and formMeta and construct an embeddable form
 * @param props
 */
function getEmbeddableForm(props: HTMLDisplayProps): string {
  const lines: string[] = [];
  // need formMeta toProvider and
  if (!props.formMeta || props.formMeta.toProvider.fieldValue === "") {
    lines.push(Forms.comment("Set options first"))
  } else if (props.formFields.length === 0) {
    lines.push(Forms.comment("Great! Now add form fields"))
  } else {
    lines.push(`<form action="${Config.form.action}" method="${Config.form.method}" enctype="${Config.form.enctype}">`);
    // now add each form element
    const toProvider = props.formMeta.toProvider;
    lines.push(Forms.hidden(toProvider.fieldName, toProvider.fieldValue))
    props.formFields.forEach(formField => {
      lines.push(Forms.indent(formField))
    })
    lines.push(`</form>`);
  }
  return lines.join("\n")
}

export default function HTMLDisplay(props: HTMLDisplayProps) {
  const disabled = !props.formMeta || !props.formMeta.toProvider;
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="HTMLBuilder">
          <textarea
            className="form-control text-monospace form-control-sm text-danger" readOnly
            value={getEmbeddableForm(props)}/>
        </div>
        <div className="pt-3 text-center">
          <button disabled={disabled} className="btn btn-primary">Copy HTML</button>
          <button disabled={disabled} className="btn btn-outline-primary ml-3">Try out form</button>
        </div>
      </div>
    </div>
  )
}

