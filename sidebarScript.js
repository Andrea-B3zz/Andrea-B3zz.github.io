function openNav() {
    document.getElementById("movable").style.width = "200px";
    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("closeBtn").style.visibility="visible";
  }
  
  function closeNav() {
    document.getElementById("movable").style.width = "0";
    document.getElementById("main").style.marginLeft= "150px";
    document.getElementById("closeBtn").style.visibility="hidden";
  }