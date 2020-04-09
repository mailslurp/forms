export type FormField = string

export interface ToProvider {
  fieldName: '_to' | '_toAlias',
  fieldValue: string
}

export interface FormMeta {
  toProvider: ToProvider,
}
