export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available')

    hours.forEach(( available ) => {
        available.addEventListener("click", (selected) => {

            //Remove a classe de todas lis não selecionadas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            //Adiciona a classe na li clicada
            selected.target.classList.add("hour-selected")
        })
    })
    
}