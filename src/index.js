fetch("http://localhost:3000/types")
  .then((resp) => resp.json())
  .then((types) => renderTypes(types));

const renderTypes = (types) => {
  //   onsole.log(types);
  const typesList = document.getElementById(`types-list`);
  //displaying list in the browser
  types.forEach((type) => {
    const li = document.createElement("li");
    li.innerText = type.title;
    typesList.append(li);
    li.addEventListener(`click`, () => renderCoffeeDetails(type));
  });
};
const renderCoffeeDetails = (type) => {
  console.log(type);
  document.getElementById(`image`).src = type.image;
  document.getElementById(`title`).innerHTML = type.title;
  document.getElementById(`description`).innerHTML = type.description;
  document.getElementById(`ingredients`).innerHTML = type.ingredients;
  document.getElementById(`price`).innerHTML = type.price;
};
const button = document.getElementById(`Button`).innerHTML;

Button.addEventListener("click", () => {
  alert("Coming Right Up!");
});
 const Payment =document.getElementById(`payment`).innerHTML
 payment.addEventListener("click",() => {
  prompt("ENTER PAYMENT METHOD");
 })
