
function buttonGetName(number = 60) {
    var names = getName(number)
    getDiv(number, names)
}

function getDiv(number = 60, names){
    document.getElementById("tab-pane-content-1").innerHTML = "";
    // var names = getName(number)
    var fullContent = ''
    var content = ''
    var innerDivContent
    var div
    for (let i = 0; i < number; ++i) {
        if (!((i+1) % 10)) {
            div = document.createElement("div")
            div.className = 'col-lg-2 col-md-6 col-12 mb-4 mb-lg-3 lh-lg'
            innerDivContent = document.createElement('div')
            innerDivContent.className = 'custom-block bg-white shadow-lg text-center'
            if (fullContent == '') {
                fullContent = content
            } else {
                fullContent = fullContent + content
            }

            innerDivContent.innerHTML = fullContent
            content = ''
            fullContent = ''
            div.appendChild(innerDivContent)
            document.getElementById("tab-pane-content-1").appendChild(div);
        }

        if (content == '') {
            content = names[i]+ '</br>'
        } else {
            content = content + names[i] + '</br>'
        }
    }
    // document.getElementById("tab-pane-content-1").appendChild(div);
    // window.location.reload("#tab-pane-content-1")
}