import React from "react";
import "./HTMLDisplay.css";
import Config from "../../config";
import {FormElements, FormMeta} from "../../lib/types";
import {Elements, Html} from "../../lib/html";

interface HTMLDisplayProps {
  formMeta?: FormMeta,
  formElements: FormElements,
}

/**
 * Take formFields and formMeta and construct an embeddable form
 * @param props
 */
function getEmbeddableForm(props: HTMLDisplayProps): string {
  console.log("Get embed", props)
  const lines: string[] = [];
  // need formMeta toProvider and
  if (!props.formMeta || props.formMeta.toProvider.fieldValue === "") {
    lines.push(Html.comment("Set options first"))
  } else if (Object.keys(props.formElements).length === 0) {
    lines.push(Html.comment("Great! Now add form fields"))
  } else {
    lines.push(`<form action="${Config.form.action}" method="${Config.form.method}" enctype="${Config.form.enctype}">`);
    // now add each form element
    const toProvider = props.formMeta.toProvider;
    lines.push(Html.indent(Elements.hidden(toProvider.fieldName, toProvider.fieldValue).html))
    Object.values(props.formElements).forEach(formElement => {
      lines.push(Html.indent(formElement.html))
    })
    lines.push(`</form>`);
  }
  return lines.join("\n")
}

export default function HTMLDisplay(props: HTMLDisplayProps) {
  console.log("reupdate html display")
  const disabled = !props.formMeta || !props.formMeta.toProvider;
  const html = getEmbeddableForm(props)
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="HTMLBuilder">
          <textarea
            className="form-control text-monospace form-control-sm text-danger"
            readOnly
            value={html}/>
        </div>
        <div className="pt-3 text-center">
          <button disabled={disabled} className="btn btn-primary">Copy HTML</button>
          <button disabled={disabled} className="btn btn-outline-primary ml-3">Try out form</button>
        </div>
      </div>
    </div>
  )
}

