function resolverPrimeraMitad() {
    
    // --- Resolución del Problema 9 ---
    const solucion9 = document.getElementById('solucion9');
    if (solucion9) {
        solucion9.innerHTML = `
            <h3>Parte (a): ¿Cuántos moles de Ar retirar?</h3>
            <p>¡Vamos a resolver esto! La pregunta clave es sobre <span class="importante">moles</span> y <span class="importante">presión</span> de un gas. Siempre que veas estas palabras juntas, tu cerebro debe pensar inmediatamente en la <span class="importante">Ley de los Gases Ideales</span>.</p>
            <div class="formula">$$ PV = nRT $$</div>
            <p>Aquí, P es presión, V es volumen, n son los moles, R es la constante de los gases y T es la temperatura. La idea es simple: si la presión cambia, es porque la cantidad de gas (los moles, n) ha cambiado.</p>
            
            <div class="paso">
                <p><strong>Paso 1: Organizar los datos y preparar las unidades.</strong><br>
                La Ley del Gas Ideal es exigente con las unidades. ¡No podemos mezclar peras con manzanas! La temperatura SIEMPRE debe estar en <span class="importante">Kelvin (K)</span>.</p>
                <p>Temperatura (T) = $150 \\, ^\\circ C$ + 273.15 = <span class="importante">423.15 K</span>.<br>
                Volumen del balón A (V) = <span class="importante">2.0 L</span>.<br>
                Constante R (la que usa atm y L) = <span class="importante">$0.082 \\, \\frac{atm \\cdot L}{mol \\cdot K}$</span>.</p>
            </div>

            <div class="paso">
                <p><strong>Paso 2: Calcular cuántos moles de Argón (Ar) tenemos AL PRINCIPIO.</strong><br>
                Usamos la Ley del Gas Ideal. Despejamos 'n' (moles) y usamos los datos iniciales del Argón: $P_{Ar} = 10 \\, atm$.</p>
                $$ n_{inicial} = \\frac{PV}{RT} = \\frac{(10\\,atm)(2.0\\,L)}{(0.082\\, \\frac{atm \\cdot L}{mol \\cdot K})(423.15\\,K)} $$
                <p>Metemos esto en la calculadora y obtenemos:</p>
                $$ n_{inicial} = \\mathbf{0.5779 \\, moles\\,de\\,Ar} $$
                <p>Esto es lo que tenemos en el balón A antes de tocar nada.</p>
            </div>

            <div class="paso">
                <p><strong>Paso 3: Calcular cuántos moles de Argón (Ar) queremos tener AL FINAL.</strong><br>
                El problema nos pide que la presión baje a 3 atm. Repetimos el cálculo, pero ahora usando la nueva presión.</p>
                $$ n_{final} = \\frac{P_{deseada}V}{RT} = \\frac{(3\\,atm)(2.0\\,L)}{(0.082\\, \\frac{atm \\cdot L}{mol \\cdot K})(423.15\\,K)} $$
                <p>Calculamos de nuevo:</p>
                $$ n_{final} = \\mathbf{0.1734 \\, moles\\,de\\,Ar} $$
                <p>Esta es la cantidad de moles que debe quedar en el balón para que la presión sea de 3 atm.</p>
            </div>

            <div class="paso">
                <p><strong>Paso 4: Encontrar la diferencia.</strong><br>
                La pregunta es "¿cuántos moles hay que RETIRAR?". Es una simple resta: lo que teníamos menos lo que queremos que quede.</p>
                $$ Moles\\,a\\,retirar = n_{inicial} - n_{final} = 0.5779 - 0.1734 $$
                $$ Moles\\,a\\,retirar = \\mathbf{0.4045\\,moles} $$
                <p>¡Y esa es la respuesta para la parte (a)!</p>
            </div>

            <h3>Parte (b): Presiones Parciales antes y después</h3>
            <h4>SITUACIÓN INICIAL (Válvula cerrada)</h4>
            <div class="paso">
                <p><strong>En el Balón A:</strong> Tenemos una mezcla de CO y Ar. Conocemos la presión parcial de uno de ellos, $P_{Ar} = 10 \\, atm$. ¿Y la del CO? El dato clave es la <span class="importante">fracción molar</span>, $X_{monóxido} = 0.3$.<br>
                Si el 30% de las moléculas son CO, entonces el 70% restante deben ser Ar. Así que $X_{Ar} = 1 - 0.3 = 0.7$.<br>
                La presión parcial es la presión total multiplicada por la fracción molar ($P_{parcial} = X \\cdot P_{total}$). Esto implica que la relación de presiones es igual a la relación de fracciones molares:</p>
                $$ \\frac{P_{CO}}{X_{CO}} = \\frac{P_{Ar}}{X_{Ar}} \\implies P_{CO} = P_{Ar} \\cdot \\frac{X_{CO}}{X_{Ar}} = 10 \\, atm \\cdot \\frac{0.3}{0.7} = \\mathbf{4.29 \\, atm} $$
                <p>Resumen ANTES en Balón A: $P_{Ar} = 10 \\, atm$, $P_{CO} = 4.29 \\, atm$.</p>
            </div>
            <div class="paso">
                <p><strong>En el Balón B:</strong> Aquí solo tenemos el agua que se evaporó de la sal. Necesitamos saber cuántos moles de agua ($H_2O$) son. Primero, los moles de la sal ($Na_2SO_4 \\cdot 10H_2O$), cuya masa molar es $\\approx 322.1$ g/mol.</p>
                $$ n_{sal} = \\frac{masa}{Masa Molar} = \\frac{12.3 \\, g}{322.1 \\, g/mol} = 0.0382 \\, moles \\, de \\, sal$$
                <p>La fórmula nos dice que por cada mol de sal, hay 10 moles de agua. Así que: $n_{H_2O} = 10 \\times 0.0382 = 0.382 \\, moles$.<br>
                Ahora, con los moles de agua, calculamos su presión en el Balón B (V = 0.5 L) usando la Ley del Gas Ideal:</p>
                $$ P_{H_2O} = \\frac{n_{H_2O}RT}{V_B} = \\frac{(0.382)(0.082)(423.15)}{0.5 \\, L} = \\mathbf{26.54 \\, atm} $$
                <p>¡Es una presión muy alta! Pero es la que hay en el balón B antes de abrir la válvula.</p>
            </div>

            <h4>SITUACIÓN FINAL (Válvula abierta)</h4>
            <div class="paso">
                <p>Al abrir la válvula, cada gas se expande para ocupar el <span class="importante">volumen total</span> ($V_{total} = V_A + V_B = 2.0 + 0.5 = 2.5\\,L$). La cantidad de moles de cada gas no cambia, pero como tienen más espacio, su presión individual disminuirá. Volvemos a usar $PV=nRT$ para cada gas, pero con el nuevo volumen.</p>
                <p><strong>Presión final del Argón (Ar):</strong> (usamos sus moles iniciales, $n_{Ar} = 0.5779$ moles)</p>
                $$ P_{Ar, final} = \\frac{n_{Ar}RT}{V_{total}} = \\frac{(0.5779)(0.082)(423.15)}{2.5 \\, L} = \\mathbf{8.00 \\, atm} $$
                <p><strong>Presión final del Monóxido (CO):</strong> (Calculamos sus moles: $n_{CO} = 0.2475$ moles)</p>
                $$ P_{CO, final} = \\frac{n_{CO}RT}{V_{total}} = \\frac{(0.2475)(0.082)(423.15)}{2.5 \\, L} = \\mathbf{3.43 \\, atm} $$
                <p><strong>Presión final del Agua (H₂O):</strong> (usamos sus moles, $n_{H_2O} = 0.382$ moles)</p>
                $$ P_{H_2O, final} = \\frac{n_{H_2O}RT}{V_{total}} = \\frac{(0.382)(0.082)(423.15)}{2.5 \\, L} = \\mathbf{5.31 \\, atm} $$
                <p>¡Listo! Ya tenemos todas las presiones antes y después.</p>
            </div>
        `;
    }
    
    // --- Resolución del Problema 4 ---
    const solucion4 = document.getElementById('solucion4');
    if (solucion4) {
        solucion4.innerHTML = `
            <h3>Cómo Leer un Diagrama de Fases</h3>
            <p>Un diagrama de fases es como un mapa del tesoro para un químico. Te dice en qué estado (sólido, líquido o gas) estará una sustancia si conoces su <span class="importante">temperatura</span> (eje horizontal) y su <span class="importante">presión</span> (eje vertical). ¡Vamos a usarlo!</p>
            <div class="paso">
                <p><strong>1. ¿Fase a temperatura ambiente (~$25 \\, ^\\circ C$) y 1.0 atm?</strong></p>
                <p>Primero, mira el eje de la temperatura. Verás que los valores son muy bajos ($-125 \\, ^\\circ C$, $-110 \\, ^\\circ C$...). La temperatura ambiente, unos $25 \\, ^\\circ C$, estaría <span class="importante">muy, muy a la derecha</span>, fuera del gráfico. En el gráfico, a 1 atm de presión, el xenón hierve (pasa de líquido a gas) a $-108 \\, ^\\circ C$. Como $25 \\, ^\\circ C$ es una temperatura muchísimo más alta, es seguro que el xenón ya ha hervido y se encuentra en estado de <span class="importante">Gas</span>.</p>
            </div>
            <div class="paso">
                <p><strong>2. ¿Estado a 0.75 atm y $-114 \\, ^\\circ C$?</strong></p>
                <p>Esto es como jugar a 'Hundir la Flota'. Buscamos las coordenadas. En el eje de Presión (vertical), sube hasta 0.75 atm (entre 0.5 y 1). En el eje de Temperatura (horizontal), busca $-114 \\, ^\\circ C$ (un poco a la derecha de -115). Traza líneas imaginarias desde esos puntos. ¿Dónde se cruzan? El punto de encuentro cae de lleno en la región que el mapa etiqueta como <span class="importante">Líquido</span>. ¡Respuesta encontrada!</p>
            </div>
            <div class="paso">
                <p><strong>3. ¿Temperatura si la presión de vapor del líquido es 0.5 atm?</strong></p>
                <p>La "presión de vapor del líquido" es un término elegante para la <span class="importante">línea de equilibrio entre líquido y gas</span>. Esta línea nos dice a qué temperatura hierve un líquido a una presión dada. Nos dan la presión: 0.5 atm. Así que, busca 0.5 en el eje vertical, muévete en línea recta hacia la derecha hasta que te choques con la curva que separa "Líquido" y "Gas". Desde ese punto de choque, baja en línea recta hasta el eje de la temperatura para leer el valor. Aterrizarás justo en <span class="importante">$-115 \\, ^\\circ C$</span>.</p>
            </div>
            <div class="paso">
                <p><strong>4. ¿Presión de vapor del sólido a $-122 \\, ^\\circ C$?</strong></p>
                <p>Es la misma idea, pero ahora nos interesa la "presión de vapor del sólido" (sublimación), que es la <span class="importante">línea de equilibrio entre sólido y gas</span>. Buscamos $-122 \\, ^\\circ C$ en el eje de temperatura. Subimos en vertical hasta chocar con la línea que separa "Sólido" de "Gas". Desde ahí, nos movemos en horizontal hacia la izquierda para leer la presión. Vemos que el valor está por debajo del "Punto Triple" (0.37 atm). Podemos estimar que es alrededor de <span class="importante">0.25 atm</span>.</p>
            </div>
            <div class="paso">
                <p><strong>5. ¿Fase más densa, sólida o líquida?</strong></p>
                <p>Aquí hay un truco genial. Fíjate en la línea que separa "Sólido" y "Líquido". ¿Hacia dónde se inclina? <span class="importante">Se inclina hacia la derecha</span> (tiene pendiente positiva). Esto significa que si estás en el estado líquido y aumentas mucho la presión (subes en vertical), cruzarás la línea y entrarás en el estado sólido. Como la presión siempre favorece a la fase más compacta, la más densa, esto nos dice que para el xenón, la fase <span class="importante">Sólida</span> es más densa que la líquida. (Esto es lo normal para la mayoría de sustancias, excepto para el agua, cuya línea se inclina a la izquierda).</p>
            </div>
        `;
    }
    
    // --- Resolución del Problema 13 ---
    const solucion13 = document.getElementById('solucion13');
    if (solucion13) {
        solucion13.innerHTML = `
            <h3>¿Cómo resolvemos esto? El Plan de Ataque</h3>
            <p>Este problema trata sobre una <span class="importante">propiedad coligativa</span>: el <span class="importante">descenso del punto de congelación</span>. La idea es que cuando disuelves algo (soluto) en un líquido (disolvente), la mezcla se congela a una temperatura más baja. La fórmula que lo describe todo es:</p>
            <div class="formula">$$ \\Delta T_f = K_f \\cdot m $$</div>
            <p>Nuestro objetivo es encontrar la <strong>Masa Molar (MM)</strong> del soluto, que se define como $MM = \\frac{gramos}{moles}$. El problema nos da los gramos (0.186 g), así que nuestra verdadera misión es encontrar los <span class="importante">moles del soluto</span>. ¿Cómo? Siguiendo los pasos de la fórmula hacia atrás.</p>

            <div class="paso">
                <p><strong>Paso 1: Calcular la variación de temperatura ($\\Delta T_f$).</strong></p>
                <p>Esta es la parte más fácil. Es simplemente la diferencia entre a qué temperatura se congelaba el alcanfor puro y a qué temperatura se congela ahora con el soluto disuelto.</p>
                $$ \\Delta T_f = T_{f, puro} - T_{f, mezcla} = 179.8\\,^\\circ C - 176.7\\,^\\circ C = \\mathbf{3.1\\,^\\circ C} $$
                <p>El punto de congelación ha bajado 3.1 grados.</p>
            </div>

            <div class="paso">
                <p><strong>Paso 2: Usar $\\Delta T_f$ para encontrar la molalidad (m).</strong></p>
                <p>Ahora que conocemos $\\Delta T_f$ y el problema nos da $K_f$, podemos despejar la molalidad de nuestra fórmula mágica.</p>
                $$ m = \\frac{\\Delta T_f}{K_f} = \\frac{3.1\\,^\\circ C}{40.0\\,^\\circ C/m} = \\mathbf{0.0775\\,m} $$
                <p>La molalidad es una medida de concentración que significa "moles de soluto por kilogramo de disolvente".</p>
            </div>

            <div class="paso">
                <p><strong>Paso 3: Usar la molalidad para encontrar los moles de soluto.</strong></p>
                <p>Sabemos que $m = \\frac{moles\\,de\\,soluto}{kg\\,de\\,disolvente}$. ¡Ya casi lo tenemos! Solo necesitamos la masa del disolvente (el alcanfor) en kilogramos.</p>
                <p>Masa de alcanfor = 22.01 g = <span class="importante">0.02201 kg</span>.</p>
                <p>Ahora despejamos los moles:</p>
                $$ Moles\\,de\\,soluto = m \\times kg\\,de\\,disolvente = 0.0775 \\times 0.02201 = \\mathbf{0.001706\\,moles} $$
                <p>¡Esta es la cantidad de moles de la sustancia desconocida que disolvimos!</p>
            </div>

            <div class="paso">
                <p><strong>Paso 4: Calcular la Masa Molar (MM).</strong></p>
                <p>Este es el paso final. Ya tenemos los gramos (del enunciado) y acabamos de calcular los moles. ¡A dividir!</p>
                $$ MM = \\frac{gramos\\,de\\,soluto}{moles\\,de\\,soluto} = \\frac{0.186\\,g}{0.001706\\,moles} = \\mathbf{109.0\\,g/mol} $$
                <p>La masa molar aproximada de la sustancia desconocida es de 109 g/mol.</p>
            </div>
        `;
    }
    
    // --- Resolución del Problema 14 ---
    const solucion14 = document.getElementById('solucion14');
    if (solucion14) {
        solucion14.innerHTML = `
            <h3>El Razonamiento: ¿Qué hace que algo sea un gas?</h3>
            <p>Para que una sustancia sea un gas a temperatura ambiente, las <span class="importante">fuerzas que mantienen unidas a sus moléculas (fuerzas intermoleculares)</span> deben ser muy débiles. La energía del ambiente (el calor) es suficiente para que las moléculas se separen y vuelen libres. Vamos a analizar a nuestros sospechosos uno por uno.</p>

            <div class="paso">
                <p><strong>Sospechoso 1: $AgCl$ (Cloruro de Plata)</strong></p>
                <p>Vemos un metal (Ag) y un no-metal (Cl). Esto es un libro de texto de <span class="importante">enlace iónico</span>. Los iones $Ag^+$ y $Cl^-$ se atraen con una fuerza electrostática tremenda, formando una red cristalina sólida. Estas fuerzas son como un superpegamento. Imposible que sea un gas. Es un <span class="importante">sólido</span>. <strong>Descartado.</strong></p>
            </div>

            <div class="paso">
                <p><strong>Sospechoso 2: $P_4O_{10}$ (Pentóxido de Fósforo)</strong></p>
                <p>Esto es una molécula grande, formada por enlaces covalentes, pero es una molécula bastante polar y pesada. El tamaño y la polaridad crean fuerzas intermoleculares (dipolo-dipolo y de London) significativas. Es un <span class="importante">sólido</span> blanco a temperatura ambiente. <strong>Descartado.</strong></p>
            </div>

            <div class="paso">
                <p><strong>Sospechoso 3: $I_2$ (Yodo)</strong></p>
                <p>Esta es una molécula diatómica ($I-I$) y es <span class="importante">no polar</span>. Las únicas fuerzas que la mantienen unida a otras moléculas de yodo son las <span class="importante">fuerzas de London</span>, que son las más débiles. PERO, el yodo es un átomo muy grande y pesado, con muchos electrones. Esto hace que sus fuerzas de London, aunque débiles en teoría, sean lo suficientemente fuertes como para mantenerlo como un <span class="importante">sólido</span> grisáceo a temperatura ambiente. <strong>Descartado.</strong></p>
            </div>

            <div class="paso">
                <p><strong>Sospechoso 4: $Cl_2$ (Cloro)</strong></p>
                <p>Al igual que el yodo, el cloro es una molécula diatómica ($Cl-Cl$) y no polar. Sus únicas fuerzas intermoleculares son también las de London. Aquí está la diferencia clave: el cloro es mucho <span class="importante">más pequeño y ligero</span> que el yodo. Tiene menos electrones. Por lo tanto, sus fuerzas de London son <span class="importante">extremadamente débiles</span>. La energía de la temperatura ambiente es más que suficiente para vencer estas fuerzas y dejar que las moléculas de $Cl_2$ escapen. ¡Este es nuestro gas!</p>
            </div>

            <h3>Conclusión</h3>
            <p>La sustancia que es un gas a temperatura y presión ambiente es el <span class="importante">$Cl_2$</span>, porque es una molécula pequeña, no polar, con fuerzas intermoleculares muy débiles.</p>
        `;
    }
}