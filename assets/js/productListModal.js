const product_list_modal = document.querySelector("#product_list_modal");
const selectionBTN = document.querySelectorAll(".selectionBTN");
const close_product_list = document.getElementById("close_product_list");
const productList = document.getElementById("productList");

// selectionBTN.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//         console.log(e.target);
// })
// });
// ###########close product list modal###########
close_product_list.addEventListener("click", (e)=>{
    product_list_modal.classList.add("hidden");
});

function handleComponents(event){
    console.log(event.target);
}