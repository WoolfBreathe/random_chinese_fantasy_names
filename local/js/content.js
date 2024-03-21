
function buttonGetName(number = 40) {
    const isFemaleDocument = document.getElementById("tab-pane-1-isFemale")
    let isFemaleValue = undefined
    if (!(isFemaleDocument.options[isFemaleDocument.selectedIndex].value === '')) {
        isFemaleValue = isFemaleDocument.options[isFemaleDocument.selectedIndex].value
    }
    const styleDocument = document.getElementById("tab-pane-1-style")
    let styleValue = undefined
    if (!(styleDocument.options[styleDocument.selectedIndex].value === '')) {
        styleValue = styleDocument.options[styleDocument.selectedIndex].value
    }
    let familyName = document.getElementById("tab-pane-1-familyName")
    let middleCharacter = document.getElementById("tab-pane-1-middleCharacter")

    const options = {
        isFemale: isFemaleValue,
        style: styleValue,
        familyName: familyName.value,
        middleCharacter: middleCharacter.value
    }

    let names = getName(number, options)
    getDiv(number, 'tab-pane-content-1', names)
}

function buttonGetDao(number = 40) {
    const isFemaleDocument = document.getElementById("tab-pane-2-isFemale")
    let isFemaleValue = undefined
    if (!(isFemaleDocument.options[isFemaleDocument.selectedIndex].value === '')) {
        isFemaleValue = isFemaleDocument.options[isFemaleDocument.selectedIndex].value
    }
    const titleDocument = document.getElementById("tab-pane-2-title")
    let titleValue = undefined
    if (!(titleDocument.options[titleDocument.selectedIndex].value === '')) {
        titleValue = titleDocument.options[titleDocument.selectedIndex].value
    }
    let firstCharacter = document.getElementById("tab-pane-2-firstCharacter")

    const options = {
        isFemale: isFemaleValue,
        title: titleValue,
        firstCharacter: firstCharacter.value
    }

    let namesResult = getDao(number, options)
   
    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-2', names)
}

function buttonGetSkill(number = 40) {
    const lengthDocument = document.getElementById("tab-pane-2-length")
    let lengthValue = undefined
    if (!(lengthDocument.options[lengthDocument.selectedIndex].value === '')) {
        lengthValue = lengthDocument.options[lengthDocument.selectedIndex].value
    }
    const kindDocument = document.getElementById("tab-pane-2-kind")
    let kindValue = undefined
    if (!(kindDocument.options[kindDocument.selectedIndex].value === '')) {
        kindValue = kindDocument.options[kindDocument.selectedIndex].value
    }
    const prefixDocument = document.getElementById("tab-pane-2-prefix")
    let prefixValue = undefined
    if (!(prefixDocument.options[prefixDocument.selectedIndex].value === '')) {
        prefixValue = prefixDocument.options[prefixDocument.selectedIndex].value
    }
    const numfixDocument = document.getElementById("tab-pane-2-numfix")
    let numfixValue = undefined
    if (!(numfixDocument.options[numfixDocument.selectedIndex].value === '')) {
        numfixValue = numfixDocument.options[numfixDocument.selectedIndex].value
    }

    const options = {
        length: lengthValue,
        kind: kindValue,
        prefix: prefixValue,
        numfix: numfixValue
    }

    let namesResult = getSkill(number, options)
   
    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-3', names)
}

function buttonGetBook(number = 40) {
    const lengthDocument = document.getElementById("tab-pane-4-length")
    let lengthValue = undefined
    if (!(lengthDocument.options[lengthDocument.selectedIndex].value === '')) {
        lengthValue = lengthDocument.options[lengthDocument.selectedIndex].value
    }
    const mainkindDocument = document.getElementById("tab-pane-4-mainkind")
    let mainkindValue = undefined
    if (!(mainkindDocument.options[mainkindDocument.selectedIndex].value === '')) {
        mainkindValue = mainkindDocument.options[mainkindDocument.selectedIndex].value
    }

    const postkindDocument = document.getElementById("tab-pane-4-postkind")
    let postkindValue = undefined
    if (!(postkindDocument.options[postkindDocument.selectedIndex].value === '')) {
        postkindValue = postkindDocument.options[postkindDocument.selectedIndex].value
    }

    const prefixDocument = document.getElementById("tab-pane-4-prefix")
    let prefixValue = undefined
    if (!(prefixDocument.options[prefixDocument.selectedIndex].value === '')) {
        prefixValue = prefixDocument.options[prefixDocument.selectedIndex].value
    }
    const postfixDocument = document.getElementById("tab-pane-4-postfix")
    let postfixValue = undefined
    if (!(postfixDocument.options[postfixDocument.selectedIndex].value === '')) {
        postfixValue = postfixDocument.options[postfixDocument.selectedIndex].value
    }

    const options = {
        length: lengthValue,
        mainkind: mainkindValue,
        postkind: postkindValue,
        prefix: prefixValue,
        postfix: postfixValue
    }

    let namesResult = getBook(number, options)
   
    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-4', names)
}

function buttonGetCreature(number = 40) {
    const categoryDocument = document.getElementById("tab-pane-5-category")
    let categoryValue = undefined
    if (!(categoryDocument.options[categoryDocument.selectedIndex].value === '')) {
        categoryValue = categoryDocument.options[categoryDocument.selectedIndex].value
    }
    const rarityDocument = document.getElementById("tab-pane-5-rarity")
    let rarityValue = undefined
    if (!(rarityDocument.options[rarityDocument.selectedIndex].value === '')) {
        rarityValue = rarityDocument.options[rarityDocument.selectedIndex].value
    }

    const options = {
        category: categoryValue,
        rarity: rarityValue
    }

    let namesResult = getCreature(number, options)
    console.log(namesResult)
    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-5', names)
}

function buttonGetMaterial(number = 40) {
    const kindDocument = document.getElementById("tab-pane-6-kind")
    let kindValue = undefined
    if (!(kindDocument.options[kindDocument.selectedIndex].value === '')) {
        kindValue = kindDocument.options[kindDocument.selectedIndex].value
    }
    const rarityDocument = document.getElementById("tab-pane-6-rarity")
    let rarityValue = undefined
    if (!(rarityDocument.options[rarityDocument.selectedIndex].value === '')) {
        rarityValue = rarityDocument.options[rarityDocument.selectedIndex].value
    }

    const postfixDocument = document.getElementById("tab-pane-6-postfix")
    let postfixValue = undefined
    if (!(postfixDocument.options[postfixDocument.selectedIndex].value === '')) {
        postfixValue = postfixDocument.options[postfixDocument.selectedIndex].value
    }

    const options = {
        kind: kindValue,
        rarity: rarityValue,
        postfix: postfixValue
    }

    let namesResult = getMaterial(number, options)
    
    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-6', names)
}

function buttonGetAlchemy(number = 40) {
    const kindDocument = document.getElementById("tab-pane-7-kind")
    let kindValue = undefined
    if (!(kindDocument.options[kindDocument.selectedIndex].value === '')) {
        kindValue = kindDocument.options[kindDocument.selectedIndex].value
    }

    let namesResult = getAlchemy(number, kindValue)
    console.log(namesResult)
    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-7', names)
}

function buttonGetTalisman(number = 40) {
    const kindDocument = document.getElementById("tab-pane-8-kind")
    let kindValue = undefined
    if (!(kindDocument.options[kindDocument.selectedIndex].value === '')) {
        kindValue = kindDocument.options[kindDocument.selectedIndex].value
    }

    const rarityDocument = document.getElementById("tab-pane-8-rarity")
    let rarityValue = undefined
    if (!(rarityDocument.options[rarityDocument.selectedIndex].value === '')) {
        rarityValue = rarityDocument.options[rarityDocument.selectedIndex].value
    }

    const postfixDocument = document.getElementById("tab-pane-8-postfix")
    let postfixValue = undefined
    if (!(postfixDocument.options[postfixDocument.selectedIndex].value === '')) {
        postfixValue = postfixDocument.options[postfixDocument.selectedIndex].value
    }

    const options = {
        kind: kindValue,
        rarity: rarityValue,
        postfix: postfixValue
    }

    let namesResult = getTalisman(number, options)

    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-8', names)
}

function buttonGetClan(number = 40) {
    const kindDocument = document.getElementById("tab-pane-9-kind")
    let kindValue = undefined
    if (!(kindDocument.options[kindDocument.selectedIndex].value === '')) {
        kindValue = kindDocument.options[kindDocument.selectedIndex].value
    }

    let namesResult = getClan(number, kindValue)

    getDiv(number, 'tab-pane-content-9', namesResult)
}

function buttonGetNation(number = 40) {
    const kindDocument = document.getElementById("tab-pane-10-kind")
    let kindValue = undefined
    if (!(kindDocument.options[kindDocument.selectedIndex].value === '')) {
        kindValue = kindDocument.options[kindDocument.selectedIndex].value
    }

    let namesResult = getNation(number, kindValue)

    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-10', names)
}

function buttonGetLocation(number = 40) {
    const kindDocument = document.getElementById("tab-pane-11-kind")
    let kindValue = undefined
    if (!(kindDocument.options[kindDocument.selectedIndex].value === '')) {
        kindValue = kindDocument.options[kindDocument.selectedIndex].value
    }

    let namesResult = getLocations(number, kindValue)

    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-11', names)
}

function buttonGetZone(number = 40) {
    const kindDocument = document.getElementById("tab-pane-12-kind")
    let kindValue = undefined
    if (!(kindDocument.options[kindDocument.selectedIndex].value === '')) {
        kindValue = kindDocument.options[kindDocument.selectedIndex].value
    }

    let namesResult = getZone(number, kindValue)

    let names = []

    for (let i = 0; i < number; ++i) {
        names.push(namesResult[i]['name'])
    }

    getDiv(number, 'tab-pane-content-12', names)
}


function getDiv(number = 60, tab, names) {
    document.getElementById(tab).innerHTML = "";
    let fullContent = names[0] + '</br>'
    let content = ''
    let innerDivContent
    let div
    for (let i = 1; i < number+1; ++i) {
        if (!(i % 10)) {
            div = document.createElement("div")
            div.className = 'col-lg-3 col-md-6 col-12 mb-4 mb-lg-3 lh-lg'
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
            document.getElementById(tab).appendChild(div);
        }

        if (content == '') {
            content = names[i] + '</br>'
        } else {
            content = content + names[i] + '</br>'
        }
    }
}