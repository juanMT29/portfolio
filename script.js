let typed = new Typed('.typed', {
    strings: [
        '<i class="title">Juan Martin Torres</i>', 
        '<i class="title">Programming Student</i>'
    ],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 100,
    backDelay: 2000,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
});


let flags = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]")

const changeLanguage = async language=>{
    let requestJson = await fetch(`./lenguages/${language}.json`)
    let texts = await requestJson.json()

    for(let textToChange of textsToChange){
        let section = textToChange.dataset.section;
        let value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value]
    }
}

flags.addEventListener("click", (e)=>{
    changeLanguage(e.target.parentElement.dataset.language)
});
