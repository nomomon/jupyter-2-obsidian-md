
const download = (filename: string, text: string) => {
    var element = document.createElement('a');

    if (text.slice(0, 4) !== "data") {
        text = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
    }

    element.setAttribute('href', text);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

export default download;