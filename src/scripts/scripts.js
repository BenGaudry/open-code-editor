var textarea = document.getElementById('editor');
const htmlTags = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textaera', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'
]

function editing(){
    countRows();
    syntaxColoration();
}

function countRows(){
    var rowcounter = document.getElementById('rowcounter');
    
    var nbrLigne = 0;
    var ligns = textarea.value.split("\n");
    rowcounter.textContent = "";
    
    for (var i = 0; i < ligns.length; i++) {
        nbrLigne++;
        if(nbrLigne > 0){
            rowcounter.innerHTML += "<p>"+nbrLigne+"</p>";
        } else {
            rowcounter.innerHTML += "<p>1</p>";
        }
        
    }
}

function syntaxColoration(){
    paragraph = textarea.value;
    var regex = /<[a-zA-Z]+>/g;
    const found = paragraph.match(regex);
    console.log('found: ');
    console.log(found);
    
    var size = Object.keys(found).length;
    console.log('size : ' + size);

    for(var i = 0; i <= size; i++){
        console.log(found[i]);
        let tag = found[i];
        paragraph.replace(found[i], '<span>'+found[i]+'</span>');
    }
}

window.onload = () => {
    const input = document.getElementById('editor');
    const editor = CodeMirror.fromTextArea(input, {
        lineNumbers: true,
        theme: 'material-darker',
    });
}