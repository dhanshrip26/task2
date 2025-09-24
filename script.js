document.getElementById("contactForm").addEventListener("submit", function(e) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
      alert("All fields are required!");
      e.preventDefault();
    } else if (!email.match(emailPattern)) {
      alert("Enter a valid email address!");
      e.preventDefault();
    }
  });

 function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    if (task === "") return alert("Please enter a task!");

    let li = document.createElement("li");
    li.textContent = task;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function() {
      li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }