function onClick() {
    const first = document.getElementById("numberone").value;
    const second = document.getElementById("numbertwo").value;
    const text = document.getElementById("text").value;

    console.log("(nums): 1)", first, " 2)", second);
    console.log(first, "+", second, "=", parseFloat(first) + parseFloat(second));
    console.log(first, "-", second, "=", parseFloat(first) - parseFloat(second));
    console.log(first, "*", second, "=", parseFloat(first) * parseFloat(second));
    console.log(first, "/", second, "=", parseFloat(first) / parseFloat(second));
    console.log(first, "%", second, "=", parseFloat(first) % parseFloat(second));
    console.log("(pow): 1)", Math.pow(first, 2), " 2)", Math.pow(second, 2));
    console.log("(sqrt): 1)", Math.sqrt(first), " 2)", Math.sqrt(second));
    console.log("(abs): 1)", Math.abs(first), " 2)", Math.abs(second));

    console.log("(text): ", text);
    console.log("(up:) ", text.toUpperCase());
    console.log("(low:) ", text.toLowerCase());
}


//Задание 1
// function sum(a, b) {
//     return a + b;
//   }
  
//   console.log(sum(5, 3));

//Задание 2
// function checkEven(number) {
//     if (number % 2 === 0) {
//       console.log("Число четное");
//     } else {
//       console.log("Число нечетное");
//     }
//   }
  
//   checkEven(7);
//   checkEven(12); 