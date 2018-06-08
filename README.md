# Transcomunicador Instrumental
Programa que permite realizar la TCI mediante la creación y el posterior análisis de ficheros de texto.

[Live demo](https://rawgit.com/lucia-blanco/transcomunicador-instrumental/master/tci/dist/index.html). Por favor, sé paciente, todavía está en desarrollo.

## ¿En qué consiste?

Se conoce la transcomunicación instrumental (TCI) como la técnica de comunicación que utiliza aparatos electrónicos para establecer comunicación con los espíritus.

He cambiado la ejecución del ejercicio manteniendo el propósito. En vez de ser Java, será una aplicación en Angular y no tratará con ficheros. Se generarán palabras y se compararán con el diccionario español (y una lista de verbos conjugados, nombres y apellidos). 


## ¿Cómo lo hice?
Las probabilidades usadas en la función que genera palabras están hechos a mano (con la ayuda del comando grep) analizando tanto una lista de palabras, como de verbos conjugados, nombres y apellidos que podés encontrar en [este repositorio](https://github.com/olea/lemarios).
Los resultados de estas probabilidades están en [esta hoja de cálculo](https://github.com/lucia-blanco/transcomunicador-instrumental/blob/master/recursos/stat.ods). Además, el script que usé para recoger estos datos también [está aquí](https://github.com/lucia-blanco/transcomunicador-instrumental/blob/master/recursos/words.sh), por si alguien decide hacer sus propias estadísticas.

También hay probabilidades de longitud de la palabra pero, a mayor longitud de la palabra, menor probabilidad de que la palabra sea correcta, así que decidí inventarme las probabilidades de longitud de la palabra, centrándome en las palabras de 4-5 letras.
