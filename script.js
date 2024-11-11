/* 
console.log("Hello nice")

var name = "nice"
console.log("Hello " + name)
console.error(name)

name = "pumpkins"
console.log("Hello " + name)

var firstname = "chanakan"
var lastname = "prayoonphong"
console.log(firstname + " " + lastname)

console.log(firstname + " " +  lastname)

var number = 101
console.log(number + 1)

console.log(typeof number)

var nameehe = "chanakan" + " " + "prayooonphong"
console.log(nameehe)

var calc = (4+2*2/2*2+4+1-5+19)+91
console.log(calc)

{
    var x = 20
    let y = 71
}

console.log(x) */

////////



var yn = prompt("เลขที่ต้องการซี้อ :")
console.log(yn)

if (yn == false) {
    alert("กรอกข้อมูลรึยีง");
    window.location.reload();
} /* else if (typeof yn != number) {
    alert("เขียนเลขสิวะ")
    window.location.reload();
} */


document.getElementById("yn").innerHTML = yn

var res = Math.floor(Math.random() * 100)

console.log(res);

document.getElementById("res").innerHTML = res

var calc = yn != res

if (calc == false) {
    document.getElementById("result").innerHTML = "เยดเข้ ถูกหวย ทำได้ไงวะะะ??? *เสียง PangBoy*"
} else {
    document.getElementById("result").innerHTML = "ว้ายยยย โดนแดก บอกแล้วอย่าซี้อหวยก็ไม่เชี่อ"
}

console.log("AYO มาทำเหี้ยอะไรที่ console ไอชาตินรก");