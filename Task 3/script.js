/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

function tableCreate(){
    const ing = document.createElement('th');
    const log = document.createElement('th');
    const tr = document.createElement('tr');
    tr.append(log, ing);
    const thead = document.createElement('thead');
    thead.append(tr);
    const table = document.createElement('table');
    table.append(thead, document.createElement('tbody'));
    let output = document.getElementById("output");
    output.appendChild(table);
  }
  function data(data){
      try{
      const kunas = document.getElementById("output");
      data.forEach(data => {
          const div = document.createElement('div');
          const log = document.createElement('div');
          log.innerText = data.log;
          const photo = document.createElement('img');
          photo.src = data.avatar_url;
          const containerForPhoto = document.createElement('div');
          containerForPhoto.append(photo);
          div.append(log);
          div.append(containerForPhoto);
          kunas.append(div);
      });
      }catch(error){
          console.error(error);
      }
  }
  fetch(ENDPOINT)
      .then(result => result.json())
      .then((output) => {
          list = output;       
  }).catch(error => console.error(error));
  const element = document.getElementById("btn");
  element.addEventListener("click",printAll);
  
  function printAll(){
      document.getElementById("message").style.visibility="hidden";
      data(list);
  }