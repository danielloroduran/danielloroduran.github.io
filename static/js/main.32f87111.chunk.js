(this["webpackJsonpdanielloroduran-react"]=this["webpackJsonpdanielloroduran-react"]||[]).push([[0],{37:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),c=n(25),i=n.n(c),o=(n(37),n(18)),a=n(5),l=n(14),d=n(50),m=n(49),b=n(27),j=n(26),x=n(1);function g(){var e=[{nombre:"Inicio",hacia:"/"},{nombre:"Sobre m\xed",hacia:"/sobremi"},{nombre:"Formaci\xf3n",hacia:"/formacion"},{nombre:"Conocimientos",hacia:"/conocimientos"},{nombre:"Portfolio",hacia:"/portfolio"},{nombre:"Contacto",hacia:"/contacto"}],t=Object(r.useState)(!1),n=Object(l.a)(t,2),s=n[0],c=n[1];Object(r.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}));var i=function(){!s&&window.pageYOffset>100?c(!0):s&&window.pageYOffset<=100&&c(!1)};return Object(x.jsx)(d.a,{as:"nav",className:"fixed w-full rounded-b-lg ".concat(s?"bg-green-700":"bg-transparent"," transition duration-500 z-40"),children:function(t){var n=t.open;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(x.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(x.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(x.jsxs)(d.a.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-600 focus:utline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(x.jsx)("span",{className:"sr-only",children:"Abrir men\xfa"}),n?Object(x.jsx)(j.a,{className:"block h-6 w-6",color:"white","aria-hidden":"true"}):Object(x.jsx)(b.a,{className:"block h-6 w-6",color:"white","aria-hidden":"true"})]})}),Object(x.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-strech sm:justify-evenly",children:[Object(x.jsx)("div",{className:"flex-shrink-0 flex items-center",children:Object(x.jsx)("a",{href:"/",rel:"noreferrer",children:Object(x.jsx)("div",{className:"h-10 w-10 bg-".concat(s?"white":"transparent"," rounded-full flex justify-items-center justify-center place-items-center transition duration-500"),children:Object(x.jsx)("img",{className:"block lg:block h-8 w-auto",src:"../favicon.png",alt:"Logo"})})})}),Object(x.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(x.jsx)("div",{className:"flex space-x-4",children:e.map((function(e){return Object(x.jsx)(o.c,{to:e.hacia,exact:!0,className:"font-poppins text-gray-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium",activeClassName:"bg-green-900 text-white",children:e.nombre},e.nombre)}))})})]})]})}),Object(x.jsx)(m.a,{enter:"transition duration-200 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-200 opacity-100",leave:"transition duration-100 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:Object(x.jsx)(d.a.Panel,{className:"sm:hidden",children:Object(x.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:e.map((function(e){return Object(x.jsx)(o.b,{to:e.hacia,exact:!0,className:"font-poppins text-gray-100 bg-green-500 bg-opacity-75 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-sm font-medium",activeClassName:"bg-green-900 text-white",children:e.nombre},e.nombre)}))})})})]})}})}var u=n(3);function p(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1];Object(r.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}}));var c=function(){!n&&window.pageYOffset>400?s(!0):n&&window.pageYOffset<=400&&s(!1)};return Object(x.jsx)("div",{className:"fixed h-12 w-12 bottom-5 right-5 items-center justify-center bg-green-600 cursor-pointer transition duration-500 rounded-full shadow-lg hover:bg-green-500 hover:-translate-y-0.5 transform active:bg-green-700 ".concat(n?"flex":"hidden"),onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(x.jsx)(u.b,{color:"white"})})}function h(){return Object(x.jsx)("div",{className:"h-14 w-full bg-green-700 flex justify-center justify-items-center place-items-center text-center",children:Object(x.jsx)("h4",{className:"font-poppins text-white",children:"Daniel Loro Dur\xe1n - Copyright 2022"})})}var f=n(19),O=n(30);function w(){return Object(x.jsxs)("div",{className:"h-screen w-full bg-gray-500 py-5 bg-header-home bg-cover bg-blend-overlay text-center",children:[Object(x.jsx)("h1",{className:"text-8xl font-poppins font-medium text-white pt-20 md:mt-32 md:pt-0",children:"Daniel Loro Dur\xe1n"}),Object(x.jsx)("div",{className:"text-2xl font-poppins text-white pt-5 pb-20 md:text-3xl md:my-16",children:Object(x.jsx)(O.Typewriter,{words:["Ingeniero Inform\xe1tico","Keeping it simple"],loop:!1,cursor:!0,cursorStyle:"|"})}),Object(x.jsxs)("a",{className:"font-poppins bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-500 transition duration-500 hover:-translate-y-1 transform focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-400 shadow-lg mt-28 md:mt-0",role:"button",href:"CV_Daniel_Loro_Dur\xe1n.pdf",download:"CV_Daniel_Loro_Dur\xe1n",rel:"noreferrer",target:"_blank",children:[Object(x.jsx)(f.a,{className:"inline mr-3"}),"Descarga mi CV"]}),Object(x.jsxs)("div",{className:"flex justify-evenly mt-28 mb-10",children:[Object(x.jsx)("a",{className:"rounded-full h-14 w-14 bg-linkedinColor flex items-center justify-center shadow-lg transition duration-500 hover:-translate-y-1 transform focus:outline-none focus:ring focus:ring-offset-2 focus:ring-linkedinColor",href:"https://www.linkedin.com/in/danielloro",rel:"noreferrer",target:"_blank",children:Object(x.jsx)(u.g,{size:"35",color:"white"})}),Object(x.jsx)("a",{className:"rounded-full h-14 w-14 bg-black flex items-center justify-center shadow-lg transition duration-500 hover:-translate-y-1 transform focus:outline-none focus:ring focus:ring-offset-2 focus:ring-black",href:"https://www.github.com/danielloroduran",rel:"noreferrer",target:"_blank",children:Object(x.jsx)(u.c,{color:"white",size:"35"})}),Object(x.jsx)("a",{className:"rounded-full h-14 w-14 bg-twitterColor flex items-center justify-center shadow-lg transition duration-500 hover:-translate-y-1 transform focus:outline-none focus:ring focus:ring-offset-2 focus:ring-twitterColor",href:"https://www.twitter.com/DLoro30",rel:"noreferrer",target:"_blank",children:Object(x.jsx)(u.h,{color:"white",size:"35"})}),Object(x.jsx)("a",{className:"rounded-full h-14 w-14 bg-instagramColor flex items-center justify-center shadow-lg transition duration-500 hover:-translate-y-1 transform focus:outline-none focus:ring focus:ring-offset-2 focus:ring-instagramColor",href:"https://www.instagram.com/DLoro30",rel:"noreferrer",target:"_blank",children:Object(x.jsx)(u.f,{color:"white",size:"35"})})]})]})}function v(){return Object(x.jsxs)("div",{className:"h-auto bg-greenEmerald-light",children:[Object(x.jsxs)("div",{className:"h-screen py-60 bg-header-sobremi bg-cover bg-center bg-gray-500 bg-blend-overlay text-center",children:[Object(x.jsx)("h3",{className:"text-2xl font-poppins text-white",children:"Encantado de conocerte"}),Object(x.jsx)("h2",{className:"text-8xl font-poppins text-white font-medium",children:"Sobre m\xed"})]}),Object(x.jsxs)("div",{className:"flex flex-col items-center px-5 py-10 md:grid md:grid-cols-2 md:pl-32 md:pr-18 md:place-items-center",children:[Object(x.jsxs)("p",{className:"text-justify text-lg font-poppins text-darkBlue",children:["\xa1Hola! \ud83d\udc4b Tengo 24 a\xf1os y soy reci\xe9n graduado en Ingenier\xeda Inform\xe1tica con menci\xf3n en Tecnolog\xedas de la Informaci\xf3n.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})," Interesado en el desarrollo de aplicaciones m\xf3viles y en el desarrollo web.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})," Me encantar\xeda poder entrar a formar parte de una empresa en la que demostrar y aplicar todos los conocimientos que he ido adquiriendo, tanto a trav\xe9s del grado como de forma autodidacta, a la vez que contin\xfao form\xe1ndome y ampl\xedo mi experiencia profesional.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})," Fuera del \xe1mbito profesional, donde est\xe9 un buen videojuego \ud83c\udfae, una buena pel\xedcula o serie \ud83d\udcfa o alguna nueva tecnolog\xeda que investigar \ud83d\udd0d, ah\xed estar\xe9 yo."]}),Object(x.jsx)("div",{className:"max-w-lg mx-auto md:pl-10",children:Object(x.jsx)("img",{className:"rounded-2xl",src:"../assets/yo.png",alt:"Mi foto"})})]})]})}var y=n(21),N=n.n(y);function k(e){var t=e.item,n=t.nombre,s=t.descr,c=t.anio,i=t.ubicacion,o=t.img,a=t.icon,d=Object(r.useState)(!1),m=Object(l.a)(d,2),b=m[0],j=m[1],g=function(e){e.preventDefault(),j((function(e){return{isFlipped:!e}}))};return Object(x.jsxs)(N.a,{isFlipped:b,infinite:!0,children:[Object(x.jsxs)("div",{className:"h-40 w-80 bg-greenEmerald-dark rounded-lg shadow-lg grid grid-rows-3",children:[Object(x.jsxs)("div",{className:"grid grid-cols-3 rounded-t-lg row-span-2",children:[Object(x.jsx)("div",{className:"m-1 col-span-1 flex items-center justify-center",children:o?Object(x.jsx)("img",{className:"h-15 w-20 rounded-lg",src:"../assets/".concat(o),alt:"Logo de ".concat(n)}):Object(x.jsx)("div",{className:" flex justify-items-center justify-center place-items-center rounded-full bg-greenEmerald w-10 h-10",children:a})}),Object(x.jsxs)("div",{className:"col-span-2 pt-2 pl-2",children:[Object(x.jsxs)("div",{className:"flex justify-between",children:[Object(x.jsx)("p",{className:"font-poppins text-white font-semibold text-base",children:n}),Object(x.jsx)("p",{className:"font-poppins text-gray-200 font-semibold text-xs px-2",children:c})]}),Object(x.jsx)("p",{className:"font-poppins text-gray-200 font-medium text-sm",children:i})]})]}),Object(x.jsx)("div",{className:"rounded-b-lg row-span-1 flex place-items-center justify-end px-2",children:Object(x.jsxs)("button",{className:"rounded-full h-10 w-10 flex items-center justify-center bg-linkedinColor",onClick:g,title:"Girar",children:[" ",Object(x.jsx)(u.a,{size:"30",color:"white"})]})})]}),Object(x.jsxs)("div",{className:"h-40 w-80 bg-greenEmerald-dark rounded-lg shadow-lg grid grid-rows-3",children:[Object(x.jsxs)("div",{className:"rounded-t-lg row-span-2 px-3 pt-3",children:[Object(x.jsx)("p",{className:"font-poppins text-gray-200 font-semibold",children:"Informaci\xf3n"}),Object(x.jsx)("p",{className:"font-poppins text-white text-justify",children:s})]}),Object(x.jsx)("div",{className:"rounded-b-lg row-span-1 flex place-items-center justify-end px-2",children:Object(x.jsx)("button",{className:"rounded-full h-10 w-10 flex items-center justify-center bg-linkedinColor",onClick:g,title:"Girar",children:Object(x.jsx)(u.a,{size:"30",color:"white"})})})]})]})}var C=n(31),E=[{nombre:"Solutions Assistant",ubicacion:"NTT Data Europe & Latam",descr:"Desarrollador front-end en D4i Ciudad Real",anio:"2022 Actualidad",img:"ntt.png"}],S=[{nombre:"Grado en Ingenier\xeda Inform\xe1tica",ubicacion:"Escuela Superior de Inform\xe1tica (UCLM)",descr:"Menci\xf3n en Tecnolog\xedas de la Informaci\xf3n",anio:"2015 2021",img:"esi.png"},{nombre:"Bachillerato Cient\xedfico - Tecnol\xf3gico",ubicacion:"IES Guadiana",descr:"Estudios realizados en Villarrubia de los Ojos, Ciudad Real",anio:"2013 2015",icon:Object(x.jsx)(u.e,{size:"30"})}],z=[{nombre:"Curso completo de bases de datos MongoDB y NoSQL",ubicacion:"Udemy",descr:"Conceptos sobre NoSQL y uso de MongoDB desde la ventana de comandos y Robo 3T",anio:"2021",icon:Object(x.jsx)(C.a,{size:"30"})},{nombre:"Aprendiendo SCRUM",ubicacion:"Linkedin Learning",descr:"Conceptos sobre la metodolog\xeda SCRUM",anio:"2021",icon:Object(x.jsx)(u.g,{size:"30"})},{nombre:"Ciberseguridad en el teletrabajo; Protege tu negocio",ubicacion:"Google Activate",descr:"Aplicaci\xf3n de m\xe9todos de seguridad desde varios puntos de vista",anio:"2021",icon:Object(x.jsx)(u.d,{size:"30"})},{nombre:"Desarrollo de aplicaciones m\xf3viles",ubicacion:"Google Activate",descr:"Android, iOS, monetizaci\xf3n, tiendas de aplicaciones...",anio:"2020",icon:Object(x.jsx)(u.d,{size:"30"})},{nombre:"Introducci\xf3n al desarrollo web I",ubicacion:"Google Activate",descr:"Explicaci\xf3n de la historia de la web y su desarrollo e introducci\xf3n a los conceptos b\xe1sicos",anio:"2020",icon:Object(x.jsx)(u.d,{size:"30"})}],L=[{img:"flutter.svg",nombre:"Flutter"},{img:"java.svg",nombre:"Java"},{img:"html.svg",nombre:"HTML"},{img:"css.svg",nombre:"CSS"},{img:"javascript.svg",nombre:"Javascript"},{img:"react.svg",nombre:"React"},{img:"tailwind.svg",nombre:"Tailwind CSS"},{img:"vscode.svg",nombre:"Visual Studio Code"},{img:"androidstudio.svg",nombre:"Android Studio"},{img:"mongodb.svg",nombre:"MongoDB"},{img:"sqlite.svg",nombre:"SQLite"},{img:"firebase.svg",nombre:"Firebase"}],A=[{nombre:"SearchToPlay",img:"searchtoplay.png",tecn:"Flutter, Firebase, IGDB",url:"SearchToPlay_TFG",descr:"Aplicaci\xf3n para la b\xfasqueda de informaci\xf3n de videojuegos empleando t\xe9cnicas de gamificaci\xf3n"},{nombre:"Lectura de sensores en Android",img:"sensores.png",tecn:"Java",url:"Lectura-de-sensores-Android",descr:"Aplicaci\xf3n para medir los valores del aceler\xf3metro del dispositivo y enviarlo a un servidor externo"},{nombre:"Act\xfca Animalista",img:"prestashop.png",tecn:"Prestashop",url:"ActuaAnimalista",descr:"Web creada en grupo para la asocaci\xf3n Act\xfca Animalista de Villanueva de los Infantes, Ciudad Real"},{nombre:"Blocks, out!",img:"blocksout.png",tecn:"Unity, C#",url:"Blocks-out",descr:"Sencillo juego con el estilo de Arknaoid para ser jugado en PC"},{nombre:"Write, it!",img:"writeit.png",tecn:"Flutter, Firebase",url:"Write-it",descr:"Aplicaci\xf3n para tomar notas en dispositivos m\xf3viles con Android"},{nombre:"\xa1Esta misma web!",img:"milogo.png",tecn:"React, Tailwind CSS",url:"danielloroduran.github.io",descr:"Sitio web personal para complementar mi curriculum"}];function D(){return Object(x.jsxs)("div",{className:"h-auto pb-10 w-full bg-greenEmerald-light",children:[Object(x.jsxs)("div",{className:"h-screen py-60 bg-gray-500 bg-header-formacion bg-cover bg-blend-overlay text-center",children:[Object(x.jsx)("h3",{className:"text-2xl font-poppins text-white",children:"En continuo aumento"}),Object(x.jsx)("h2",{className:"text-6xl font-poppins text-white font-medium md:text-8xl",children:"Experiencia y formaci\xf3n"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"text-center bg-greenEmerald mx-5 rounded-lg",children:Object(x.jsx)("h4",{className:"text-2xl font-poppins text-white font-medium mt-4",children:"Experiencia laboral"})}),Object(x.jsx)("div",{className:"grid grid-cols-1 gap-3 pt-5 md:flex justify-items-center justify-center",children:E.map((function(e){return Object(x.jsx)(k,{item:e},e.nombre)}))}),Object(x.jsx)("div",{className:"text-center bg-greenEmerald mx-5 rounded-lg",children:Object(x.jsx)("h4",{className:"text-2xl font-poppins text-white font-medium mt-4",children:"Formaci\xf3n oficial"})}),Object(x.jsx)("div",{className:"grid grid-cols-1 gap-3 pt-5 md:flex justify-items-center justify-center",children:S.map((function(e){return Object(x.jsx)(k,{item:e},e.nombre)}))}),Object(x.jsx)("div",{className:"text-center bg-greenEmerald mx-5 rounded-lg",children:Object(x.jsx)("h4",{className:"text-2xl font-poppins text-white font-medium mt-4",children:"Formaci\xf3n complementaria"})}),Object(x.jsx)("div",{className:"grid grid-cols-1 gap-3 justify-center justify-items-center pt-5 md:pt-10 md:grid-cols-2 lg:grid-cols-3",children:z.map((function(e){return Object(x.jsx)(k,{item:e},e.nombre)}))})]})]})}function I(e){var t=e.item,n=t.img,r=t.nombre;return Object(x.jsxs)("div",{className:"rounded-full h-40 w-40 bg-green-500 grid grid-cols-1 place-content-center place-items-center text-white",children:[Object(x.jsx)("img",{className:"h-20 w-20",src:"./assets/conocimientos/".concat(n),alt:"Logo de ".concat(r)}),Object(x.jsx)("p",{className:"px-3 my-2 font-poppins text-center overflow-auto break-word",children:r})]})}function F(){return Object(x.jsxs)("div",{className:"h-auto pb-10 w-full bg-greenEmerald-light",children:[Object(x.jsxs)("div",{className:"h-screen py-60 bg-gray-500 bg-header-conocimientos bg-cover bg-center bg-blend-overlay text-center",children:[Object(x.jsx)("h3",{className:"text-2xl font-poppins text-white",children:"Creciendo"}),Object(x.jsx)("h2",{className:"text-5xl font-poppins text-white font-medium md:text-8xl",children:"Conocimientos"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"text-center bg-greenEmerald mx-5 rounded-lg",children:Object(x.jsx)("h4",{className:"text-2xl font-poppins text-white font-medium mt-4",children:"Lenguajes y frameworks"})}),Object(x.jsx)("div",{className:"grid grid-cols-2 gap-3 justify-items-center pt-5 md:grid-cols-3 lg:grid-cols-4",children:L.map((function(e){return Object(x.jsx)(I,{item:e},e.nombre)}))}),Object(x.jsx)("div",{className:"text-center bg-greenEmerald mx-5 rounded-lg",children:Object(x.jsx)("h4",{className:"text-2xl font-poppins text-white font-medium mt-4",children:"Otros"})}),Object(x.jsxs)("div",{className:"grid grid-cols-2 gap-3 justify-items-center justify-center md:justify-evenly pt-5 md:flex md:gap-x-6",children:[Object(x.jsx)(I,{item:{img:"espana.svg",nombre:"Espa\xf1ol [Nativo]"}}),Object(x.jsx)(I,{item:{img:"ingles.svg",nombre:"Ingl\xe9s [B1 - Intermedio]"}}),Object(x.jsx)("div",{className:"col-span-2 self-center md:col-span-1 md:self-auto",children:Object(x.jsx)(I,{item:{img:"coche.svg",nombre:"Carnet de conducir [B]"}})})]})]})]})}function T(e){var t=e.item,n=t.nombre,s=t.img,c=t.tecn,i=t.url,o=t.descr,a=Object(r.useState)(!1),d=Object(l.a)(a,2),m=d[0],b=d[1],j=function(e){e.preventDefault(),b((function(e){return{isFlipped:!e}}))};return Object(x.jsxs)(N.a,{isFlipped:m,infinite:!0,children:[Object(x.jsxs)("div",{className:"h-40 w-80 bg-greenEmerald-dark rounded-lg shadow-lg grid grid-rows-3",children:[Object(x.jsxs)("div",{className:"grid grid-cols-3 rounded-t-lg row-span-2",children:[Object(x.jsx)("div",{className:"m-1 col-span-1 flex items-center justify-center",children:Object(x.jsx)("img",{className:"h-20 w-20 rounded-lg",src:"./assets/portfolio/".concat(s),alt:"Logo de ".concat(n)})}),Object(x.jsxs)("div",{className:"col-span-2 block pt-2 pl-2",children:[Object(x.jsx)("p",{className:"font-poppins text-white font-semibold text-xl pr-1",children:n}),Object(x.jsx)("p",{className:"font-poppins text-gray-200",children:c})]})]}),Object(x.jsxs)("div",{className:"rounded-b-lg row-span-1 flex place-items-center justify-between px-2",children:[Object(x.jsx)("a",{className:"rounded-full h-10 w-10 bg-black flex items-center justify-center transition duration-500 hover:-translate-y-1 transform",href:"https://www.github.com/danielloroduran/".concat(i),rel:"noreferrer",target:"_blank",children:Object(x.jsx)(u.c,{size:"30",color:"white"})}),Object(x.jsxs)("button",{className:"rounded-full h-10 w-10 flex items-center justify-center bg-linkedinColor",onClick:j,title:"Girar",children:[" ",Object(x.jsx)(u.a,{size:"30",color:"white"})]})]})]}),Object(x.jsxs)("div",{className:"h-40 w-80 bg-greenEmerald-dark rounded-lg shadow-lg grid grid-rows-3",children:[Object(x.jsxs)("div",{className:"rounded-t-lg row-span-2 px-3 pt-3",children:[Object(x.jsx)("p",{className:"font-poppins text-gray-200 font-semibold",children:"Informaci\xf3n"}),Object(x.jsx)("p",{className:"font-poppins text-white text-justify",children:o})]}),Object(x.jsx)("div",{className:"rounded-b-lg row-span-1 flex place-items-center justify-end px-2",children:Object(x.jsx)("button",{className:"rounded-full h-10 w-10 flex items-center justify-center bg-linkedinColor",onClick:j,title:"Girar",children:Object(x.jsx)(u.a,{size:"30",color:"white"})})})]})]})}function _(){return Object(x.jsxs)("div",{className:"h-auto w-full pb-10 bg-greenEmerald-light",children:[Object(x.jsxs)("div",{className:"h-screen py-60 bg-gray-500 bg-header-portfolio bg-cover bg-center bg-blend-overlay text-center",children:[Object(x.jsx)("h3",{className:"text-2xl font-poppins text-white",children:"Conoce mis proyectos"}),Object(x.jsx)("h2",{className:"text-6xl font-poppins text-white font-medium md:text-8xl",children:"Portfolio"})]}),Object(x.jsx)("div",{className:"grid grid-cols-1 gap-3 justify-items-center pt-4 md:pt-10 md:grid-cols-2 lg:grid-cols-3",children:A.map((function(e){return Object(x.jsx)(T,{item:e},e.nombre)}))}),Object(x.jsx)("div",{className:"text-center pt-6",children:Object(x.jsxs)("a",{className:"font-poppins bg-white text-darkBlue text-sm px-3 py-2 rounded-full hover:bg-gray-200 transition duration-200 shadow-lg mt-28 md:mt-0",href:"https://www.github.com/danielloroduran",rel:"noreferrer",target:"_blank",children:[Object(x.jsx)(u.c,{className:"inline mr-3"}),"\xa1Esto y m\xe1s en GitHub!"]})})]})}function B(e){return Object(x.jsxs)("a",{className:"rounded-full h-40 w-40 ".concat(e.bgcolor," shadow-lg grid grid-cols-1 place-content-center place-items-center text-white transition duration-500 hover:-translate-y-1 transform focus:outline-none focus:ring focus:ring-offset-2 focus:ring-").concat(e.bgcolor),href:e.url,target:"_blank",rel:"noreferrer",children:[e.icon,Object(x.jsx)("p",{className:"px-3 my-2 font-poppins text-center overflow-auto ".concat(e.nombre.includes("@")?"break-all":"break-word"),children:e.nombre})]})}var G=n(32);function M(){return Object(x.jsxs)("div",{className:"h-auto pb-10 bg-greenEmerald-light",children:[Object(x.jsxs)("div",{className:"h-screen py-60 bg-gray-500 bg-header-contacto bg-cover bg-blend-overlay text-center",children:[Object(x.jsx)("h3",{className:"text-2xl font-poppins text-white",children:"No seas un desconocido"}),Object(x.jsx)("h2",{className:"text-6xl font-poppins text-white font-medium md:text-8xl",children:"\xa1Contacta conmigo!"})]}),Object(x.jsxs)("div",{className:"pt-6 md:pt-10",children:[Object(x.jsxs)("div",{className:"grid grid-cols-2 justify-center justify-items-center gap-x-4 gap-y-4 md:flex md:gap-x-6",children:[Object(x.jsx)(B,{bgcolor:"bg-greenEmerald",icon:Object(x.jsx)(f.c,{size:"40"}),nombre:"Ciudad Real, Espa\xf1a",url:"https://goo.gl/maps/zAN1z45UJetPKpPX8"}),Object(x.jsx)(B,{bgcolor:"bg-greenEmerald",icon:Object(x.jsx)(f.b,{size:"40"}),nombre:"danielloroduran@gmail.com",url:"mailto:danielloroduran@gmail.com"}),Object(x.jsx)("div",{className:"col-span-2 self-center md:col-span-1 md:self-auto",children:Object(x.jsx)(B,{bgcolor:"bg-greenEmerald",icon:Object(x.jsx)(G.a,{size:"40"}),nombre:"(+34) 649 863 707",url:"tel:649863707"})})]}),Object(x.jsxs)("div",{className:"grid grid-cols-2 justify-items-center justify-center gap-x-4 gap-y-4 md:flex md:py-5 md:gap-x-6",children:[Object(x.jsx)(B,{bgcolor:"bg-linkedinColor",icon:Object(x.jsx)(u.g,{size:"40"}),nombre:"LinkedIn",url:"https://www.linkedin.com/in/danielloro"}),Object(x.jsx)(B,{bgcolor:"bg-black",icon:Object(x.jsx)(u.c,{size:"40"}),nombre:"GitHub",url:"https://www.github.com/danielloroduran"}),Object(x.jsx)(B,{bgcolor:"bg-twitterColor",icon:Object(x.jsx)(u.h,{size:"40"}),nombre:"Twitter",url:"https://www.twitter.com/DLoro30"}),Object(x.jsx)(B,{bgcolor:"bg-instagramColor",icon:Object(x.jsx)(u.f,{size:"40"}),nombre:"Instagram",url:"https://www.instagram.com/DLoro30"})]})]})]})}function q(){return Object(x.jsx)("div",{className:"h-screen w-full bg-gradient-to-tr from-black to-green-600",children:Object(x.jsxs)("div",{className:"grid grid-cols-1 pt-60 justify-items-center justify-center place-items-center text-center",children:[Object(x.jsx)("p",{className:"font-poppins text-white font-bold text-6xl",children:"Error 404 "}),Object(x.jsx)("p",{className:"font-poppins text-white text-2xl mt-10",children:"Hemos buscado con ganas lo que quer\xedas, pero parece que no existe... \ud83d\ude1f"})]})})}var P=function(){return Object(x.jsxs)(o.a,{children:[Object(x.jsx)(g,{}),Object(x.jsxs)(a.c,{children:[Object(x.jsx)(a.a,{exact:!0,path:"/",component:w}),Object(x.jsx)(a.a,{exact:!0,path:"/sobremi",component:v}),Object(x.jsx)(a.a,{exact:!0,path:"/formacion",component:D}),Object(x.jsx)(a.a,{exact:!0,path:"/conocimientos",component:F}),Object(x.jsx)(a.a,{exact:!0,path:"/portfolio",component:_}),Object(x.jsx)(a.a,{exact:!0,path:"/contacto",component:M}),Object(x.jsx)(a.a,{component:q})]}),Object(x.jsx)(h,{}),Object(x.jsx)(p,{})]})};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.32f87111.chunk.js.map