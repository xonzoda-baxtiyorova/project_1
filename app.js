const content  = document.querySelector('.content')


content.style.display='flex';
content.style.alignItems = 'center';
content.style.justifyContent = 'center';
content.style.gap = '20px';


const card = document.createElement("div");


card.style.border = "1.3px solid #000";
card.style.padding = "30px";
card.style.borderRadius= "4px";

const img =document.createElement("img");
img.setAttribute("src" , "./twitter.svg");
img.setAttribute("width", "40px");
img.setAttribute("height" , "40px");
img.style.display= 'block'
img.style.margin = "0 auto"


card.appendChild(img)

content.appendChild(card)


const title = document.createElement("h2");
const h1 = document.querySelector(".title")
title.textContent = "twitter"

title.style.textTransform = "uppercase"
title.style.textAlign = "center"

card.appendChild(title)
const text = document.createElement("p")
const p =document.querySelector(".text")
text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, magni!"
card.appendChild(text)

text.style.textAlign = "center"
text.style.width = "200px"

const button =document.createElement("button");
button.textContent = "read more"

button.style.width = '100%'
button.style.display = 'block'
button.style.backgroundColor = "#000"
button.style.color = "#fff"
button.style.borderRadius = '50px'
button.style.padding = '5px 25px'
button.style.textTransform = 'uppercase'



card.appendChild(button)







