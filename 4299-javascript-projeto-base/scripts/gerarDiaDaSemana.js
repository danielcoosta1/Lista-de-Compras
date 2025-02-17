
function gerarDiaDaSemana(){

    const data = new Date();
    
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaSemana = diasSemana[data.getDay()]; // Dia da semana (ex: "Segunda-feira")
    const dia = String(data.getDate()).padStart(2, '0'); // Dia do mês (ex: "31")
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês (ex: "10")
    const ano = data.getFullYear(); // Ano (ex: "2022")
    const horas = String(data.getHours()).padStart(2, '0'); // Horas (ex: "08")
    const minutos = String(data.getMinutes()).padStart(2, '0'); // Minutos (ex: "30")
    
    const dataCompleta = `${diaSemana} (${dia}/${mes}/${ano}) às ${horas}:${minutos}`;

    return dataCompleta;
}

export default gerarDiaDaSemana;