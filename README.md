# Transcomunicador Instrumental
Programa que permite realizar la TCI mediante la creación y el posterior análisis de ficheros de texto.

## ¿En qué consiste?

Se conoce la transcomunicación instrumental (TCI) como la técnica de comunicación que utiliza aparatos electrónicos para establecer comunicación con los espíritus.

En primer lugar, el programa deberá generar la portadora, que será un fichero de texto creado con caracteres producidos de forma aleatoria. Se podrán especificar varios parámetros.

Una vez creado el fichero de texto, el programa deberá ser capaz de analizarlo, al menos de una forma superficial, de modo que nos resulte fácil encontrar los posibles mensajes. Para realizar este análisis, el programa irá comparando una a una todas las palabras que aparecen en el texto con las que hay en el diccionario de español. En caso de coincidencia, la palabra o palabras encontradas deben aparecer resaltadas con un color diferente al resto del texto.


## ¿Cómo lo hice?
Las probabilidades usadas en la función que genera palabras están hechos a mano (con la ayuda del comando grep) analizando tanto una lista de palabras, como de verbos conjugados, nombres y apellidos que podés encontrar en [este repositorio](https://github.com/olea/lemarios).
Los resultados de estas probabilidades están [en esta hoja de cálculo](https://github.com/lucia-blanco/transcomunicador-instrumental/blob/master/recursos/stat.ods). Además, el script que usé para recoger estos datos [también está aquí](https://github.com/lucia-blanco/transcomunicador-instrumental/blob/master/recursos/words.sh), por si alguien decide hacer sus propias estadísticas.

También hay probabilidades de longitud de la palabra pero, a mayor longitud de la palabra, menor probabilidad de que la palabra sea correcta, así que decidí inventarme las probabilidades de longitud de la palabra, centrándome en las palabras de 4-5 letras.
