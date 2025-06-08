function hideElements() {
    document.getElementById("firstview").style.display = "none";
    document.getElementById("secondview").style.display = "none";
}

function hideElements(event) {
    event.stopPropagation(); // 클릭 이벤트가 부모 요소로 전달되지 않도록 설정
    event.preventDefault(); // 기본 링크 이동 방지

    const firstview = document.getElementById("firstview");
    const secondview = document.getElementById("secondview");

    if (firstview && secondview) {
        firstview.style.display = "none";
        secondview.style.display = "none";
    } else {
        console.log("해당 요소를 찾을 수 없습니다!");
    }
}

const targetDiv = document.getElementById("firstview"); // 사라질 div 선택

targetDiv.addEventListener("click", () => {
    targetDiv.style.display = "none"; // 클릭하면 div 숨기기
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

// 정답 화면 클릭 시 돌아가기
resultScreen.addEventListener("click", () => {
    secondDiv.style.display = "none";
});




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