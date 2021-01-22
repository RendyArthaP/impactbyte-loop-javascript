// Soal 1
for (let i = 1; i <= 100; i++) {
  document.write("<p>User ke-" + i +" </p>")
}

// Soal 2
for (let a = 1; a <= 20; a += 2) {
  console.log(a)
}

// Soal 3
for (let angka = 0; angka <= 20; angka++) {
  if((angka%2) === 1) {
    console.log('Bilangan ganjil', angka)
  } 
  else if((angka%2) === 0) {
    console.log('Bilangan genap', angka)
  }
}

// Soal 4
let conf = 0

while(confirm('Apakah anda akan mengulang?')) {
  conf++;
  console.log(conf)
}
alert('Anda mengulang sebanyak ' + conf);

// Soal 5
let impactByte = 'Impact Byte'

while(prompt('Apa kepanjangan dari IB?') !== impactByte) {
  alert('Jawaban anda salah')
}
alert('Jawaban anda benar')

