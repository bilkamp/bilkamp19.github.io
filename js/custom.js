function countdown(){
  var gun = 25;
  var ay = 4;
  var saat = 11;
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
    kalan_gun = kalan_gun + 30;
  }

  document.getElementById("aylar").innerHTML = kalan_ay+12;
  document.getElementById("gunler").innerHTML = kalan_gun;
  document.getElementById("saatler").innerHTML = kalan_saat;
  document.getElementById("dakikalar").innerHTML = kalan_dakika;
  document.getElementById("saniyeler").innerHTML = kalan_saniye;
};
