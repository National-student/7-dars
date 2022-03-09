// // js file
// var sumInput = function (inputVal) {
//     var allValues = []
//     var sum = 0
  
//     while (inputVal && !isNaN(Number(inputVal)) && inputVal.trim().length ) {
//       allValues.push(Number(inputVal))
  
//       inputVal = prompt('Yana kiriting:')
//     }
  
//     for (var item of allValues) {
//       sum += item
//     }
  
//     return sum
// }

// console.log(sumInput(prompt("Son kiriting")));

var newText = "Then Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

var array = newText.split(" ");

var newMassiv1 = array[0];
var newSumm = 0;

for (var number of array) {
  
  var sum = 0;

    for (var result of array) {
      if (number == result) {
        sum++;
      }
    }
    if (newSumm < sum) {
      newMassiv1 = number;
      newSumm = sum
    }
  }

  console.log(newMassiv1, newSumm);