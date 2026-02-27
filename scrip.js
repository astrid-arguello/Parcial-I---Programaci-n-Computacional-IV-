class CalculadoraVentas extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            form { display: flex; flex-direction: column; gap: 15px; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
            .error { color: red; font-size: 0.8rem; display: none; }
            label { font-weight: bold; }
        </style>
        
        <form id="venta-form">
            <label>Selecciona la Prenda:</label>
            <select id="prenda" name="prenda">
                <option value="">-- Seleccione --</option>
                <option value="25">Camiseta ($25)</option>
                <option value="50">Jeans ($50)</option>
                <option value="80">Chaqueta ($80)</option>
            </select>

            <label>Cantidad:</label>
            <input type="number" id="cantidad" placeholder="Ej: 1" min="1">
            <span id="err-cantidad" class="error">Por favor ingresa una cantidad válida.</span>

            <button type="button" id="btn-calcular">Calcular Total</button>
        </form>

        <div id="resultado" style="margin-top: 20px; font-size: 1.2rem; font-weight: bold; color: #2c3e50;">
            Esperando datos...
        </div>
        `;
    }
}
customElements.define('calculadora-ventas', CalculadoraVentas);

document.addEventListener('DOMContentLoaded', () => {
    const component = document.querySelector('calculadora-ventas');
    
    // Esperamos a que el shadowRoot esté listo
    setTimeout(() => {
        const shadow = component.shadowRoot;
        const btn = shadow.getElementById('btn-calcular');
        const resDiv = shadow.getElementById('resultado');

        btn.addEventListener('click', () => {
            const precio = parseFloat(shadow.getElementById('prenda').value);
            const cantidad = shadow.getElementById('cantidad').value;
            const errorSpan = shadow.getElementById('err-cantidad');

            // --- VALIDACIONES ---
            if (isNaN(precio) || cantidad === "" || cantidad <= 0) {
                errorSpan.style.display = 'block';
                resDiv.innerText = "Error: Datos incompletos.";
                return;
            }

            errorSpan.style.display = 'none';

            // --- PROCESAMIENTO ---
            const total = precio * parseInt(cantidad);

            // --- MOSTRAR RESULTADO SIN RECARGAR ---
            resDiv.innerHTML = `
                <hr>
                <p>Resumen de Venta:</p>
                <ul>
                    <li>Subtotal: $${total.toFixed(2)}</li>
                    <li><strong>Total a Pagar: $${total.toFixed(2)}</strong></li>
                </ul>
            `;
        });
    }, 100);
});