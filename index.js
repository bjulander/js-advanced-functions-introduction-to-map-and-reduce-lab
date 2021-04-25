// Your code here 
MyArray = [1, 2, 3, -9]

// let mapToNegativize = MyArray.map(function(element){
//     return console.log(element * -1)
// })

function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(-1 * src[i])
    }
    return r
  }

    function mapToNoChange(MyArray){
        return MyArray
    }   

function mapToDouble(MyArray){
    let newArray = []
    for (let i = 0; i < MyArray.length; i++) {
        newArray.push( 2 * MyArray[i])
}
    return newArray
}

function mapToSquare(MyArray){
    let newArray = []
    for (let i = 0; i < MyArray.length; i++) {
        newArray.push( MyArray[i] * MyArray[i])
}
    return newArray
}

function reduceToTotal(MyArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < MyArray.length; i++ ) {
      total = total + MyArray[i]
    }
    return total
  }
  
  function reduceToAllTrue(MyArray) {
    for (let i = 0; i < MyArray.length; i++ ) {
        if (!MyArray[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(MyArray) {
    for (let i = 0; i < MyArray.length; i++ ) {
        if (MyArray[i]) return true
    }
    return false
  }