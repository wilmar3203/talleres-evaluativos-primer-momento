/* La luna de Endor pierde temperatura día a día, para ello 
hay que hacer un monitoreo constante, Cree una función de flecha que 
permita calcular la temperatura media de la luna a partir de la 
temperatura máxima y mínima de cada día */

let temperaturaMedia = (tempMax,tempMin) => ((tempMax + tempMin) / 2)

    let temperaturaDia = temperaturaMedia(35,18)
     
     console.log(`La temperatura media de la Luna de Endor en este dia fue ${temperaturaDia} grados`);
   
    
