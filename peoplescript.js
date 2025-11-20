



document.addEventListener("DOMContentLoaded", function () {
    const targets = JSON.parse(sessionStorage.getItem("targets"));
    const scrollTargetId = sessionStorage.getItem("scrollTargetId");

    // 여러 div 클래스 변경
    if (targets && targets.length > 0) {
        targets.forEach(target => {
            const targetDiv = document.getElementById(target.id);
            if (!targetDiv) {
                console.log(`"${target.id}" ID를 가진 요소를 찾을 수 없음.`);
                return;
            }

            targetDiv.classList.add(target.add);
            targetDiv.classList.remove(target.remove);
        });
        sessionStorage.removeItem("targets"); // 데이터 삭제
    }

    // 특정 태그로 자동 스크롤
    if (scrollTargetId) {
        const scrollTarget = document.getElementById(scrollTargetId);
        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: "smooth" });
        } else {
            console.log(`"${scrollTargetId}" ID를 가진 요소를 찾을 수 없음.`);
        }
        sessionStorage.removeItem("scrollTargetId"); // 데이터 삭제
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const bon_boxes = document.querySelectorAll(".interview_box div");

    bon_boxes.forEach(bon_box => {
        bon_box.addEventListener("click", function (event) {
            event.stopPropagation(); // 부모 이벤트 방지
            if (!event.detail || event.detail === 1) {
                bon_boxes.forEach(b => {
                    b.classList.remove("this_box");
                    b.classList.add("notthis_box");
                });

                this.classList.add("this_box");
                this.classList.remove("notthis_box");
            }
        });
    });
});

function updateClasses_(targetId) {
    const interviewBox = document.querySelector(".interview_box");

    const directChildren = Array.from(interviewBox.children);

    directChildren.forEach(div => {
        div.classList.remove("this_box", "notthis_box"); 
        if (div.id === targetId) {
            div.classList.add("this_box");
        } else {
            div.classList.add("notthis_box");
        }
    });
}


window.addEventListener("scroll", function() {
    const bon_h1 = document.getElementById("bon_h1");
    if (!bon_h1) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 780; // 원하는 스크롤 위치 (예: 500px 이상일 때)

    if (scrollPosition > triggerPoint) {
        bon_h1.style.opacity = 1;
    } else {
        bon_h1.style.opacity = 0;
    }
});

window.addEventListener("scroll", function() {
    const bon_p = document.getElementById("bon_p");
    if (!bon_p) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 980; // 원하는 트리거 위치 (예: 800px 이상일 때)

    if (scrollPosition > triggerPoint) {
        bon_p.style.opacity = 1; // 800px 이상이면 보이게 설정
    } else {
        bon_p.style.opacity = 0; // 그 전에는 투명
    }
});

document.addEventListener("scroll", function () {
    const busImage = document.getElementById("bus10"); // bus10 이미지 선택
    const scrollY = window.scrollY; // 현재 스크롤 위치 가져오기

    if (scrollY > 1500) { 
        busImage.style.zIndex = "-3"; // 1500px 이상이면 z-index 변경
    } else {
        busImage.style.zIndex = "-5"; // 원래 값으로 복구
    }
});


window.addEventListener("scroll", function() {
    const bon_h1_1 = document.getElementById("bon_h1_1");
    if (!bon_h1_1) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 4300; // 원하는 스크롤 위치 (예: 500px 이상일 때)

    if (scrollPosition > triggerPoint) {
        bon_h1_1.style.opacity = 1;
    } else {
        bon_h1_1.style.opacity = 0;
    }
});

window.addEventListener("scroll", function() {
    const bon_p_1 = document.getElementById("bon_p_1");
    if (!bon_p_1) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 4500; // 원하는 트리거 위치 (예: 800px 이상일 때)

    if (scrollPosition > triggerPoint) {
        bon_p_1.style.opacity = 1; // 800px 이상이면 보이게 설정
    } else {
        bon_p_1.style.opacity = 0; // 그 전에는 투명
    }
});



//이동시키기//
function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); // 부드러운 이동
    }
}


function loadPage(targetPage, targets, scrollTargetId) {
    window.location.href = targetPage;

    // 여러 div 변경을 위한 데이터 저장
    sessionStorage.setItem("targets", JSON.stringify(targets));

    // 특정 태그로 이동할 ID 저장
    sessionStorage.setItem("scrollTargetId", scrollTargetId);
}


//누르면 더블클릭//
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttons");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // 부모 이벤트 방지

            // 더블클릭 이벤트 생성
            const dblClickEvent = new MouseEvent("dblclick", {
                bubbles: true, // 이벤트 전파 설정
                cancelable: true, // 이벤트 취소 가능 설정
                detail: 2 // 클릭 횟수를 2로 설정 (더블클릭)
            });

            this.dispatchEvent(dblClickEvent); // 강제로 더블클릭 이벤트 발생
        });

        // 더블클릭 이벤트 핸들러
        button.addEventListener("dblclick", function () {
            console.log("더블클릭으로 간주됨:", this);
        });
    });
});



const target = document.getElementById('interviewOne');
const tooltip = document.getElementById('tooltip');
let timeout;

target.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
    document.addEventListener('mousemove', moveTooltip);

    // 3초 후 요소 숨김
    timeout = setTimeout(() => {
        tooltip.style.display = 'none';
        document.removeEventListener('mousemove', moveTooltip);
    }, 3000);
});

target.addEventListener('mouseleave', () => {
    clearTimeout(timeout);
    tooltip.style.display = 'none';
    document.removeEventListener('mousemove', moveTooltip);
});

function moveTooltip(event) {
    const tooltipWidth = tooltip.offsetWidth;
    const viewportWidth = window.innerWidth;

    let posX = event.pageX + 15;
    let posY = event.pageY + 15;

    // 툴팁이 창의 오른쪽 끝을 넘어가지 않도록 제한
    if (posX + tooltipWidth > viewportWidth) {
        posX = viewportWidth - tooltipWidth - 15;
    }

    tooltip.style.left = `${posX}px`;
    tooltip.style.top = `${posY}px`;
}