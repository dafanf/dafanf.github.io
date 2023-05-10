function formatNumber() {
  let numberInput = document.getElementById("number-field");
  let value = numberInput.value;
  value = value.replace(/\D/g, ""); // Remove any non-digit characters
  value = value.replace(/(\d{3})(?=\d)/g, "$1."); // Add a dot after every 3 digits
  numberInput.value = value;
}

document.getElementById("number-field").addEventListener("input", formatNumber);

let kantongSelect = document.getElementById("kantong-select");
let pengeluaranText14 = document.getElementById("pengeluaran-text14").getElementsByTagName("span")[0];

function updatePengeluaranText14(selectedValue) {
  // Use selectedValue to calculate the new value for the text in pengeluaranText14
  let newValue = "Rp0"; // Replace with your logic
  if (selectedValue === "A") {
    pengeluaranText14.innerText = "A";
  } else if (selectedValue === "B") {
    pengeluaranText14.innerText = "B";
  } else if (selectedValue === "C") {
    pengeluaranText14.innerText = "C";
  } else {
    pengeluaranText14.innerText = "";
  }
  pengeluaranText14.innerText = newValue;
}

kantongSelect.addEventListener("change", function () {
  let selectedValue = kantongSelect.value;
  updatePengeluaranText14(selectedValue);
});

var rupiah = document.getElementById("rupiah");
rupiah.addEventListener("keyup", function (e) {
  // tambahkan 'Rp.' pada saat form di ketik
  // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
  rupiah.value = formatRupiah(this.value, "Rp. ");
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
}
