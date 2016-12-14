myapp.controller('rutasController', function(){
  console.log('Controlador de rutas');
    
    
   var ruta= [
       
       {
        nombre:"Quitus Colonial- Universidad Central",
        horarioLV: "Lunes-Viernes",
        flotaLV: 20,
        horaLV: "05:26-19:00",
        interLVP:"0:09",
        interLVN:"0:10",
        horarioS: "Sábado",
        flotaS: 14,
        horaS:"05:50-18:30",
        interSP:"0:12",
        interSN:"0:12",
        horarioDF: "Domingo-Feriado",
        flotaDF: 10,
        horaDF:"07:00-18:00",
        interDFP:"0:00",
        interDFN:"0:14",
        Observaciones: "Desde Quitus- colonial se despacha intercaladamente: 2 Unidades por el Capulí"    
        
        },
            
         {
        nombre:"Jardín del Valle- Las Casas",
        horarioLV: "Lunes-Viernes",
        flotaLV: 16,
        horaLV: "06:00-19:00",
        interLVP:"0:09",
        interLVN:"0:10",
        horarioS: "Sábado",
        flotaS: 8,
        horaS:"06:30-18:30",
        interSP:"0:12",
        interSN:"0:12",
        horarioDF: "Domingo-Feriado",
        flotaDF: 8,
        horaDF:"07:00-18:00",
        interDFP:"0:00",
        interDFN:"0:14",
        Observaciones: "Salen de Buenos Aires los suigientes turnos: 05:38,06:01 y 06:29. Los turnos despachados desde Alma Lojana a Las 11:00, 11:30, 12:00, 16:00, 16:30, 17:00, 17:30 retornan a Buenos Aires."    
        
        },
        
        
        {
        nombre:"Ciudad Serrana-San José de Cutuglahua-San Roque",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:24-19:00",
        interLVP:"0:14",
        interLVN:"0:16",
        horarioS: "Sábado",
        flotaS: 12,
        horaS:"04:24-18:30",
        interSP:"0:16",
        interSN:"0:16",
        horarioDF: "Domingo-Feriado",
        flotaDF: 12,
        horaDF:"05:00-18:00",
        interDFP:"0:00",
        interDFN:"0:20",
        Observaciones: "Ruta que se alterna con la de Santo Domingo (Las unidades que venga de San José regresan a Santo Domingo)."    
        
        },
        
        {
        nombre:"Santo Domingo de Cutuglahua-San Roque",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:30-19:07",
        interLVP:"0:14",
        interLVN:"0:16",
        horarioS: "Sábado",
        flotaS: 12,
        horaS:"04:30-18:38",
        interSP:"0:16",
        interSN:"0:16",
        horarioDF: "Domingo-Feriado",
        flotaDF: 12,
        horaDF:"05:06-18:10",
        interDFP:"0:00",
        interDFN:"0:20",
        Observaciones: "Ruta que se alterna con la de San José (Las unidades que venga de Santo Domingo regresan a San José )." 
        },
        
        {
        nombre:"Parque MetroSur-San Juan de Turubamba-Marín",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:44-19:00",
        interLVP:"0:14",
        interLVN:"0:14",
        horarioS: "Sábado",
        flotaS: 9,
        horaS:"05:30-18:30",
        interSP:"0:18",
        interSN:"0:18",
        horarioDF: "Domingo-Feriado",
        flotaDF: 7,
        horaDF:"06:00-18:00",
        interDFP:"0:00",
        interDFN:"0:20",
        Observaciones: " " 
        },
       
       {
        nombre:"Ciudad Jardín-Caupicho-Marín",
        horarioLV: "Lunes-Viernes",
        flotaLV: 10,
        horaLV: "04:44-19:00",
        interLVP:"0:15",
        interLVN:"0:15",
        horarioS: "Sábado",
        flotaS: 8,
        horaS:"05:14-18:30",
        interSP:"0:18",
        interSN:"0:18",
        horarioDF: "Domingo-Feriado",
        flotaDF: 7,
        horaDF:"05:00-18:00",
        interDFP:"0:00",
        interDFN:"0:18",
        Observaciones: " " 
        },
       
       {
        nombre:"Ciudad Jardín-Garrochal-Santo Tomás 1-Santo Tomás 2-Marín",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:29-19:06",
        interLVP:"0:12",
        interLVN:"0:14",
        horarioS: "Sábado",
        flotaS: 12,
        horaS:"04:29-18:38",
        interSP:"0:16",
        interSN:"0:16",
        horarioDF: "Domingo-Feriado",
        flotaDF: 12,
        horaDF:"05:00-18:09",
        interDFP:"0:00",
        interDFN:"0:18",
        Observaciones: "Ruta Que se alterna con la Terranova (Las unidades que vengan por el Garrochal regresa a Terranova)." 
        },
       
       {
        nombre:"Ciudad Jardín-Terranova-Venecia-Marín",
        horarioLV: "Lunes-Viernes",
        flotaLV: 12,
        horaLV: "04:24-19:00",
        interLVP:"0:15",
        interLVN:"0:15",
        horarioS: "Sábado",
        flotaS: 12,
        horaS:"04:29-18:30",
        interSP:"0:18",
        interSN:"0:18",
        horarioDF: "Domingo-Feriado",
        flotaDF: 12,
        horaDF:"05:00-18:00",
        interDFP:"0:00",
        interDFN:"0:18",
        Observaciones: "Ruta Que se alterna con la del Garrochal(Unidad que venga por Terranova regresa al Garrochal)." 
       }
       
       ];
    
    this.rutas= ruta;
   
   
    
});