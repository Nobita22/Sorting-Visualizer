let arraySize = 100;
let min = 2;
let max = 1000;

let array = [arraySize];
let bubbleSortedArray = [arraySize];
generateArray();
function generateArray() {
    for ( i = 0; i < arraySize; i++) {
        array[i] = generateArrayValue(min, max);
       
    }
}
function generateArrayValue() {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(array);

bubbleSort(array);

function bubbleSort(array){
    bubbleSortedArray=Array.from(array);
    for( i=0;i<arraySize;i++){
        for( j=0;j<arraySize;j++){
            if(bubbleSortedArray[j]>bubbleSortedArray[j+1]){
                let x=bubbleSortedArray[j];
                bubbleSortedArray[j]=bubbleSortedArray[j+1];
                bubbleSortedArray[j+1]=x;

            }
        }
    }
}

console.log(bubbleSortedArray);

// top-down implementation
function merge(left, right) {
    let arr = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left.slice().concat(right.slice()));
  }
  
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  const arra = array;
  mergedArray=mergeSort(arra.slice()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(mergedArray);
  
  

 