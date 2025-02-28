import dompurify from 'dompurify';
import { marked } from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: true,
  pedantic: false,
  smartypants: false,
  headerIds: false,
  mangle: false,
});

export const markdownToHTML = (input: string) => {
  return dompurify.sanitize(marked.parse(input));
};
