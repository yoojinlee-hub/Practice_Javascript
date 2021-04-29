var totalMoney = 34500 ;
var change;


document.write('<p>');
change = totalMoney/10000;
document.write('만원짜리 '+parseInt(change)+'개'+'<br>');
change = totalMoney%10000/1000;
document.write('천원짜리 '+parseInt(change)+'개'+'<br>');
change = totalMoney%10000%1000/100;
document.write('백원짜리 '+parseInt(change)+'개'+'<br>');
document.write('</p>');