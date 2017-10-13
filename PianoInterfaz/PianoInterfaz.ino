/*
*   Programa:   Piano con Arduino
*   Autores:    Martín Alejandro Pérez Güendulain
*               Angel Robeto Montez Murgas
*/

/* Notas musicales con el teclado:
 *  a --> DO 
 *  s --> RE
 *  d --> MI
 *  f --> FA
 *  g --> SOL
 *  h --> LA
 *  j --> SI
 */

// Notas músicales
# define DO  261
# define RE  293
# define MI  329
# define FA  349
# define SOL 391
# define LA  440
# define SI  493

// Bocina
const int Bocina = 13;

// Variables
int nota;

void setup(){
  Serial.begin(9600);
  
  pinMode(Bocina, OUTPUT);
}

void loop(){
  if( Serial.available() > 0 ){
    nota = Serial.read();

    if( nota == 'a' ){
      notaMusical(DO);
      //Serial.println("DO");
    }
    else if( nota == 's' ){
      notaMusical(RE);
      //Serial.println("RE");
    }
    else if( nota == 'd' ){
      notaMusical(MI);
      //Serial.println("MI");
    }
    else if( nota == 'f' ){
      notaMusical(FA);
      //Serial.println("FA");
    }
    else if( nota == 'g' ){
      notaMusical(SOL);
      //Serial.println("SOL");
    }
    else if( nota == 'h' ){
      notaMusical(LA);
      //Serial.println("LA");
    }
    else if( nota == 'j' ){
      notaMusical(SI);
      //Serial.println("SI");
    }
    else if( nota == 'n' ){
      noTone(Bocina);
      //Serial.println("NO SUENA");
    }
  }
}

void notaMusical(const int frecuencia){
  tone(Bocina, frecuencia);
}
