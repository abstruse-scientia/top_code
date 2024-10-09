const list = [
    {
        name: "Chicken fillet",
        description: "Chicken fillet has chicken in it.",
        price: "$ 15.99"
    },
    {
        name: "Olivio De Aglio",
        description: "Added it into this medieval themed restaurant because why not, one of our chef is Italian",
        price: "$ 8.99 "
    },
    {
        name: "Brown Breads and Bean",
        description: "As the name suggests.",
        price: "$ 1.99"
    },
    {
        name: "Ale",
        description: "In medieval England, the term referred to a drink brewed without hops.",
        price: "$ 3.99"

    },
]
const menu = () => {

    const main = document.querySelector("main");
    main.textContent = "";

    const menuContent = document.createElement("div");
    menuContent.setAttribute("class", "menu");

    const subheader = document.createElement("h1");
    subheader.textContent = "Menu";
    menuContent.appendChild(subheader);

    const hr = document.createElement("hr");
    hr.id = "menu-hr"
    menuContent.appendChild(hr);

    list.forEach((item) =>{
        const listitem = document.createElement("div");
        listitem.setAttribute("class", "menu-item");

        const name = document.createElement("h2");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = item.description;

        const price = document.createElement("h2");
        price.textContent = item.price;

        const hrItems = document.createElement("hr");
        hrItems.id = "list-hr";

        listitem.appendChild(name);
        listitem.appendChild(description);
        listitem.appendChild(price);
        listitem.appendChild(hrItems);

        menuContent.appendChild(listitem)
    });



    main.appendChild(menuContent);
}



export default menu;