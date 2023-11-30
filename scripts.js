document.addEventListener("DOMContentLoaded", () => {
  // Fetch tasks from the database.json file
  fetch("dataBase.json")
    .then((response) => response.json())
    .then((tasks) => {
      // Use tasks to update the DOM
      const taskList = document.getElementById("myUL");
      tasks.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.textContent = task.name;
        taskList.appendChild(listItem);
      });
      console.log(tasks);

      // Create a "close" button and append it to each list item
      var myNodelist = document.getElementsByTagName("LI");
      var i;
      for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
      }

      // Click on a close button to hide the current list item
      var close = document.getElementsByClassName("close");
      var i;
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.remove()
        };
      }

      // Add a "checked" symbol when clicking on a list item
      var list = document.querySelector("ul");
      list.addEventListener(
        "click",
        function (ev) {
          if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
          }
        },
        false
      );
    })
    .catch((error) => console.error("Error fetching tasks:", error));
});


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
      var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
