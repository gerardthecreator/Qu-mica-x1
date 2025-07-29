function resolverSegundaMitad() {
    
    // --- Resolución del Problema 15 ---
    const solucion15 = document.getElementById('solucion15');
    if (solucion15) {
        solucion15.innerHTML = `
            <h3>Parte (a): Dibujo del Diagrama de Fases del O₂</h3>
            <p>Para dibujar un diagrama de fases, necesitamos organizar los puntos clave en un gráfico de Presión (eje Y) vs. Temperatura (eje X). Un "punto normal" significa que la presión es de 1 atm (760 torr).</p>
            <div class="paso">
                <p><strong>1. Identificar los 4 puntos clave:</strong></p>
                <ul>
                    <li><strong>Punto Triple (PT):</strong> Coexisten sólido, líquido y gas. Coordenadas: T = -219 °C, P = 1.14 torr.</li>
                    <li><strong>Punto de Fusión Normal (PFN):</strong> Coexisten sólido y líquido a 1 atm. Coordenadas: T = -218 °C, P = 760 torr.</li>
                    <li><strong>Punto de Ebullición Normal (PEN):</strong> Coexisten líquido y gas a 1 atm. Coordenadas: T = -183 °C, P = 760 torr.</li>
                    <li><strong>Punto Crítico (PC):</strong> Más allá de este punto, no hay distinción entre líquido y gas. Coordenadas: T = -119 °C, P = 49.8 atm.</li>
                </ul>
                <p><strong>2. Describir el dibujo:</strong><br>
                Imagina los ejes P y T. Colocamos los puntos. El Punto Triple es el de más baja P y T. De él salen tres líneas:
                <ul>
                    <li>Una línea <span class="importante">Sólido-Líquido</span> que va desde el PT hacia arriba y a la derecha, pasando por el PFN.</li>
                    <li>Una línea <span class="importante">Líquido-Gas</span> que va desde el PT hacia la derecha, curvándose hacia arriba, pasando por el PEN y terminando en el PC.</li>
                    <li>Una línea <span class="importante">Sólido-Gas</span> que va desde el PT hacia la izquierda y hacia abajo.</li>
                </ul>
                <strong>3. Marcar las regiones:</strong><br>
                La región de la izquierda (baja T) es <span class="importante">Sólido</span>. La región central, en forma de cuña (alta P, T intermedia), es <span class="importante">Líquido</span>. La región de abajo y la derecha (alta T, baja P) es <span class="importante">Gas</span>.</p>
            </div>
            <h3>Parte (b): ¿Cuál fase es más densa?</h3>
            <div class="paso">
                <p>Para saber esto, miramos la pendiente de la línea Sólido-Líquido. Comparamos el Punto Triple (T=-219°C) con el Punto de Fusión Normal (T=-218°C). Para pasar del PT al PFN, la temperatura <span class="importante">aumenta</span> (de -219 a -218) y la presión <span class="importante">aumenta</span> (de 1.14 torr a 760 torr).<br>
                Una línea que sube de temperatura al subir la presión tiene una <span class="importante">pendiente positiva</span>. Como la presión siempre favorece a la fase más densa, esto nos dice que la fase <span class="importante">Sólida ($O_2(s)$) es más densa</span> que la líquida ($O_2(l)$). Este es el comportamiento habitual de la mayoría de las sustancias.</p>
            </div>
            <h3>Parte (c): ¿Funde o sublima a 1 atm?</h3>
            <div class="paso">
                <p>La pregunta es: si calentamos el oxígeno sólido a una presión constante de 1 atm (760 torr), ¿qué transición de fase ocurre primero? <br>
                El <span class="importante">Punto Triple</span>, donde podría ocurrir la sublimación, está a una presión de solo <span class="importante">1.14 torr</span>. Nuestra presión de 1 atm (760 torr) está <span class="importante">muy por encima</span> de la presión del punto triple. Por lo tanto, al calentar, el oxígeno sólido cruzará la línea Sólido-Líquido antes que cualquier otra. Es decir, <span class="importante">funde (se derrite)</span>.</p>
            </div>
        `;
    }
    
    // --- Resolución del Problema 11.94 ---
    const solucion11_94 = document.getElementById('solucion11_94');
    if (solucion11_94) {
        solucion11_94.innerHTML = `
            <h3>Análisis del Diagrama de Fases del Agua</h3>
            <p>Este diagrama es un mapa de los estados del agua. Lo primero y más importante es marcar las regiones y notar la característica única del agua.</p>
            <div class="paso">
                <p><strong>Marcando las Regiones:</strong></p>
                <ul>
                    <li>La región de la izquierda (bajas T) es <span class="importante">Sólido (Hielo)</span>.</li>
                    <li>La región superior en forma de cuña (altas P, T intermedias) es <span class="importante">Líquido (Agua)</span>.</li>
                    <li>La región de abajo y la derecha (altas T, bajas P) es <span class="importante">Gas (Vapor)</span>.</li>
                </ul>
                <p>Notarás que la línea que separa Sólido y Líquido tiene una <span class="importante">pendiente negativa</span> (se inclina hacia la izquierda). Esto es excepcional y significa que el hielo es MENOS denso que el agua líquida. ¡Por eso el hielo flota!</p>
            </div>
            <h3>Predicción de los Cambios de Fase</h3>
            <div class="paso">
                <p><strong>a) A partir de A, la temperatura se eleva a presión constante:</strong></p>
                <p>El punto A está en la región Sólida. Elevar la temperatura a presión constante significa moverse <span class="importante">horizontalmente hacia la derecha</span>. El camino es:
                <ol>
                    <li>Cruza la línea Sólido-Líquido: El hielo <span class="importante">funde</span> (se derrite) para convertirse en agua líquida.</li>
                    <li>Continúa y cruza la línea Líquido-Gas: El agua líquida <span class="importante">hierve</span> para convertirse en vapor.</li>
                </ol>
                La secuencia es: <span class="importante">Sólido → Líquido → Gas</span>.</p>
            </div>
            <div class="paso">
                <p><strong>b) A partir de C, la temperatura se reduce a presión constante:</strong></p>
                <p>El punto C está en la región de Gas. Reducir la temperatura a presión constante significa moverse <span class="importante">horizontalmente hacia la izquierda</span>. El camino cruzará la línea Gas-Líquido. El vapor de agua se <span class="importante">condensa</span> para formar agua líquida. La secuencia es: <span class="importante">Gas → Líquido</span>.</p>
            </div>
            <div class="paso">
                <p><strong>c) A partir de B, la presión se reduce a temperatura constante:</strong></p>
                <p>El punto B está en la región Líquida. Reducir la presión a temperatura constante significa moverse <span class="importante">verticalmente hacia abajo</span>. El camino cruzará la línea Líquido-Gas. El agua líquida <span class="importante">hierve (o se evapora)</span> para formar vapor. La secuencia es: <span class="importante">Líquido → Gas</span>.</p>
            </div>
        `;
    }
    
    // --- Resolución del Problema 11.8 ---
    const solucion11_8 = document.getElementById('solucion11_8');
    if (solucion11_8) {
        solucion11_8.innerHTML = `
            <h3>El Problema: Evitar que el Gas se Vuelva Líquido</h3>
            <p>Para almacenar un gas en un tanque a la intemperie en un lugar extremadamente frío como Alaska, necesitamos un gas que <span class="importante">permanezca en estado gaseoso</span> incluso a las temperaturas más bajas del invierno. Si el gas se licúa, la presión en el tanque caerá drásticamente y no fluirá correctamente. El factor decisivo es el <span class="importante">punto de ebullición</span> de cada gas.</p>
            <div class="paso">
                <p><strong>1. Comparar los Puntos de Ebullición:</strong></p>
                <p>El punto de ebullición es la temperatura a la cual un líquido se convierte en gas (o un gas se condensa en líquido) a presión atmosférica. Un punto de ebullición más bajo significa que la sustancia "prefiere" ser un gas.</p>
                <ul>
                    <li>Punto de ebullición del Butano ($C_4H_{10}$): <span class="importante">~ -0.5 °C</span></li>
                    <li>Punto de ebullición del Propano ($C_3H_8$): <span class="importante">~ -42 °C</span></li>
                    <li>Punto de ebullición del Metano ($CH_4$): <span class="importante">~ -161 °C</span></li>
                </ul>
            </div>
            <div class="paso">
                <p><strong>2. Considerar el Clima de Alaska:</strong></p>
                <p>En invierno, las temperaturas en Alaska pueden caer fácilmente por debajo de -42 °C. Imaginemos un día a -50 °C.</p>
                <ul>
                    <li>A -50 °C, el butano y el propano ya habrían alcanzado una temperatura inferior a sus puntos de ebullición. Se habrían <span class="importante">condensado</span> y estarían en estado líquido dentro del tanque.</li>
                    <li>A -50 °C, el metano todavía está muy por encima de su punto de ebullición de -161 °C. Por lo tanto, <span class="importante">permanecería como un gas</span>.</li>
                </ul>
            </div>
            <h3>Justificación y Elección</h3>
            <p>La elección correcta es el <span class="importante">Metano ($CH_4$)</span>. Su punto de ebullición extremadamente bajo garantiza que no se licuará en el tanque, incluso durante los inviernos más severos de Alaska, asegurando un suministro constante de gas.</p>
        `;
    }
    
    // --- Resolución del Problema 11.14 ---
    const solucion11_14 = document.getElementById('solucion11_14');
    if (solucion11_14) {
        solucion11_14.innerHTML = `
            <h3>El Misterio de los Puntos de Ebullición</h3>
            <p>Tenemos dos compuestos, éter dietílico y 1-butanol. Nos dicen que tienen la misma fórmula molecular, $C_4H_{10}O$. Esto significa que son <span class="importante">isómeros</span>. Entonces, ¿por qué sus puntos de ebullición son tan diferentes (34.5°C vs 117°C)? La respuesta está en sus <span class="importante">fuerzas intermoleculares (FIM)</span>, los "pegamentos" que mantienen unidas a las moléculas en estado líquido.</p>
            <div class="paso">
                <p><strong>1. Analizar la estructura del Éter Dietílico ($CH_3CH_2-O-CH_2CH_3$):</strong></p>
                <p>La molécula tiene un átomo de oxígeno entre dos cadenas de carbono. Los enlaces C-O son polares, lo que hace que la molécula en su conjunto sea polar. Las moléculas de éter se atraen entre sí principalmente a través de <span class="importante">fuerzas dipolo-dipolo</span>. No hay enlaces de hidrógeno a oxígeno.</p>
            </div>
            <div class="paso">
                <p><strong>2. Analizar la estructura del 1-Butanol ($CH_3CH_2CH_2CH_2-OH$):</strong></p>
                <p>Esta molécula tiene un grupo <span class="importante">hidroxilo (-OH)</span> al final de la cadena. Este es el detalle crucial. El átomo de hidrógeno unido directamente a un átomo muy electronegativo (oxígeno) permite que las moléculas de 1-butanol formen <span class="importante">puentes de hidrógeno</span> entre sí.</p>
            </div>
            <h3>La Explicación: La Fuerza del Puente de Hidrógeno</h3>
            <p>Los puentes de hidrógeno son un tipo de fuerza dipolo-dipolo <span class="importante">excepcionalmente fuerte</span>. Para que un líquido hierva, las moléculas deben obtener suficiente energía para romper estas fuerzas intermoleculares y escapar a la fase gaseosa.
            <ul>
                <li>El éter solo necesita romper las fuerzas dipolo-dipolo, que son relativamente débiles. Esto requiere poca energía, por lo que su punto de ebullición es bajo (<span class="importante">34.5 °C</span>).</li>
                <li>El 1-butanol debe romper los fortísimos puentes de hidrógeno. Esto requiere mucha más energía, lo que se traduce en un punto de ebullición mucho más alto (<span class="importante">117 °C</span>).</li>
            </ul>
            En resumen, la presencia del grupo -OH en el 1-butanol le permite formar puentes de hidrógeno, el "superpegamento" de las fuerzas intermoleculares, lo que eleva drásticamente su punto de ebullición en comparación con el éter.</p>
        `;
    }
}

resolverSegundaMitad();