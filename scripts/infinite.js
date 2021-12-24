let parentContainer = document.getElementById("container");

let count = 12;

function insertData() {
    parentContainer.innerHTML = null
    for (let i = 1; i <= count; i++) {
        let div = document.createElement("div");
        div.innerHTML = `Element Number is ${i}`
        parentContainer.append(div)
    }

}

insertData();

const showData = () => {
    setTimeout(() => {
        count = count + 25
        insertData();
    }, 300)

}

window.addEventListener("scroll", () => {
    const { scrollHeight } = document.documentElement;
    if (window.scrollY + window.innerHeight >= scrollHeight) {
        showData();
    }
})