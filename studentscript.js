

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
    const stu_boxes = document.querySelectorAll(".interview_box div");

    stu_boxes.forEach(stu_box => {
        stu_box.addEventListener("click", function (event) {
            event.stopPropagation(); // 부모 이벤트 방지
            if (!event.detail || event.detail === 1) {
                stu_boxes.forEach(b => {
                    b.classList.remove("this_box");
                    b.classList.add("notthis_box");
                });

                this.classList.add("this_box");
                this.classList.remove("notthis_box");
            }
        });
    });
});

function updateClasses(targetId) {
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

document.addEventListener("DOMContentLoaded", function () {
    const nur_boxes = document.querySelectorAll(".interview_box2 div");

    nur_boxes.forEach(nur_box => {
        nur_box.addEventListener("click", function (event) {
            event.stopPropagation(); // 부모 이벤트 방지
            if (!event.detail || event.detail === 1) {
                nur_boxes.forEach(b2 => {
                    b2.classList.remove("this_box2");
                    b2.classList.add("notthis_box2");
                });

                this.classList.add("this_box2");
                this.classList.remove("notthis_box2");
            }
        });
    });
});

function updateClasses2(targetId) {
    const interviewBox2 = document.querySelector(".interview_box2");
    const directChildren2 = Array.from(interviewBox2.children);

    directChildren2.forEach(div => {
        div.classList.remove("this_box2", "notthis_box2"); 
        if (div.id === targetId) {
            div.classList.add("this_box2");
        } else {
            div.classList.add("notthis_box2");
        }
    });
}

window.addEventListener("scroll", function() {
    const stu_h1 = document.getElementById("stu_h1");
    if (!stu_h1) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 380; // 원하는 스크롤 위치 (예: 500px 이상일 때)

    if (scrollPosition > triggerPoint) {
        stu_h1.style.opacity = 1;
    } else {
        stu_h1.style.opacity = 0;
    }
});

window.addEventListener("scroll", function() {
    const stu_p = document.getElementById("stu_p");
    if (!stu_p) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 580; // 원하는 트리거 위치 (예: 800px 이상일 때)

    if (scrollPosition > triggerPoint) {
        stu_p.style.opacity = 1; // 800px 이상이면 보이게 설정
    } else {
        stu_p.style.opacity = 0; // 그 전에는 투명
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

document.addEventListener("scroll", function () {
    const insideImage = document.getElementById("inside27");
    const scrollY = window.scrollY; // 현재 스크롤 위치 가져오기

    if (scrollY > 5500) { 
        insideImage.style.zIndex = "-2"; // 1500px 이상이면 z-index 변경
    } else {
        insideImage.style.zIndex = "-6"; // 원래 값으로 복구
    }
});

window.addEventListener("scroll", function() {
    const stu_h1_1 = document.getElementById("stu_h1_1");
    if (!stu_h1_1) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 3650; // 원하는 스크롤 위치 (예: 500px 이상일 때)

    if (scrollPosition > triggerPoint) {
        stu_h1_1.style.opacity = 1;
    } else {
        stu_h1_1.style.opacity = 0;
    }
});

window.addEventListener("scroll", function() {
    const stu_p_1 = document.getElementById("stu_p_1");
    if (!stu_p_1) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 3850; // 원하는 트리거 위치 (예: 800px 이상일 때)

    if (scrollPosition > triggerPoint) {
        stu_p_1.style.opacity = 1; // 800px 이상이면 보이게 설정
    } else {
        stu_p_1.style.opacity = 0; // 그 전에는 투명
    }
});

window.addEventListener("scroll", function() {
    const nur_h1_1 = document.getElementById("nur_h1_1");
    if (!nur_h1_1) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 8000; // 원하는 스크롤 위치 (예: 500px 이상일 때)

    if (scrollPosition > triggerPoint) {
        nur_h1_1.style.opacity = 1;
    } else {
        nur_h1_1.style.opacity = 0;
    }
});

window.addEventListener("scroll", function() {
    const nur_p_1 = document.getElementById("nur_p_1");
    if (!nur_p_1) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 8200; // 원하는 트리거 위치 (예: 800px 이상일 때)

    if (scrollPosition > triggerPoint) {
        nur_p_1.style.opacity = 1; // 800px 이상이면 보이게 설정
    } else {
        nur_p_1.style.opacity = 0; // 그 전에는 투명
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



const targets = document.querySelectorAll('#interview_one, #interview_two'); // 여러 ID 선택
const tooltip = document.getElementById('tooltip');
let timeout;

targets.forEach(target => {
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
});

function moveTooltip(event) {
    const tooltipWidth = tooltip.offsetWidth;
    const viewportWidth = window.innerWidth;

    let posX = event.pageX + 15;
    let posY = event.pageY + 15;

    // 오른쪽 경계를 초과하지 않도록 제한
    if (posX + tooltipWidth > viewportWidth) {
        posX = viewportWidth - tooltipWidth - 15;
    }

    tooltip.style.left = `${posX}px`;
    tooltip.style.top = `${posY}px`;
}