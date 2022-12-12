
// const orderList1 = document.getElementById('ordered-list');
// const childrenListOl = orderList1.childNodes;
// console.log(childrenListOl.length);
// function playerEntry() {
//     const playerButton = event.target.parentNode;
//     const children = playerButton.children;
//     const children1 = children[0].innerText;

//     const li = document.createElement('li');
//     li.innerText = children1;
//     return li;
// }
// console.log('must use one or more function for BONUS Marks');
// //alert('must use one or more function for BONUS Marks')
// document.getElementById('select-player').addEventListener('click', function (event) {
//     const selectButton = event.target;
//     //console.log(selectButton);
//     selectButton.disabled = true;
//     let colorAsString = '#FEC6F0';
//     selectButton.style.backgroundColor = colorAsString;
//     const liChild = playerEntry();
//     const ol = document.getElementById('ordered-list');
//     ol.appendChild(liChild);
//     var liList = document.querySelectorAll('li');
//     if (liList.length > 5) {
//         ol.removeChild(ol.lastElementChild);
//         selectButton.disabled = false;
//         alert('Already You have bought Five Player');
//         //selectButton.enabled = true;
//         let colorAsString1 = 'rgba(42, 121, 211, 0.884)';
//         selectButton.style.backgroundColor = colorAsString1;
//     }
// })
document.getElementById('calculate-button').addEventListener('click', function () {
    const perPlayerValue = document.getElementById('single-player-expense').value;
    //console.log(perPlayerValue);
    const playerValueTotal = perPlayerValue * 5;
    const perPlayerExpense = document.getElementById('player-expense');
    perPlayerExpense.innerText = playerValueTotal;
    //console.log(perPlayerExpense);
})
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerValue = document.getElementById('manager-value').value;
    const coachValue = document.getElementById('coach-value').value;
    const totalPlayerExpense = document.getElementById('player-expense').innerText;
    const totalExpenseElement = document.getElementById('total-expense');
    const totalExpenseValue = parseInt(totalPlayerExpense) + parseInt(managerValue) + parseInt(coachValue);
    totalExpenseElement.innerText = totalExpenseValue;
})
const selectButton = document.getElementsByClassName('select-button');
console.log(selectButton)

for (var i = 0; i < selectButton.length; i++) {
    selectButton[i].addEventListener('click', function (event) {
        const targetEvent = event.target;
        console.log(targetEvent);
        targetEvent.disabled = true;
        const parentNode = targetEvent.parentNode;
        console.log(parentNode);
        const children = parentNode.children;
        const children1 = children[0].innerText;
        console.log(children1);
        const li = document.createElement('li');
        li.innerText = children1;
        const ol = document.getElementById('ordered-list');
        ol.appendChild(li);
        var liList = document.querySelectorAll('li');

        if (liList.length > 5) {
            ol.removeChild(ol.lastElementChild);
            targetEvent.disabled = false;
            alert('Already You have bought Five Player');
            //selectButton.enabled = true;
            let colorAsString1 = 'rgba(42, 121, 211, 0.884)';
            targetEvent.style.backgroundColor = colorAsString1;
        }

    });

}



