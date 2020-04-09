export const Forms = {
  hidden(name: string, value: string): string {
    return `<input type="hidden" name="${name}" value="${value}">`
  },
  comment(str: string) {
    return `<!-- ${str} -->`
  },
  indent(str: string) {
    return `  ${str}`;
  }
}
