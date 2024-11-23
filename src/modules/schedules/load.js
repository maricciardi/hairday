import { hoursLoad } from "../form/hours-load.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "./show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //Obtém a data do input
    const date = selectedDate.value

    //Busca os agendamentos na API 
    const dailySchedules = await scheduleFetchByDay({ date })
    //console.log(dailySchedules)

    //Mostra os agendamentos na direita da página
    schedulesShow({ dailySchedules })
    
    //Renderiza as horas disponíveis no form (horário futuro + não agendado)
    hoursLoad({ date, dailySchedules })
    

}