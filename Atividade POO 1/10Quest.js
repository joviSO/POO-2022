function milisegundosParaDateTime(milisegundos){

  let dias = milisegundos/86400000
  let restoDias = milisegundos%86400000

  let horas = restoDias/3600000
  let restoHoras = restoDias%3600000

  let minutos = restoHoras/60000
  let restoMinutos = restoHoras%60000

  let segundos = restoMinutos/1000
  

  let padrao = "dias: " + parseInt(dias) + "\n" + "horas: " + parseInt(horas) + "\n" + "minutos: " + parseInt(minutos) + "\n" + "segundos: " + parseInt(segundos)

  console.log(padrao)
};

let milisegundos = 960001000
milisegundosParaDateTime(milisegundos)
