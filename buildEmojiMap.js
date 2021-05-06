/* Scott Weaver 2021 🥂 */

let emojiMap = await buildJSON()
console.log(emojiMap)

async function fetchHTML() {
    let rez = await fetch('https://unicode.org/emoji/charts/full-emoji-list.html')
    let html = await rez.text()
    rez = await fetch('https://unicode.org/emoji/charts-13.1/full-emoji-modifiers.html')
    html += await rez.text()
    return html
}

async function buildJSON() {
    let htm = await fetchHTML()
    htm = htm.replace(/_&amp;_/g, "&")

    let findCategories = new RegExp("class='(bighead|mediumhead)'><a href='#(.*?)'", "g")
    let categories = [];
    while ((match = findCategories.exec(htm)) != null) {

        let entry = {}
        entry.category = match[2];
        entry.index = match.index;
        entry.scope = match[1] == "bighead" ? "major" : "minor"
        categories.push(entry)
    }


    let findCharacters = new RegExp("(?<=<td class='chars'>)(.*?)(?=</td>).*?(?<=<td class='name'>)(.*?)(?=</td>)", "gs")
    let characters = [];
    console.log("sweaverD.com")
    while ((match = findCharacters.exec(htm)) != null) {

        let entry = {}
        entry.key = match[1];
        entry.name = match[2];
        let major = categories.filter(c => c.scope == "major" && c.index < match.index).slice(-1)[0].category;
        let minor = categories.filter(c => c.scope == "minor" && c.index < match.index).slice(-1)[0].category;
        if(major!="component") major = major.charAt(0).toUpperCase() + major.slice(1) //special mark for major categories, except Component
        
        entry.cat = major + " " + minor
        characters.push(entry)
    }
    return JSON.stringify(characters)
}