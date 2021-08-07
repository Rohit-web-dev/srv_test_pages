
// ===============fetch Function================

class Fetch{
    async getCurrent(input){
        const myKey = "a18c7344fbd6a8235b5f0dc4add58526";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}
// ===============show Function=============

class UI{
    constructor(){
        this.uicontainer = document.getElementById('content');
        this.city;
    }

    populateUI(data){
        this.uicontainer.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">High of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
            <p class="card-text">Weather condition are described as: ${data.weather[0].description}</p>
            </div>
        </div> `;
        
    }
}

const ft = new Fetch();
const ui = new UI();

const search = document.getElementById("searchBox");
const button = document.getElementById("searchBtn");

button.addEventListener("click", () => {
    const currentVal = search.value;

    ft.getCurrent(currentVal).then((data) => {
        ui.populateUI(data);
    });
});


