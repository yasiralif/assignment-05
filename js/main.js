// inner text to int covert
const history = [];

console.log(history);
function innerTextToInt(id) {
  const innerText = document.getElementById(id).innerText;
  const userInputValuue = parseInt(innerText);
  return userInputValuue;
}


// "emergency-copy" section
document
  .getElementById("emergency-copy")
  .addEventListener("click", function () {
    const copy = innerTextToInt("main-copy");
    console.log(copy);
    const coin = innerTextToInt("coin");
    const total1 = coin - 20;
    const total = copy + 1;
    if (copy >= 5 || total < 0) {
      return alert("you dont have any coin ");
    }
    alert("you copy thr number:999");
    document.getElementById("coin").innerText = total1;
    document.getElementById("main-copy").innerText = total;

    const data = {
      name: "emergency-copy",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    
  });
// 'police-copy' section
document.getElementById("police-copy").addEventListener("click", function () {
  const copy = innerTextToInt("main-copy");
  console.log(copy);
  const coin = innerTextToInt("coin");
  const total1 = coin - 20;
  const total = copy + 1;
  if (copy >= 5 || total < 0) {
    return alert("you dont have any coin ");
  }
  alert("you copy thr number:999");
  document.getElementById("coin").innerText = total1;
  document.getElementById("main-copy").innerText = total;
    const data = {
      name: "Police",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
});
// fire copy section
document.getElementById("fire-copy").addEventListener("click", function () {
  const copy = innerTextToInt("main-copy");
  console.log(copy);
  const coin = innerTextToInt("coin");
  const total1 = coin - 20;
  const total = copy + 1;
  if (copy >= 5 || total < 0) {
    return alert("you dont have any coin ");
  }
  alert("you copy thr number:999");
  document.getElementById("coin").innerText = total1;
  document.getElementById("main-copy").innerText = total;
  
    const data = {
      name: "fire-copy",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();

    
});
// "ambulance-copy" section
document
  .getElementById("ambulance-copy")
  .addEventListener("click", function () {
    const copy = innerTextToInt("main-copy");
    console.log(copy);
    const coin = innerTextToInt("coin");
    const total1 = coin - 20;
    const total = copy + 1;
    if (copy >= 5 || total < 0) {
      return alert("you dont have any coin ");
    }
    alert("you copy thr number:999");
    document.getElementById("coin").innerText = total1;
    document.getElementById("main-copy").innerText = total;
      const data = {
      name: "Ambulance",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
  });
// "women-copy" section
document.getElementById("women-copy").addEventListener("click", function () {
  const copy = innerTextToInt("main-copy");
  console.log(copy);
  const coin = innerTextToInt("coin");
  const total1 = coin - 20;
  const total = copy + 1;
  if (copy >= 5 || total < 0) {
    return alert("you dont have any coin ");
  }
  alert("you copy thr number:999");
  document.getElementById("coin").innerText = total1;
  document.getElementById("main-copy").innerText = total;
    const data = {
      name: "Women",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
});
// "anti-copy" section
document.getElementById("anti-copy").addEventListener("click", function () {
  const copy = innerTextToInt("main-copy");
  console.log(copy);
  const coin = innerTextToInt("coin");
  const total1 = coin - 20;
  const total = copy + 1;
  if (copy >= 5 || total < 0) {
    return alert("you dont have any coin ");
  }
  alert("you copy thr number:999");
  document.getElementById("coin").innerText = total1;
  document.getElementById("main-copy").innerText = total;
    const data = {
      name: "Anti",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
});
// ("electricity-copy")section
document
  .getElementById("electricity-copy")
  .addEventListener("click", function () {
    const copy = innerTextToInt("main-copy");
    console.log(copy);
    const coin = innerTextToInt("coin");
    const total1 = coin - 20;
    const total = copy + 1;
    if (copy >= 5 || total < 0) {
      return alert("you dont have any coin ");
    }
    alert("you copy thr number:999");
    document.getElementById("coin").innerText = total1;
    document.getElementById("main-copy").innerText = total;
      const data = {
      name: "Electricity",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
  });
//('railway-copy') section
document.getElementById("railway-copy").addEventListener("click", function () {
  const copy = innerTextToInt("main-copy");
  console.log(copy);
  const coin = innerTextToInt("coin");
  const total1 = coin - 20;
  const total = copy + 1;
  if (copy >= 5 || total < 0) {
    return alert("you dont have any coin ");
  }
  alert("you copy thr number:999");
  document.getElementById("coin").innerText = total1;
  document.getElementById("main-copy").innerText = total;
    const data = {
      name: "Railway",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
});
//"brac-copy" section
document.getElementById("brac-copy").addEventListener("click", function () {
  const copy = innerTextToInt("main-copy");
  console.log(copy);
  const coin = innerTextToInt("coin");
  const total1 = coin - 20;
  const total = copy + 1;
  if (copy >= 5 || total < 0) {
    return alert("you dont have any coin ");
  }
  alert("you copy thr number:999");
  document.getElementById("coin").innerText = total1;
  document.getElementById("main-copy").innerText = total;
    const data = {
      name: "Brac",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
});

//call option event


document.querySelectorAll(".call").forEach(function (e) {
  e.addEventListener("click", function () {
    const heart = innerTextToInt("heart");
    const t = heart - 1;
    if (t < 0) {
      return alert("you cant call");
    }
    alert("you can call");
    document.getElementById("heart").innerText = t;
    const data = {
      name: "call me",
      date: new Date().toLocaleTimeString(),
    };

    history.push(data);
    historyCall();
    
  });
});




const transatioContainer = document.getElementById("transation-container");
// transatioContainer.innerHTML = "";


// history.forEach((h,index)=>{

// console.log(h);

// });



  function historyCall(){
          for (const h of history) {
                const div = document.createElement("div");
  div.innerHTML = `
              <div class="transation-container" id=" transation-container">
                  
              <div class="flex justify-between mt-4 p-2">
                 <div>
                  <h1 class="font-medium text-xl">${h.name}</h1>
                  <p class="text-[#5C5C5C]">999</p>
                 </div>
                 <div>
                  <p>${h.date}</p>
                 </div>
              </div>
            
              </div>
    `;
  transatioContainer.appendChild(div);
          }
  
  }


