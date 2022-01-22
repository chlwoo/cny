let pin_yin = [
    ["xīn", "nián", "kuài", "lè"],
    ["gōng", "xǐ", "fā", "cái"],
    ["nián", "nián", "yǒu", "yú"],
    ["xīn", "xiǎng", "shì", "chéng"],
    ["wàn", "shì", "rú", "yì"],
    ["shēn", "tǐ", "jiàn", "kāng"],
    ["lóng", "mǎ", "jīng", "shén"],
    ["dà", "jí", "dà", "lì"],
    ["yī", "fān", "fēng", "shùn"],
    ["xiào", "kǒu", "cháng", "kāi"],

]

let chinese_phrase = [
    ["新", "年", "快", "乐"],
    ["恭", "喜", "发", "财"],
    ["年", "年", "有", "余"],
    ["心", "想", "事", "成"], 
    ["万", "事", "如", "意"],
    ["身", "体", "健", "康"],
    ["龙", "马", "精", "神"],
    ["大", "吉", "大", "利"],
    ["一", "帆", "风", "顺"],
    ["笑", "口", "常", "开"],
]

let english_phrase = [
    "(Happy Chinese New Year)",
    "(Wishing you wealth and prosperity)",
    "(May you have abundance every year)",
    "(May all your wishes come true)",
    "(May everything go as you wish)",
    "(Wishing you good health)",
    "(Wishing you lots of energy and good spirit)",
    "(May you have great luck and great profit)",
    "(May all that you do go smoothly)",
    "(May your year be filled with abundance of smiles and laughter)",
]
var p_1 = document.getElementById("p_1");
var p_2 = document.getElementById("p_2");
var p_3 = document.getElementById("p_3");
var p_4 = document.getElementById("p_4");

var c_1 = document.getElementById("c_1");
var c_2 = document.getElementById("c_2");
var c_3 = document.getElementById("c_3");
var c_4 = document.getElementById("c_4");
var english = document.getElementById("el");

function onClick() {
    let num = Math.floor(Math.random() * english_phrase.length);
    english.textContent = english_phrase[num];
    p_1.textContent = pin_yin[num][0];
    p_2.textContent = pin_yin[num][1];
    p_3.textContent = pin_yin[num][2];
    p_4.textContent = pin_yin[num][3];
    c_1.textContent = chinese_phrase[num][0];
    c_2.textContent = chinese_phrase[num][1];
    c_3.textContent = chinese_phrase[num][2];
    c_4.textContent = chinese_phrase[num][3];
    

}

button.addEventListener("click", onClick);