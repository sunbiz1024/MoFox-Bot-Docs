export function getReadingTime(text, charsPerMinute = 400) {
  const textLength = text.trim().replace(/\s/g, '').length;
  if (textLength === 0) {
    return '';
  }
  const minutes = Math.ceil(textLength / charsPerMinute);
  return `阅读时间约 ${minutes} 分钟`;
}