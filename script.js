do {
  do {
    var price = prompt("Kokia prekes kaina?");
    var price = Number(price);
  } while (isNaN(price));
} while (price <= 0);
var price = price.toFixed(2);
console.log(price);
document.write("Prekes kaina = " + price + " EUR");

do {
  delivery = prompt(
    "Ar reikes pristatyti preke? Iveskite Y arba N "
  ).toUpperCase();

  if (delivery == "Y") {
    document.write("<br>" + "Uzsisakėte prekes su pristatymu");
    console.log("Uzsisakėte prekes su pristatymu");
    var city = prompt("Kur vešime paketėlį?").toUpperCase();
    document.write("<br>" + "Prekes pristatysime į  " + city);
    console.log("Prekes pristatysime į " + city);
  } else {
    if (delivery == "N") {
      document.write("<br>" + "Užsisakėte prekes be pristatymo");
      console.log("Užsisakėte prekes be pristatymo");
    } else {
      delivery = "W";
    }
  }
} while (delivery == "W");

console.log(delivery);

if (delivery == "N") {
  document.write("<br>" + "<br>" + "<br>" + "<br>");
  // document.write("1 variantas (be pristatymo)");
  document.write("<br>" + "Prekes kaina:  " + price + " EUR");
  document.write(
    "<br>" + "Prekes galite atsiimti Vilniuje, adresu Gedimino pr. 1A  "
  );
} else {
  document.write("<br>" + "<br>" + "<br>" + "<br>");
  //document.write("2 variantas (su pristatymu)");
  document.write("<br>" + "Prekės kaina:  " + price + " EUR");
  document.write("<br>" + "Pristatymas:  5" + " EUR");
  document.write("<br>" + "Pristatysime į " + city + " per 1-3 darbo dienas");
}
