function toggleGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentText = greetingElement.innerText;

    // 현재 텍스트를 확인하고 다른 언어로 변경
    if (currentText.includes("안녕하세요")) {
        greetingElement.innerText = "Hẹn gặp lại! (또 만나요!)";
        greetingElement.style.color = "#FFD700"; // 노란색으로 텍스트 색상 변경
    } else {
        greetingElement.innerText = "안녕하세요! Xin chào!";
        greetingElement.style.color = "#ffffff"; // 다시 흰색으로
    }
}