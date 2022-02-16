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

export function getfolder(e) {
  var files = e.target.files;
  var path = files[0].webkitRelativePath;
  var Folder = path.split("/");
  alert(Folder[0]);
}

export function downloadFile(file) {
  const blob = b64toBlob(file.data, file.name);
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = file.name
  a.click()
  a.remove()
  window.URL.revokeObjectURL(url);
}

export function makeURL(file){
  const blob = b64toBlob(file.data, file.name);
  const url = window.URL.createObjectURL(blob);
  return url;
}

export function b64toBlob (image, fileName, sliceSize = 512) {
  const mimeType = image?.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]   // image/jpeg
  const realData = image.split(',')[1]   // 이 경우에선 /9j/4AAQSkZJRgABAQAAAQABAAD...

  if (realData === '' || realData === undefined) return

  const byteCharacters = atob(realData)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)
    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    byteArrays.push(byteArray)
  }

  const blob = new Blob(byteArrays, { type: mimeType })
  return blob
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);  // 인코딩
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.body.append(script);
}

export function loadStylesheet(src) {
  let link = document.createElement('link');
  link.href = src;
  link.rel = "stylesheet"
  document.body.append(link);
}