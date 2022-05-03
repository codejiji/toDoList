const addBtn = document.querySelector('.addBtn');

// 타이틀이 지정되지않은 박스 존재 여부 체크 변수
let isNewBox = false;

//event
addBtn.addEventListener('click', addToDoBox);


//function
function addToDoBox() {
    const weekList = ['일','월','화','수','목','금','토'];
    const date = new Date();
    const boxNo = myToDoLists.length == 0 ? 0 : myToDoLists.length;

    let txt = 
    `<input type="checkbox" id="box${boxNo}" class="checkBoxs" disabled>
    <div class="box">
        <div class="title">
            <div class="in">
                <input class="toDoListTit autoFocus" type="text" placeholder="제목을 입력해 주세요." onkeyup="enterCheck();" />
                <span class="date">${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${weekList[date.getDay()]}요일 </span>
                <span class="listCount">할 일이 <i>0</i>개 남았습니다.</span>
            </div>
        </div>
        <div class="toDoLists">
            <div class="in">
                <ul>
                </ul>
            </div>
        </div>
        <div class="addToDoArea">
            <div class="in">
                <input class="newList" type="text" placeholder="할 일을 입력 후, Enter를 누르세요" onkeyup="enterCheck();" />
            </div>
        </div>
        <button class="toDoBtn addToDo" onclick="javascript:toDoBtnClick(this);" type="button"></button>
    </div>`;
    

    if(!isNewBox){
        // 1. label 태그 생성
        // 2. for 속성 추가
        // 3. class 추가
        const label = document.createElement('label');
        label.classList.add('boxLabel');
        label.htmlFor = `box${boxNo}`;

        //4. txt를 label안에 넣어주기
        //5. label html에 추가(.boxArea)
        label.innerHTML = txt;
        document.querySelector('.boxArea').appendChild(label);

    } else {
        // isNewBox == true
        alert('이미 새로운 박스가 존재합니다. \n제목을 입력 후 Enter를 눌러주세요.');
    }

    isNewBox = true;
}