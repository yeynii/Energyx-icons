export function doCopy(text) {
  if (!document.queryCommandSupported("copy")) {
    return alert("복사하기가 지원되지 않는 브라우저입니다.");
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.top = 0;
  textarea.style.left = 0;
  textarea.style.position = "fixed";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function download(file, filename) {
  const url = window.URL.createObjectURL(file)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  a.remove()
  window.URL.revokeObjectURL(url);
}
