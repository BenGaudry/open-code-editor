var textarea = document.getElementById('editor');
const htmlTags = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textaera', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'
]

function editing(){
    console.log('editing...');
}

var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    mode: 'text/plain',
    theme: 'ayu-dark',
    direction: 'ltr',
    indentUnit : 4,
    smartIndent: true,
    indentWithTabs: true,
    maxHighlightLength: 'Infinity',
});

// window.onload = () => {editor = CodeMirror.fromTextArea(textarea, {mode: 'text/plain',});}

function changeMode(){
    let select = document.getElementById('editor-mode');
    newMode = select.value;
    editor.setOption('mode', newMode);
}

function detectLanguage(){
    var val = modeInput.value, m, mode, spec;
    if (m = /.+\.([^.]+)$/.exec(val)) {
        var info = CodeMirror.findModeByExtension(m[1]);
        if (info) {
        mode = info.mode;
        spec = info.mime;
        }
    } else if (/\//.test(val)) {
        var info = CodeMirror.findModeByMIME(val);
        if (info) {
        mode = info.mode;
        spec = val;
        }
    } else {
        mode = spec = val;
    }
    if (mode) {
        editor.setOption("mode", spec);
        CodeMirror.autoLoadMode(editor, mode);
        document.getElementById("modeinfo").textContent = spec;
    } else {
        alert("Could not find a mode corresponding to " + val);
    }
}


function emmet(){
    let sel = editor.getSelection();
    if(sel.includes('!')){
        editor.replaceSelection('<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>Document</title>\n</head>\n<body>\n\n</body>\n</html>');
    } else if (sel.match(/[a-z]+\.[a-zA-Z]+/)) {
        hey = 'hey';
    }
}

editor.on('keypress', function(cm, event) {
    event = {
        type: "keypress",
        keyCode : event.keyCode ,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey
    };

    console.log(event);
    
    let content = editor.getValue();
    if(event.keyCode  == 34){
        content += '"';
        editor.setValue(content);
    } else if (event.keyCode  == 39) {
        content += "'";
        editor.setValue(content);
    } else if (event.keyCode  == 40) {
        content += ')';
        editor.setValue(content);
    } else if (event.keyCode  == 123) {
        content += "}";
        editor.setValue(content);
    } else if (event.keyCode  == 91) {
        content += "]";
        editor.setValue(content);
    } else if (event.keyCode == 60) {
        content += ">";
        editor.setValue(content);
    }
    
});