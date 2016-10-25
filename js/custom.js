function countdown(){
  var gun = 10;
  var ay = 12;
  var saat = 10;
  var dakika = 0;
  var saniye = 0;
  var current = new Date();
  var kalan_ay = ay - (current.getMonth()+1);
  var kalan_gun = gun - current.getDate();
  var kalan_saat = saat - current.getHours();
  var kalan_dakika = dakika - current.getMinutes();
  var kalan_saniye = saniye - current.getSeconds();

  if(kalan_saniye < 0)
  {
    kalan_dakika -= 1;
    kalan_saniye += 60;
  }

  if(kalan_dakika < 0)
  {
    kalan_saat -= 1;
    kalan_dakika += 60;
  }

  if(kalan_saat < 0)
  {
    kalan_gun -= 1;
    kalan_saat = kalan_saat + 24;
  }

  if(kalan_gun < 0)
  {
    kalan_ay -= 1;
    kalan_gun = kalan_gun + kalan_ay*31;
  }

  document.getElementById("aylar").innerHTML = kalan_ay + "a";
  document.getElementById("gunler").innerHTML = kalan_gun + "g";
  document.getElementById("saatler").innerHTML = kalan_saat + "s";
  document.getElementById("dakikalar").innerHTML = kalan_dakika+ "dk";
  document.getElementById("saniyeler").innerHTML = kalan_saniye + "sn";
};
