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

function updateClasses(targetId) {
    const interviewBox2 = document.querySelector(".interview_box2");
    const directChildren2 = Array.from(interviewBox2.children);

    directChildren.forEach(div => {
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
    const triggerPoint = 780; // 원하는 스크롤 위치 (예: 500px 이상일 때)

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
    const triggerPoint = 980; // 원하는 트리거 위치 (예: 800px 이상일 때)

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


window.addEventListener("scroll", function() {
    const stu_h1_1 = document.getElementById("stu_h1_1");
    if (!stu_h1_1) return; // 요소가 없으면 실행 중지

    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPoint = 2900; // 원하는 스크롤 위치 (예: 500px 이상일 때)

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
    const triggerPoint = 3100; // 원하는 트리거 위치 (예: 800px 이상일 때)

    if (scrollPosition > triggerPoint) {
        stu_p_1.style.opacity = 1; // 800px 이상이면 보이게 설정
    } else {
        stu_p_1.style.opacity = 0; // 그 전에는 투명
    }
});