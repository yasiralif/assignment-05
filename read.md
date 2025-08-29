1.
  gateElementById  দিয়ে আমি html এর  ভিতরে থাকা যে কোন ট্যাগের  মধ্যে থাকা আইডি দিয়ে javascripte সাথে একটা সম্পর্ক গঠন করতে পারি |  gateElementById  দিয়ে html এর  ভিতরে থাকা একটা নির্দিষ্ট আইডিকেই সিলেক্ট করতে পারি 

<p id="items">One</p>
gateElementById(“items”)

getElementsByClassName  দিয়ে আমি html এর  ভিতরে থাকা যে কোন ট্যাগের  মধ্যে থাকা ক্লাস  দিয়ে  javascripte সাথে একটা সম্পর্ক গঠন করতে পারি |  getElementsByClassName  দিয়ে আমি html এর  ভিতরে থাকা ক্লাস সিলেট করতে পারি |
<p class="items">One</p>
<p class="items">Two</p>
getElementsByClassName(“items”)

querySelector দিয়ে আমি html এর  ভিতরে থাকা  এলিমেন্ট গুলা যেকোনো একটিকে css ক্লাসের মত দিয়ে ব্যবহার করতে পারি এবং  javascripte সাথে একটা সম্পর্ক গঠন করতে পারি | 
<p class="items">One</p>
<p class="items">Two</p>
querySelecto(‘.items’)

querySelectorAll দিয়ে আমি html এর  ভিতরে থাকা  এলিমেন্ট গুলা একাধিক css ক্লাসের মত দিয়ে ব্যবহার করতে পারি এবং  javascripte সাথে একটা সম্পর্ক গঠন করতে পারি |  
<p class="items">One</p>
<p class="items">Two</p>
querySelectoAll(‘.items’)

2.Dom দিয়ে JavaScript এ নতুন element তৈরি করতে হয় document.createElement() দিয়ে।
     <div class="container">
</div>

তৈরি করার উপায়
const newPTag = document.createElement("p");
newPara.innerText = "এখানে কিছু ";
 যোগ করার উপায়
const parentDiv = document.getElementById("container");
parentDiv.appendChild(newPTag);






3.Event Bubbling হলো এমন একটা প্রক্রিয়া যেখানে কোনো এলিমেন্ট এর উপর event (যেমন: click,focus) ঘটলে, সেটা শুধু ওই element-এই সীমাবদ্ধ থাকে না, বরং ধাপে ধাপে তার parent, তারপর grandparent, তারপর document পর্যন্ত চলে যায়।

Html  

<div id="parent" >
  Parent
  <button id="child">Click Me</button>
</div>

Java

const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("click", function () {
  console.log("Child button clicked!");
});

parent.addEventListener("click", function () {
  console.log("Parent div clicked!");
});

4.Event Delegation দিয়ে parent element মধ্যে event listener দিয়ে child element এর event হ্যান্ডল করা।
Html 
<div id="btn-container">
  <button class="btn">Yasir</button>
  <button class="btn">Arafat</button>
  <button class="btn">Alif</button>
</div>



Js
const container = document.getElementById("btn-container");

container.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log(e.target.innerText + " clicked!");
  }
});




5. event.preventDefault হল কোনো element-এর default (বিল্ট-ইন) behavior বন্ধ করে।
যেমন from ট্যাগ এর মধ্যে button থাকলে বাটনে ক্লিক করলে অটোমেটিক  রিলোড নেয়|
 এটা বন্ধ করার জন্য event.preventDefault() ব্যবহার করা হয়| event কে প্যারামিটার হিসেবে নেওয়া হয় |
Html 

<form id=”form”>
<button id=”submit”>Submit</button>
</form>
 Js
const form = document.getElementById("submit");

form.addEventListener("click", function (event) {
event.preventDefault()
  	console.log("Sumbit button Click");
});



event.stopPropagation কাজ হল event bubbling বন্ধ করে দেয়। মানে event শুধু target element এ সীমাবদ্ধ থাকবে, উপরের parent element এ যাবে না
Html 

<form id=”form”>
<button id=”submit”>Submit</button>
</form>
 Js
const form = document.getElementById("submit");

form.addEventListener("click", function (event) {
event.stopPropagationt()
  	console.log("Sumbit button Click");
});














