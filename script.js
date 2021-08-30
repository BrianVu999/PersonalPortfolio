document.getElementById("checkPortfolioButton").addEventListener("click", function() {
    document.getElementById("pageBody").scrollIntoView({ behavior: "smooth" });
});

let project = {
    imageSrc: "",
    title: "",
    programmingLanguage: "",
    webUrl: "",
    sourceCodeUrl: ""
};
//-----------------------------------------------------------------
//This part will be auto generated from database in the future

let projects = [];

project.imageSrc = "projectPics/ticTacToe.PNG";
project.title = "Tic Tac Toe";
project.programmingLanguage = "JavaScript, HTML/CSS";
project.webUrl = "https://brianvu999.github.io/TicTacToe/";
project.sourceCodeUrl = "https://github.com/BrianVu999/TicTacToe";
projects.push(project);

project = new Object();

project.imageSrc = "projectPics/playerManagement.PNG";
project.title = "Player Management App";
project.programmingLanguage = "PHP, HTML/CSS, MySQL";
project.webUrl = "http://vu8.dev.fast.sheridanc.on.ca/PersonalProjects/SQL-Management/index_HOME.php";
project.sourceCodeUrl = "https://github.com/BrianVu999/MySQL-Management";
projects.push(project);

project = new Object();

project.imageSrc = "projectPics/discussForum.PNG";
project.title = "Discussion Forum";
project.programmingLanguage = "JavaSpring, Thymeleaf, Junit, H2database, JDBC API";
project.webUrl = "https://www.youtube.com/watch?v=U7NsrTbkP8o&feature=youtu.be&ab_channel=BrianVu";
project.sourceCodeUrl = "https://github.com/BrianVu999/Discussion-Forum";
projects.push(project);

project = new Object();

project.imageSrc = "projectPics/RPS.PNG";
project.title = "Rock, Paper, Scissors";
project.programmingLanguage = "JavaScript, HTML/CSS";
project.webUrl = "https://brianvu999.github.io/Rock-Paper-Scissors/";
project.sourceCodeUrl = "https://github.com/BrianVu999/Rock-Paper-Scissors";
projects.push(project);

project = new Object();

project.imageSrc = "projectPics/timhortons.PNG";
project.title = "Timhorton Order App";
project.programmingLanguage = "PHP, HTML/CSS";
project.webUrl = "http://vu8.dev.fast.sheridanc.on.ca/PersonalProjects/Drink-Order-Form/";
project.sourceCodeUrl = "https://github.com/BrianVu999/Drink-Order";
projects.push(project);

project = new Object();

project.imageSrc = "projectPics/cookieInventory.jpeg";
project.title = "Cookie Inventory";
project.programmingLanguage = "Java, JavaFX";
project.webUrl = "https://github.com/BrianVu999/Cookie-Inventory";
project.sourceCodeUrl = "https://github.com/BrianVu999/Cookie-Inventory";
projects.push(project);

//-----------------------------------------------------------------

for (let oneProject of projects) {
    let divChild = document.createElement("div");
    let a1Child = document.createElement("a");
    a1Child.target = "parent";
    a1Child.className = "clickable";
    a1Child.href = oneProject.webUrl;
    let img1Child = document.createElement("img");
    img1Child.className = "projectImage";
    img1Child.src = oneProject.imageSrc;
    let spanChild = document.createElement("span");
    spanChild.className = "programmingLanguage";
    spanChild.innerHTML = "#" + oneProject.programmingLanguage;

    a1Child.appendChild(img1Child);
    a1Child.appendChild(document.createTextNode(oneProject.title));
    a1Child.appendChild(spanChild);
    divChild.appendChild(a1Child);

    let a2Child = document.createElement("a");
    a2Child.target = "parent";
    a2Child.href = oneProject.sourceCodeUrl;
    a2Child.className = "";
    let buttonChild = document.createElement("button");
    buttonChild.className = "viewCodeButton";
    buttonChild.innerHTML = "VIEWCODE";
    a2Child.children = "";
    a2Child.appendChild(buttonChild);

    divChild.appendChild(a2Child);

    document.getElementById("projectsGridContainer").appendChild(divChild);
}