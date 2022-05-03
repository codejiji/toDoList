//myToDoLists의 배열을 저장하고있는 변수
let myToDoLists = new Array();

document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {
    // localstorage 데이터 여부 확인
    // getItem() 가져오고
    // setItem() 넣어주고
    
    if(localStorage.getItem('myToDoLists')){
        // - 존재 : 리스트 출력

        // 1. myToDoLists 변수에 localstorage값을 대입
        // 2. 화면에 뿌려주기 -> 함수
    } else {
        // - 비존재 : addToDoBox() 호출

        // 1. addToDoBox() 호출
        // 2. 로컬스토리지에 myToDoLists라는 데이터를 생성
        addToDoBox();
        setLocalstorage();
    }
}


// setItem()
function setLocalstorage() {
    if(myToDoLists.length == 0){
        myToDoLists = [];
    }
    // localStorage.setItem('myToDoLists', myToDoLists);
    localStorage.setItem('myToDoLists', JSON.stringify(myToDoLists));
}