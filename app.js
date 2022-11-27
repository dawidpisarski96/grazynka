const pas = document.querySelector(".inputPassword");
const inputValue = document.getElementById("password").value;
const correct = document.querySelector(".correct");
const unCorrect = document.querySelector(".un_correct");
const btn = document.querySelector(".btn");

const showMsg = () => {
  content = pas.value;
  console.log(content);

  if (content == "macgyver 2k22") {
    correct.classList.add("active");
    unCorrect.classList.remove("unactive");
    console.log("działa");
  } else {
    correct.classList.remove("active");
    unCorrect.classList.add("unactive");
    console.log("nie dziala");
  }
};

const enterKeyCheck = (e) => {
  if (e.key === "Enter") {
    showMsg();
  }
};

btn.addEventListener("click", showMsg);
pas.addEventListener("keyup", enterKeyCheck);
