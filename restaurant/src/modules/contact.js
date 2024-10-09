const contact = ()  => {
    const main = document.querySelector("main");
    main.textContent = "";

    const contactContent = document.createElement("div");
    contactContent.setAttribute("class", "contact");

    const paraNum = document.createElement("p");
    paraNum.textContent = "+62-908234";
    contactContent.appendChild(paraNum);

    const paraAddress = document.createElement("p");
    paraAddress.textContent = "Viking's Abode, Baramuda Triangle";
    contactContent.appendChild(paraAddress);

    const mapContainer = document.createElement("div");
    mapContainer.id = "map";
    
    const map = document.createElement("iframe");
    map.id = "address-map"
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9934.749737956088!2d-0.092239182617163!3d51.50060310000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760344cb55fc8d%3A0xb568c5129fcd3dcb!2zSm9zw6k!5e0!3m2!1sen!2sin!4v1728070966991!5m2!1sen!2sin"
    mapContainer.appendChild(map);

    contactContent.appendChild(mapContainer);
    main.appendChild(contactContent);

}

export default contact;