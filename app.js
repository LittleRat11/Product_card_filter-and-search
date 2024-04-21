let products = {
    data: [{
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "30",
            image: "./img/white-tshirt.jpeg",
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "./img/short-skirt.jpeg",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "./img/sporty-smartwatch.jpeg",
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "./img/knitted-top.jpeg",
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "129",
            image: "./img/black-leather-jacket.jpeg",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "89",
            image: "./img/pink-trousers.jpeg",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "189",
            image: "./img/brown-jacket.jpeg",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "49",
            image: "./img/comfy-gray-pants.jpeg",
        },
    ],
};

for (let i of products.data) {
    // *Create Card
    const card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    // *Create img div
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    // *create img tag
    const image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // *create product-container
    const pContainer = document.createElement("div");
    pContainer.classList.add("product-container");
    // *productname
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    pContainer.appendChild(name);
    // *price
    let price = document.createElement("h6");
    price.innerText = `$ ${i.price}`;
    pContainer.appendChild(price);

    card.appendChild(pContainer);
    document.querySelector("#products").appendChild(card);
}

// *filter product function
const filterProduct = (product) => {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((btn) => {
        if (product.toUpperCase() === btn.innerText.toUpperCase()) {
            btn.classList.add("active");

        } else {
            btn.classList.remove("active");
        }
    })

    let elements = document.querySelectorAll(".card");
    elements.forEach((card) => {
        if (product === "all") {
            card.classList.remove("hide");
        } else {
            if (card.classList.contains(product)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide")
            }
        }
    })
}

document.querySelector("#search").addEventListener("click", () => {
    let searchInput = document.querySelector("#search-input").value;
    let elements = document.querySelectorAll(".product-name");
    const cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");

        } else {
            cards[index].classList.add("hide");
        }
    })
})