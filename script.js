function add(mad) {
    let display = document.getElementById('display');
    display.value = display.value + mad;
}
function egorock(){
    let display = document.getElementById('display');
    let geasan = eval(display.value)
    document.getElementById('dap').value = geasan;
    element = document.getElementById('gl');

    let div = document.getElementById("gl"); // div 요소 가져오기
    let heading = document.createElement("h3"); // h3 요소 생성
    let text = document.createTextNode(display.value + "=" + geasan);
    heading.appendChild(text);
    div.appendChild(heading); // h3 요소를 div 요소에 추가
      
}
function deleter(){
    document.getElementById('dap').value = ''
    document.getElementById('display').value = ''
}

const gu = document.getElementById("gu")
let gl = document.getElementById("gl")
gl.style.display === "block"
function change(){
    if (gl.style.display === "none") {
        gl.style.display = "block";
    }
    else{
        gl.style.display = "none";
    };
}