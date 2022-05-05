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
        myToDoLists = getLocalstorage();
        draw();
    } else {
        // - 비존재 : addToDoBox() 호출

        // 1. addToDoBox() 호출
        // 2. 로컬스토리지에 myToDoLists라는 데이터를 생성
        addToDoBox();
        setLocalstorage();
    }
}


// setItem() 셋팅
function setLocalstorage() {
    if(myToDoLists.length == 0){
        myToDoLists = [];
    }
    // localStorage.setItem('myToDoLists', myToDoLists);
    localStorage.setItem('myToDoLists', JSON.stringify(myToDoLists));
}

// getItem() 조회
function getLocalstorage() {
    return JSON.parse(localStorage.getItem('myToDoLists'));
}

//화면에 그려주기
function draw() {
    if(myToDoLists.length == 0){
        addToDoBox();
    } else {
        const $boxArea = document.querySelector('.boxArea');
        if($boxArea.querySelector('label')){
            $boxArea.innerHTML = '';
        }

        myToDoLists.forEach((myToDo, idx)=>{
            const label = document.createElement('label');
            let cnt = 0;

            myToDo.toDo.forEach((el)=>{
                if (el.complete == false) {
                    cnt++;
                }
            });

            label.classList.add('boxLabel');
            label.htmlFor = `box${idx}`;

            let txt = `
                <input type="checkbox" id="box${idx}" class="checkBoxs" disabled>
                <div class="box">
                    <div class="title">
                        <div class="in">
                            <div class="tit">${myToDo.title}</div>
                            <span class="date">${myToDo.date} </span>
                            <span class="listCount">할 일이 ${cnt}개 남았습니다.</span>
                        </div>
                    </div>
                    <div class="toDoLists">
                        <div class="in">
                            <ul>`;
                            myToDo.toDo.forEach((el, index)=>{
                                txt += el.complete === true ? 
                                `<li><input type="checkbox" name="" id="box${idx}_list${index}" checked onChange="modLocal(this)" /><label for="box${idx}_list${index}">${el.text}</label><span class="delListBtn" onClick="delLocalToDo(this)"></span></li>` :
                                `<li><input type="checkbox" name="" id="box${idx}_list${index}" onChange="modLocal(this)"/><label for="box${idx}_list${index}">${el.text}</label><span class="delListBtn" onClick="delLocalToDo(this)"></span></li>`;
                            });
                            txt += `</ul>
                        </div>
                    </div>
                    <div class="addToDoArea">
                        <div class="in">
                            <input class="newList" type="text" placeholder="할 일을 입력 후, Enter를 누르세요" onkeyup="enterCheck();" />
                        </div>
                    </div>
                    <button class="toDoBtn addToDo" onclick="javascript:toDoBtnClick(this);" type="button"></button>
                </div>
            `;

            label.innerHTML = txt;
            $boxArea.appendChild(label);
        });
    }
}