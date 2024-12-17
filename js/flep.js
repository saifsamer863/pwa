function flipPage() {
    const page1 = document.getElementById("page1"); 
    const page2 = document.getElementById("page2");
    
    if (page1.style.transform === "") {
      page1.style.transform = "rotateY(-180deg)";
      page2.style.transform = "rotateY(0deg)";
    } else {
      page1.style.transform = "";
      page2.style.transform = "";
    }
  }
  
