export const replaceHtmlTag = (str: string) => {
  return str
    .replace(/<\/p>/g, '\n')
    .replace(/&nbsp;/g, '')
    .replace(/<[^>]*>?/gm, '');
};
