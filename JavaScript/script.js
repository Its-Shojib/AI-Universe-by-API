let link = "https://openapi.programming-hero.com/api/ai/tools";

let loadData = async (isShowAll) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    let data = await res.json();
    let AI = data.data.tools;
    console.log(AI);
    ShowAI(AI,isShowAll);
}

let ShowAI = (tools,isShowAll) => {
    let container = document.getElementById("container")
    container.textContent = '';

    if (tools.length > 6 && !isShowAll) {
        document.getElementById("showAll").classList.remove("hidden");
    }
    else {
        document.getElementById("showAll").classList.add("hidden");
    }

    // Slice to 6 card
    if (!isShowAll) {
        tools = tools.slice(0, 6);
    }



    container.classList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    tools.forEach(tools => {
        let AICard = document.createElement("div")
        AICard.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
        <figure><img src="${tools?.image}" alt="" /></figure>
        <div class="card-body">
            <p class="font-semibold text-lg">Features</p>
            <ol>
            <li>${"1. "+tools.features[0]}</li>
            <li>${"1. "+tools.features[1]}</li>
            <li>${"1. "+tools.features[2]}</li>
            <ol>
            <br>
            <hr>
            <h2 class="card-title">${tools.name}</h2>
            <p><i class="fa-solid fa-calendar-days"></i> ${tools.published_in}</p>
        </div>
      </div>`;
        container.appendChild(AICard);
    });

}
let ShowAll = () => {
    loadData(true);
}
loadData();