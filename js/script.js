function ShowHideDiv() {
    let menproducts = document.getElementById("men-products");
    menproducts.style.display = men.checked ? "block" : "none";
    let womenproducts = document.getElementById("women-products");
    womenproducts.style.display = women.checked ? "block" : "none";
}
