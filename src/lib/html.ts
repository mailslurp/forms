import {FormElement} from "./types";

export const Html = {

  comment(str: string) {
    return `<!-- ${str} -->`
  },
  indent(str: string) {
    return `  ${str}`;
  }
}
export const Elements: { [key: string]: (...params: any) => FormElement } = {
  input(name: string, label?: string) {
    return {
      label,
      html: `<input type="text" name="${name}">`
    }
  },
  hidden(name: string, value: string) {
    return {
      html: `<input type="hidden" name="${name}" value="${value}">`
    }
  },
}
