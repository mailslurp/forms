export enum FormElementType {
  TEXTAREA, INPUT, SELECT, RADIO, CHECKBOX, FILE
}

export interface FormElement {
  label?: string | undefined;
  html: string;
}

export type FormElements = { [key: number]: FormElement }

export interface ToProvider {
  fieldName: '_to' | '_toAlias',
  fieldValue: string
}

export interface FormMeta {
  toProvider: ToProvider,
}
