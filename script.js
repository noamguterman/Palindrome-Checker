const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  if (!textInput.value) {
    alert("Please input a value");
  } else {
    const cleanedStr = textInput.value.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const isPalindrome = cleanedStr === cleanedStr.split('').reverse().join('');
    result.innerText = textInput.value + (isPalindrome ? " is a palindrome" : " is not a palindrome");
  }
});