function changeNick() {
    document.getElementById("flip").innerHTML = document.getElementById("field").value;
    document.getElementById("field").value = null;
}

document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
            document.getElementById("flip").innerHTML = document.getElementById("field").value;
            document.getElementById("field").value = null;
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key == ' ') {
            document.getElementById("field").focus()
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
            document.getElementById("field").blur()
    }
  });