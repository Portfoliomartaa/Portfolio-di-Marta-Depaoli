//  JS.JS

$(document).ready(function(){

  const intro = document.getElementById('intro');
  const primo = document.getElementById('primo');
  const secondo = document.getElementById('secondo');
  const terzo = document.getElementById('terzo');
  const quarto = document.getElementById('quarto'); 
  const quinto = document.getElementById('quinto');
  const sesto = document.getElementById('sesto');
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');
  const btn5 = document.getElementById('btn5');
  const btn6 = document.getElementById('btn6');
  const avviso = document.getElementById('avviso');

  $("#btn1").click(function() {
    if (primo.classList.contains('hidden')) {
      intro.classList.add('hidden');
      primo.classList.remove('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    } else {
      intro.classList.remove('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    }
  });

  $("#btn2").click(function() {
    if (secondo.classList.contains('hidden')) {
      intro.classList.add('hidden');
      primo.classList.add('hidden');
      secondo.classList.remove('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    } else {
      intro.classList.remove('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    }
  });

  $("#btn3").click(function() {
    if (terzo.classList.contains('hidden')) {
      intro.classList.add('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.remove('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    } else {
      intro.classList.remove('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    }
  });

  $("#btn4").click(function() {
    if (quarto.classList.contains('hidden')) {
      intro.classList.add('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.remove('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    } else {
      intro.classList.remove('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    }
  });

  $("#btn5").click(function() {
    if (quinto.classList.contains('hidden')) {
      intro.classList.add('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.remove('hidden');
      sesto.classList.add('hidden');
    } else {
      intro.classList.remove('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    }
  });

  $("#btn6").click(function() {
    if (sesto.classList.contains('hidden')) {
      intro.classList.add('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.remove('hidden');
    } else {
      intro.classList.remove('hidden');
      primo.classList.add('hidden');
      secondo.classList.add('hidden');
      terzo.classList.add('hidden');
      quarto.classList.add('hidden');
      quinto.classList.add('hidden');
      sesto.classList.add('hidden');
    }
  });

})

$( "#avviso" ).click(function() {
  $( "#avviso" ).effect( "shake", "slow" );
});