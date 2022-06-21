// Your code here
const table = document.getElementsByTagName('table')[0]


function makeRow(){
    const row = document.createElement ('tr')
    for (let i = 0; i<3;i++){
        const td = document.createElement ('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

makeRow()
makeRow()


const button = document.getElementById('add-row')

button.addEventListener('click', makeRow)


table.addEventListener('click', colorized)
function colorized(event){
    console.log('clicked')
}