document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});

document.getElementById("showMore").addEventListener("click", function() {
    let detailsDiv = document.querySelector(".details");
    detailsDiv.classList.toggle("hidden");

    if (!detailsDiv.classList.contains("hidden")) {
        let text = `
        Name: Divyansh Nafde
        Skills: Java, C, C++, SQL, HTML, React, Problem Solving
        Experience: Operations Executive at Reliance General Insurance
        Career Goal: To become a Full-Stack Developer
        Relationship: In a long-distance relationship with Supriya ❤
        `;

        let i = 0;
        let displayText = "";
        let speed = 50;  // Typing speed

        function typeWriter() {
            if (i < text.length) {
                displayText += text.charAt(i);
                document.getElementById("roboticText").textContent = displayText;
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        document.getElementById("roboticText").textContent = "";
        typeWriter();
    }
});
