import restaurantPic from "../assets/images/restaurant_pic.jpg"

const home = () => {
    const main = document.querySelector("main");
    const content  = document.createElement("div");
    content.id = "content"
    
    
    const h2 = document.createElement("h2");
    h2.textContent = "The only place where you get your ale right."
    content.appendChild(h2);

    const about_image = document.createElement("img");
    about_image.id = "about-pic";
    about_image.src = restaurantPic;
    content.appendChild(about_image);

    const para1 = document.createElement("p");
    para1.textContent = "Serving Food and Ale since 1960s";
    content.appendChild(para1);

    main.appendChild(content);

}

export default home;