function addBoxKeyboard() {
  document.querySelector("body").innerHTML =
    "<div class=\"classTitle\">RSS Virtual Keyboard</div>";
  document.querySelector("body").innerHTML +=
    "<input id=\"idInput\"class=\"classInput\" id=\"id-input\"></input>";
  document.querySelector("body").innerHTML +=
    "<div id=\"idKeyboard\" class=\"classKeyboard\"></div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">`</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">1</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">2</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">3</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">4</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">5</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">6</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">7</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">8</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">9</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">0</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">-</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">=</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey Backspace\">Backspace</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey Tab\">Tab</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">Q</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">W</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">E</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">R</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">T</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">Y</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">U</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">I</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">O</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">P</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">[</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">]</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">|</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey Delete\">Del</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey CapsLock\">CapsLock</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">A</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">S</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">D</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">F</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">G</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">H</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">J</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">K</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">L</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">;</div>";
  document.querySelector(
    ".classKeyboard"
  ).innerHTML += "<div class=\"classButtonKey\">'</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey Enter\">Enter</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey ShiftLeft Shift\">Shift</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">Z</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">X</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">C</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">V</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">B</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">N</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">M</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">,</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">.</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey\">/</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey ArrowUp\"><img src=\"./assets/svg/ArrowRight.svg\" alt=\"ArrowDown\" class=\"ArrowUpSvg\"></div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey ShiftRight Shift\">Shift</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey ControlLeft Ctrl\">Ctrl</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey MetaLeft\">Win</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey AltLeft Alt\">Alt</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey Space\"></div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey AltRight Alt\">Alt</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey ControlRight Ctrl\">Ctrl</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey ArrowLeft\"><img src=\"./assets/svg/ArrowLeft.svg\" alt=\"ArrowLeft\" class=\"imgArrowLeftSvg\"></div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey ArrowDown\"><img src=\"./assets/svg/ArrowRight.svg\" alt=\"ArrowDown\" class=\"ArrowDownSvg\"></div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div class=\"classButtonKey ArrowRight\"><img src=\"./assets/svg/ArrowRight.svg\" alt=\"ArrowRight\" class=\"ArrowRightSvg\"></div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div id=\"en\" class=\"classEn\">EN</div>";
  document.querySelector(".classKeyboard").innerHTML +=
    "<div  class=\"classChang\">Click to switch:\"AltLeft\"+\"ShiftLeft\"</div></div>";
}
addBoxKeyboard(); //заполняет html
let arrRU = [
  "Ё",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "\\",
  "Delete",
  "CapsLock",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "Ж",
  "Э",
  "Enter",
  "Shift",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю",
  ".",
  "ArrowUp",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  " ",
  "Alt",
  "Ctrl",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
];

let arrEN = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "\\",
  "Delete",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  "ArrowUp",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  " ",
  "Alt",
  "Ctrl",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
];
let count = 0;
let caps = 0;
if(localStorage.getItem("count")== "1"){
    count=localStorage.getItem("count");
    changeKey();
}else if(localStorage.getItem("count") == "0"){
    count=localStorage.getItem("count");
    changeKey();
}
document.querySelector("#idInput").focus(); //дефолтный фокус на инпут

document.querySelector("html").addEventListener("click", () => {
  document.querySelector("#idInput").focus();
}); //постоянный фокус на инпут

document.addEventListener("keydown", (Event) => {
  document.querySelectorAll(".classButtonKey").forEach((el) => {
    if (
      el.classList.contains("Backspace") ||
      el.classList.contains("Tab") ||
      el.classList.contains("Delete") ||
      el.classList.contains("CapsLock") ||
      el.classList.contains("Enter") ||
      el.classList.contains("Shift") ||
      el.classList.contains("ArrowUp") ||
      el.classList.contains("Ctrl") ||
      el.classList.contains("MetaLeft") ||
      el.classList.contains("Alt") ||
      el.classList.contains("Space") ||
      el.classList.contains("ArrowLeft") ||
      el.classList.contains("ArrowDown") ||
      el.classList.contains("ArrowRight")
    ) {
      document.querySelectorAll(".classButtonKey").forEach((el) => {
        if (el.classList.contains(`${Event.code}`))
          el.classList.add("classButtonKeySpecificLight");
        if (el.classList.contains("Tab")) {
          setTimeout(lightoffTab, 100);
        }
      });
    } else if (el.innerHTML == Event.key.toUpperCase()) {
      el.classList.add("classButtonKeyLight");
    }
  });
}); //добавляет подсветку
function lightoffTab() {
  document
    .querySelector(".Tab")
    .classList.remove("classButtonKeySpecificLight");
} //убирает подсветку с таба
document.addEventListener("keyup", lightoff);
function lightoff() {
  document.querySelectorAll(".classButtonKey").forEach((el) => {
    el.classList.remove("classButtonKeyLight");
    el.classList.remove("classButtonKeySpecificLight");
  });
} //уберает подсветку
function changeKey() {
  if (count == 0) {
    document.querySelector(".classEn").innerHTML = "EN";
    document.querySelectorAll(".classButtonKey").forEach((el, index) => {
      if (
        el.classList.contains("ArrowLeft") ||
        el.classList.contains("ArrowDown") ||
        el.classList.contains("ArrowRight") ||
        el.classList.contains("ArrowUp")
      ) {
          return true;
      } else {
        el.innerHTML = arrEN[index];
      }
    });
  } else if (count == 1) {
    document.querySelector(".classEn").innerHTML = "RU";
    document.querySelectorAll(".classButtonKey").forEach((el, index) => {
      if (
        el.classList.contains("ArrowLeft") ||
        el.classList.contains("ArrowDown") ||
        el.classList.contains("ArrowRight") ||
        el.classList.contains("ArrowUp")
      ) {
        return true;
      } else {
        el.innerHTML = arrRU[index];
      }
    });
  }
} //смена языка
document.onkeydown = function (event) {
  if (event.code == "AltLeft") {
    document.onkeyup = function (event) {
      if (event.code == "ShiftLeft") {
        console.log(1);
        if (count == 0) {
          count = 1;
          localStorage.setItem("count", count);
        } else {
          count = 0;
          localStorage.setItem("count", count);
        }
        changeKey();
        document.onkeyup = null;
      } else {
        document.onkeyup = null;
      }
    };
  }
  
}; //смена языка(слушает комбинацию клавиш)
document.addEventListener("keydown", (Event) => {
  if (Event.key == "CapsLock") {
    if (caps == 0) {
      caps = 1;
    } else {
      caps = 0;
    }
  }
}); //счетчик капса
document.addEventListener("mousedown", (Event) => {
  if (
    Event.target.classList.contains("Backspace") ||
    Event.target.classList.contains("Tab") ||
    Event.target.classList.contains("Delete") ||
    Event.target.classList.contains("CapsLock") ||
    Event.target.classList.contains("Enter") ||
    Event.target.classList.contains("Shift") ||
    Event.target.classList.contains("ArrowUp") ||
    Event.target.classList.contains("Ctrl") ||
    Event.target.classList.contains("MetaLeft") ||
    Event.target.classList.contains("Alt") ||
    Event.target.classList.contains("Space") ||
    Event.target.classList.contains("ArrowLeft") ||
    Event.target.classList.contains("ArrowDown") ||
    Event.target.classList.contains("ArrowRight")
  ) {
    Event.target.classList.add("classButtonKeySpecificLight");
  } else if (Event.target.classList.contains("classButtonKey")) {
    Event.target.classList.add("classButtonKeyLight");
    if (caps == 0) {
      document.querySelector(".classInput").value +=
        Event.target.innerHTML.toLowerCase();
    } else {
      document.querySelector(".classInput").value += Event.target.innerHTML;
    }
  }
}); //добавляет подсветку при клике, при клике пишет в инпут
document.addEventListener("mouseup", (Event) => {
  Event.target.classList.remove("classButtonKeySpecificLight");
  Event.target.classList.remove("classButtonKeyLight");
}); //убираем подсветку при клике

/*document.addEventListener('keydown',(Event)=>{
    console.log(Event)
})*/
