//ASSERCTIONS

//CONDICIONAL, CASO TENHA O ELEMENTO ELE APLICA
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'blue';


//Non-null assertion (!), OBRIGAR A NÃO SER NULL
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';

//TYPE ASSERTION (as 'elemento'), SE EU SEI QUE EXIXTE, EU VOU TIPAR COM O ELEMENTO DESEJADO
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';

