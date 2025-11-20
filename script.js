let scrollY = 0;

function lockScroll() {
    scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
}

function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    window.scrollTo(0, scrollY);
}

// 페이지 처음 실행 → 스크롤 잠금
lockScroll();

  const target = document.getElementById("firstview");
  const tooltip = document.getElementById("tooltip");


const targetDiv = document.getElementById("firstview"); // 사라질 div 선택

targetDiv.addEventListener("click", () => {
    targetDiv.style.display = "none";
});


const options = document.querySelectorAll(".option");
const resultScreen = document.getElementById("result-screen");

options.forEach(option => {
    option.addEventListener("click", () => {
        const answer = option.getAttribute("data-answer");

        if (answer === "correct") {
            // 정답 처리
            resultScreen.style.display = "flex";
        } else {
            // 오답 처리
            option.classList.add("shake");
            setTimeout(() => {
                option.style.display = "none"; // 박스 제거
            }, 500);
        }
    });
});

const secondDiv = document.getElementById("secondview"); // 사라질 div 선택



resultScreen.addEventListener("click", () => {
    const black = document.getElementById("black-fade");

    // 1) 화면 어둡게 (페이드아웃)
    black.classList.add("show");

    // 강제 리페인트(transition 누락 방지)
    // 읽기 연산으로 브라우저에게 스타일 적용을 강제
    void black.offsetWidth;

    // 2) transition 끝났음을 안전하게 기다림 (fallback 타임아웃 포함)
    const cleanupAndShowMain = () => {
        // 제거할 것들
        secondDiv.style.display = "none";
        resultScreen.style.display = "none";
        unlockScroll();

        // 3) 검정 화면을 다시 제거(페이드인)
        // (약간의 딜레이를 주면 더 자연스러움)
        requestAnimationFrame(() => {
            // 다음 프레임에 클래스 제거해서 1 -> 0 트랜지션 발생
            black.classList.remove("show");
        });
    };

    // transitionend 이벤트로 정확히 감지
    const onTransitionEnd = (e) => {
        if (e.propertyName === 'opacity') {
            // 이벤트 한 번만 처리
            black.removeEventListener('transitionend', onTransitionEnd);
            cleanupAndShowMain();
        }
    };

    black.addEventListener('transitionend', onTransitionEnd);

    // safety fallback: transitionend가 발생하지 않을 경우 대비
    setTimeout(() => {
        if (black.classList.contains('show')) {
            // 만약 아직 처리 안됐으면 강제 실행
            black.removeEventListener('transitionend', onTransitionEnd);
            cleanupAndShowMain();
        }
    }, 1100); // CSS 800ms + 여유
});


function loadPage(targetPage, targets, scrollTargetId) {
    window.location.href = targetPage;

    // 여러 div 변경을 위한 데이터 저장
    sessionStorage.setItem("targets", JSON.stringify(targets));

    // 특정 태그로 이동할 ID 저장
    sessionStorage.setItem("scrollTargetId", scrollTargetId);
}

function simpleloadPage(targetPage, scrollTargetId) {
    window.location.href = targetPage;

    // 특정 태그로 이동할 ID 저장
    sessionStorage.setItem("scrollTargetId", scrollTargetId);
}


//보이기
const selectBox1 = document.getElementById("select1");
const hiddenRows1 = ["row1_1"].map(id => document.getElementById(id));

hiddenRows1.forEach(row => {
    if (row) row.style.transition = "opacity 0.5s"; // 부드러운 페이드 효과 적용
});

selectBox1.addEventListener("mouseenter", () => {
    hiddenRows1.forEach(row => {
        if (row) row.style.opacity = "1"; // 투명하게 만들기
    });
});

selectBox1.addEventListener("mouseleave", () => {
    hiddenRows1.forEach(row => {
        if (row) row.style.opacity = "0"; // 다시 나타나기
    });
});



const selectBox2 = document.getElementById("select2");
const hiddenRows2 = ["row1_1", "row1_2"].map(id => document.getElementById(id));

hiddenRows2.forEach(row => {
    if (row) row.style.transition = "opacity 0.5s"; // 부드러운 페이드 효과 적용
});

selectBox2.addEventListener("mouseenter", () => {
    hiddenRows2.forEach(row => {
        if (row) row.style.opacity = "1"; // 투명하게 만들기
    });
});

selectBox2.addEventListener("mouseleave", () => {
    hiddenRows2.forEach(row => {
        if (row) row.style.opacity = "0"; // 다시 나타나기
    });
});



const selectBox3 = document.getElementById("select3");
const hiddenRows3 = ["row1_1", "row1_2", "row2_1", "row2_2"].map(id => document.getElementById(id));

hiddenRows3.forEach(row => {
    if (row) row.style.transition = "opacity 0.5s"; // 부드러운 페이드 효과 적용
});

selectBox3.addEventListener("mouseenter", () => {
    hiddenRows3.forEach(row => {
        if (row) row.style.opacity = "1"; // 투명하게 만들기
    });
});

selectBox3.addEventListener("mouseleave", () => {
    hiddenRows3.forEach(row => {
        if (row) row.style.opacity = "0"; // 다시 나타나기
    });
});



const selectBox4 = document.getElementById("select4");
const hiddenRows4 = ["row1_1", "row1_2", "row2_1", "row2_2", "row1_3", "row1_4"].map(id => document.getElementById(id));

hiddenRows4.forEach(row => {
    if (row) row.style.transition = "opacity 0.5s"; // 부드러운 페이드 효과 적용
});

selectBox4.addEventListener("mouseenter", () => {
    hiddenRows4.forEach(row => {
        if (row) row.style.opacity = "1"; // 투명하게 만들기
    });
});

selectBox4.addEventListener("mouseleave", () => {
    hiddenRows4.forEach(row => {
        if (row) row.style.opacity = "0"; // 다시 나타나기
    });
});



const selectBox5 = document.getElementById("select5");
const hiddenRows5 = ["row1_1", "row1_2", "row2_1", "row2_2", "row1_3", "row1_4", "row2_3", "row2_4"].map(id => document.getElementById(id));

hiddenRows5.forEach(row => {
    if (row) row.style.transition = "opacity 0.5s"; // 부드러운 페이드 효과 적용
});

selectBox5.addEventListener("mouseenter", () => {
    hiddenRows5.forEach(row => {
        if (row) row.style.opacity = "1"; // 투명하게 만들기
    });
});

selectBox5.addEventListener("mouseleave", () => {
    hiddenRows5.forEach(row => {
        if (row) row.style.opacity = "0"; // 다시 나타나기
    });
});

