function furify() {
    try {
        var raw_json = document.getElementById("json_raw_input");
        raw_json = raw_json.value.trim();
        //document.removeChild('pre')
        //document.body.appendChild(document.createElement('pre')).innerHTML = syntaxHighlight(JSON.stringify(JSON.parse(raw_json), null, "\t"));
        document.getElementById('pretty').innerHTML = syntaxHighlight(JSON.stringify(JSON.parse(raw_json), null, 4));
        document.getElementById('clipboardCopy').className = "btn btn-primary"
    } catch {
        document.getElementById("json_raw_input").style.borderColor = "#dc3545";
    }
}

function disableCopy(element) {
    document.getElementById('clipboardCopy').className = "btn btn-primary disabled";
    document.getElementById("json_raw_input").style.border = document.createElement("textarea").style.border;
};

function copyToClipboard() {
    var raw_json = document.getElementById("json_raw_input").value.trim();
    copyText = JSON.stringify(JSON.parse(raw_json), null, 4)
    const textArea = document.createElement('textarea');
    textArea.style.position = "absolute";
    // to prevent scrolling on IE/Safari, place the element beside us... (not a perfect solution)
    textArea.style.top = "" + ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop) + "px";
    textArea.style.left = "-100%";
    textArea.textContent = copyText.trim();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    // Consider: visually indicate success... (see example below)
    textArea.parentNode.removeChild(textArea);
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}