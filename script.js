//elemento donde incoorporo el texto
const texto = document.getElementById("Nosotros");
const div = document.createElement("div");
div.setAttribute("class", "row bg-light text-body-secondary"); //agrego al div la clase
texto.appendChild(div);//se posiciona dentro del texto(Nosotros)
//creo el tag legend
const legend = document.createElement("legend");
//agrego texto al legend
legend.textContent = "Somos una empresa que se orem ipsum dolor, sit amet consectetur adipisicing elit. Iusto veniam id alias earum non, quaerat nobis sapiente officiis fugiat hic iure perspiciatis, nihil maxime explicabo quis impedit modi. Earum, saepe.";

//incoorporo al div del nosotros
div.appendChild(legend);