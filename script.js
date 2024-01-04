//Defining Elements
const answer = document.querySelectorAll(".answer");
const buttons = document.querySelectorAll(".plus");


// For each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
   for(let i = 0; i < buttons.length; i++){
        if(buttons[i] == button){
          //console.log(i);
          answer[i].classList.toggle("hide");
          if (answer[i].classList.contains("hide")) {
    buttons[i].innerHTML = `<img
  src="https://res.cloudinary.com/dvydugv8v/image/upload/v1704383231/icon-minus_l21x9e.svg"
  class="plus"
/>`;
  } else {
    buttons[i].innerHTML = `<img
              src="https://res.cloudinary.com/dvydugv8v/image/upload/v1704383231/icon-plus_nbvchd.svg"
              class="plus"
            />`;
        }
        }
   };
});
});
