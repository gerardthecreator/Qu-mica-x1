function resolverTerceraMitad() {
    
    // --- Resolución del Problema 11.20 ---
    const solucion11_20 = document.getElementById('solucion11_20');
    if (solucion11_20) {
        solucion11_20.innerHTML = `
            <h3>El Concepto Clave: Puentes de Hidrógeno Inter vs. Intra</h3>
            <p>El punto de fusión de una sustancia molecular depende de la fuerza de sus <span class="importante">fuerzas intermoleculares (FIM)</span>, es decir, qué tan fuerte se "pegan" las moléculas entre sí. Para derretir un sólido, hay que dar suficiente energía para romper esa red. Una FIM más fuerte significa un punto de fusión más alto.</p>
            <p>Ambas moléculas (o-nitrofenol y p-nitrofenol) pueden formar el tipo más fuerte de FIM: los <span class="importante">puentes de hidrógeno</span>, gracias a sus grupos -OH y -NO₂. La diferencia crucial, como sugiere la pista, está en CÓMO los forman.</p>
            
            <div class="paso">
                <p><strong>1. El o-nitrofenol (m.p. 45°C - Bajo)</strong></p>
                <p>En esta molécula, los grupos -OH y -NO₂ están uno al lado del otro (posición "orto"). Esta cercanía le permite hacer algo especial: formar un puente de hidrógeno <span class="importante">intramolecular</span>, es decir, ¡dentro de la misma molécula! El hidrógeno del -OH se siente atraído por el oxígeno del -NO₂ de su propia estructura.</p>
                <p><strong>Consecuencia:</strong> Al "satisfacer" su capacidad de formar puentes de hidrógeno consigo misma, la molécula de o-nitrofenol tiene <span class="importante">menos capacidad para interactuar fuertemente con sus vecinas</span>. Las fuerzas que unen una molécula con otra son más débiles.</p>
            </div>
            
            <div class="paso">
                <p><strong>2. El p-nitrofenol (m.p. 115°C - Alto)</strong></p>
                <p>Aquí, los grupos -OH y -NO₂ están en lados opuestos del anillo (posición "para"). Están demasiado lejos para formar un enlace dentro de la misma molécula. Por lo tanto, no puede formar puentes de hidrógeno intramoleculares.</p>
                <p><strong>Consecuencia:</strong> La molécula usa todo su potencial para formar puentes de hidrógeno <span class="importante">intermoleculares</span>. El grupo -OH de una molécula se une fuertemente con el grupo -NO₂ de una molécula vecina. Esto crea una <span class="importante">extensa y robusta red de enlaces</span> entre las moléculas, como una cadena fuerte.</p>
            </div>

            <h3>Explicación Final</h3>
            <p>La diferencia de 70°C en el punto de fusión se debe a que para derretir el <span class="importante">p-nitrofenol</span>, se necesita mucha energía para romper la fuerte red de puentes de hidrógeno INTERmoleculares. En cambio, para derretir el <span class="importante">o-nitrofenol</span>, solo se necesita energía para vencer las fuerzas más débiles entre moléculas, ya que su principal puente de hidrógeno es INTRAmolecular y no contribuye a unir las moléculas entre sí.</p>
        `;
    }
    
    // --- Resolución del Problema 8 ---
    const solucion8 = document.getElementById('solucion8');
    if (solucion8) {
        solucion8.innerHTML = `
            <h3>Plan de Ataque para un Problema Complejo</h3>
            <p>Este problema parece intimidante, pero podemos resolverlo dividiéndolo en pasos lógicos. Nuestro plan será:</p>
            <ol>
                <li>Calcular los <strong>moles iniciales</strong> de cada gas en sus respectivos recipientes.</li>
                <li>Determinar el <strong>reactivo limitante</strong> de la combustión y calcular los moles de cada gas <strong>después de la reacción</strong>.</li>
                <li>Usar la Ley del Gas Ideal con los moles totales finales para encontrar la <strong>presión final</strong> del sistema.</li>
            </ol>
            
            <h3>Paso 1: Moles Iniciales de Cada Gas</h3>
            <p>Usaremos la Ley del Gas Ideal ($PV=nRT$) y la fórmula de masa molar. ¡La temperatura siempre en Kelvin!</p>
            <p>Temperatura Inicial ($T_{inicial}$) = 127 °C + 273 = <span class="importante">400 K</span>. Constante R = <span class="importante">$0.082 \\, \\frac{atm \\cdot L}{mol \\cdot K}$</span>.</p>
            <div class="paso">
                <p><strong>Oxígeno ($O_2$):</strong></p>
                $$ n_{O_2} = \\frac{PV}{RT} = \\frac{(0.656 \\, atm)(6 \\, L)}{(0.082)(400 \\, K)} = \\mathbf{0.12 \\, moles} $$
            </div>
            <div class="paso">
                <p><strong>Propano ($C_3H_8$):</strong> (Masa molar $\\approx 44.1$ g/mol)</p>
                $$ n_{C_3H_8} = \\frac{masa}{Masa Molar} = \\frac{0.88 \\, g}{44.1 \\, g/mol} = \\mathbf{0.02 \\, moles} $$
            </div>
            <div class="paso">
                <p><strong>Helio (He):</strong></p>
                $$ n_{He} = \\frac{PV}{RT} = \\frac{(0.5 \\, atm)(2 \\, L)}{(0.082)(400 \\, K)} = \\mathbf{0.03 \\, moles} $$
            </div>

            <h3>Paso 2: La Reacción - Estequiometría y Reactivo Limitante</h3>
            <p>La reacción es la combustión del propano. Primero, la ecuación balanceada:</p>
            <div class="formula">$$ C_3H_8 (g) + 5 O_2 (g) \\rightarrow 3 CO_2 (g) + 4 H_2O (g) $$</div>
            <p>Esta ecuación nos dice que por cada <strong>1 mol de propano</strong>, necesitamos <strong>5 moles de oxígeno</strong>. Veamos qué tenemos:</p>
            <ul>
                <li>Moles de $C_3H_8$ disponibles: 0.02 mol</li>
                <li>Moles de $O_2$ disponibles: 0.12 mol</li>
            </ul>
            <p>Calculemos cuánto $O_2$ necesitaríamos para quemar todo el propano:</p>
            $$ Moles\\,de\\,O_2\\,necesarios = 0.02 \\, mol \\, C_3H_8 \\times \\frac{5 \\, mol \\, O_2}{1 \\, mol \\, C_3H_8} = \\mathbf{0.10 \\, moles \\, de \\, O_2} $$
            <p>Tenemos 0.12 moles de $O_2$ y solo necesitamos 0.10. ¡Nos sobra oxígeno! Esto significa que el <span class="importante">Propano ($C_3H_8$) es el reactivo limitante</span>. Él se consumirá por completo y dictará cuánto producto se forma.</p>

            <h3>Paso 3: Moles Finales Después de la Reacción</h3>
            <p>Ahora calculamos los moles de cada sustancia al final, basándonos en los 0.02 moles de propano que reaccionan.</p>
            <div class="paso">
                <p><strong>Propano ($C_3H_8$):</strong> Se consume todo. Moles finales = <span class="importante">0 mol</span>.</p>
                <p><strong>Oxígeno ($O_2$):</strong> Teníamos 0.12, se consumen 0.10. Moles finales = 0.12 - 0.10 = <span class="importante">0.02 mol</span>.</p>
                <p><strong>Dióxido de Carbono ($CO_2$):</strong> Se forman 3 moles por cada mol de propano.</p>
                $$ n_{CO_2} = 0.02 \\, mol \\, C_3H_8 \\times \\frac{3 \\, mol \\, CO_2}{1 \\, mol \\, C_3H_8} = \\mathbf{0.06 \\, mol} $$
                <p><strong>Agua ($H_2O$):</strong> Se forman 4 moles por cada mol de propano. (A 227°C el agua es gas).</p>
                $$ n_{H_2O} = 0.02 \\, mol \\, C_3H_8 \\times \\frac{4 \\, mol \\, H_2O}{1 \\, mol \\, C_3H_8} = \\mathbf{0.08 \\, mol} $$
                <p><strong>Helio (He):</strong> Es un gas noble, no reacciona. Moles finales = <span class="importante">0.03 mol</span>.</p>
            </div>
            <p><strong>Moles totales finales ($n_{total}$):</strong> Sumamos todo lo que queda en estado gaseoso.</p>
            $$ n_{total} = n_{O_2, exceso} + n_{CO_2, prod} + n_{H_2O, prod} + n_{He} $$
            $$ n_{total} = 0.02 + 0.06 + 0.08 + 0.03 = \\mathbf{0.19 \\, moles} $$

            <h3>Paso 4: Calcular la Presión Final</h3>
            <p>Ahora tenemos todo lo necesario para el cálculo final. Usamos la Ley del Gas Ideal con las condiciones finales:</p>
            <ul>
                <li>Moles totales finales ($n_{total}$): 0.19 mol</li>
                <li>Volumen total ($V_{total}$): 6 L + 2 L + 2 L = <span class="importante">10 L</span></li>
                <li>Temperatura final ($T_{final}$): 227 °C + 273 = <span class="importante">500 K</span></li>
            </ul>
            $$ P_{final} = \\frac{n_{total}RT_{final}}{V_{total}} = \\frac{(0.19 \\, mol)(0.082 \\, \\frac{atm \\cdot L}{mol \\cdot K})(500 \\, K)}{10 \\, L} $$
            $$ P_{final} = \\mathbf{0.779 \\, atm} $$
        `;
    }
}

resolverTerceraMitad();