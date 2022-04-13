import MiPrimerComponenteClase from "../components/MiPrimerComponenteClase"

const MenuElems = [
    {  
        path:"/",
        text:"Inicio",
        componentSite:<div/>
    },
    {  
        path:"/Pepe",
        text: "Pepe",
        componentSite:<MiPrimerComponenteClase nombre = " Pepe " apellido =" Perez " color="red" />
    },
    {  
        path:"/Juan",
        text: "Juan",
        componentSite:<MiPrimerComponenteClase nombre = " Juan " apellido =" Martin "color="blue"/>
    },
    {  
        path:"/Luis",
        text: "Luis",
        componentSite:<MiPrimerComponenteClase nombre = " Luis " apellido =" Pueblo "color="green"/>
    },
    {  
        path:"/Manu",
        text: "Manu",
        componentSite:<MiPrimerComponenteClase nombre = " Manu " apellido =" Cobos "color="purple"/>
    },

];
export default MenuElems;
