// 动态更新日期和时间
function updateDateTime() {
    const now = new Date();

    // 获取日期和时间
    const date = now.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' }); // 去掉年份
    const time = now.toLocaleTimeString('zh-CN', { hour12: false });

    // 分别更新日期和时间
    document.getElementById('now_date').textContent = date;
    document.getElementById('now_time').textContent = time;
}

// 每秒更新一次时间
setInterval(updateDateTime, 1000);
updateDateTime();

// 创建自定义鼠标光标
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});
console.log("粒子背景初始化测试...");
particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 2,
        },
    },
});
console.log("粒子背景初始化完成！");


function arrangeArcButtons() {
    const leftButtons = document.querySelectorAll(".arc-left .button");
    const rightButtons = document.querySelectorAll(".arc-right .button");

    const radius = window.innerWidth / 2; // 调整半径大小
    const angleStart = 25; // 起始角度（负90度，从顶部开始）
    const angleEnd = -25;   // 结束角度（负45度，向下延伸）
    const circleCenterY = window.innerHeight * 0.25; // 圆心纵坐标，超出屏幕范围
    const angleStep = (angleEnd - angleStart) / (leftButtons.length - 1); // 每个按钮的角度间隔

    // 左侧按钮排列
    leftButtons.forEach((button, index) => {
        const angle = angleStart + index * angleStep;
        const radian = (angle * Math.PI) / 180; // 转换为弧度

        const x = -radius * Math.cos(radian) + window.innerHeight * 0.8; // 左侧 x 坐标（向左）
        const y = circleCenterY + radius * Math.sin(radian); // y 坐标偏移
        button.style.transform = `translate(${x}px, ${y}px)`;
    });

    // 右侧按钮排列
    rightButtons.forEach((button, index) => {
        const angle = angleStart + index * angleStep;
        const radian = (angle * Math.PI) / 180; // 转换为弧度

        const x = radius * Math.cos(radian) - window.innerHeight * 0.2 - window.innerHeight * 0.8;  // 右侧 x 坐标（向右）
        const y = circleCenterY + radius * Math.sin(radian); // y 坐标偏移
        button.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// 初始化圆弧布局
arrangeArcButtons();
window.addEventListener("resize", arrangeArcButtons);
