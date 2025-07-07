const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')

// let date = new Date()
// console.log(DataTransfer.toLocalTimeString());


setInterval(function () {
    let date = new Date()
    // console.log(DataTransfer.toLocalTimeString());
    clock.innerHTML = date.toLocaleTimeString();

} ,1000);
