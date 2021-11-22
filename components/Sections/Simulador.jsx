import { useState } from "react"

const Simulador = () => {

	const [params, setParams] = useState({
		numCars: 0,
		operationDays: 0,
		carKm: 0,
		autonomia: 0
	})

	const [result, setResult] = useState({
		gasolina: 0,
		gnv: 0
	})

	const onChange = e => {
		setParams(Object.assign({}, params, { [e.target.name]: e.target.value }))
	}

	return <section>

		<article>
			<h3>PARÁMETROS DEL SIMULADOR</h3>
			<form>
				<ul>
					<li>
						<label>Número de vehículos.</label>
						<div className="input">
							<input type="number" value={params.numCars} name="numCars" onChange={onChange} />
						</div>
					</li>
					<li>
						<label>Días de operación al mes.</label>
						<div className="input">
							<input type="number" value={params.operationDays} name="operationDays" onChange={onChange} />
						</div>
					</li>
					<li>
						<label>Recorrido diario por vehículo (Km)</label>
						<div className="input">
							<input type="number" value={params.carKm} name="carKm" onChange={onChange} />
						</div>
					</li>
					<li>
						<label>Autonomia (Km/gal)</label>
						<div className="input">
							<input type="number" value={params.autonomia} name="autonomia" onChange={onChange} />
						</div>
					</li>
				</ul>
				<div className="porcentaje">
					<span>2%</span>
					<p>Tarifa Preferencial (%Dcto sobre PVP)</p>
				</div>
			</form>
		</article>

		<article>
			<h3>RESULTADOS DEL SIMULADOR</h3>
			<div className="response">
				<ul>
					<li>
						<p>Costo mensual usando gasolina.</p>
						<p>COP 536214</p>
					</li>
					<li>
						<p>Costo mensual usando GNV</p>
						<p>COP 536214</p>
					</li>
				</ul>
				<div className="porcentaje">
					<span>44%</span>
					<p>Ahorro de combustible en costos</p>
				</div>
			</div>
		</article>


		<style jsx>{`

			article {
				padding: 2rem 10rem;
				background: white url('/img/banner/banner-fondo-claro.png') no-repeat;
				background-size: cover;
				margin-bottom: 2rem;
				position: relative;
			}

			h3 {
				text-align: center;
				color: var(--blue);
				margin-bottom: 2rem;
			}

			form, .response {
				display: grid;
				grid-template-columns: 1fr auto;
				color: white;
			}

			ul {
				display: grid;
				grid-row-gap: 2px;
			}

			li {
				display: grid;
				grid-template-columns: 1fr 15rem;
				grid-column-gap: 2px;
				align-items: center;
			}

			li p, li label, .input {
				background-color: var(--orange);
				padding: 1rem;
			}

			.input {
				display: grid;
				place-items: center;
				box-sizing: border-box;
				padding: .5rem;
				height: 100%;	
			}

			input {
				text-align: center;
				color: #666;
			}

			.porcentaje {
				box-sizing: border-box;
				padding: 1rem;
				width: 10rem;
				color: white;
				background-color: var(--blue);
				text-align: center;
			}

			.porcentaje span {
				font-size: 2rem;
			}

			.porcentaje p {
				font-size: .7rem;
			}

		`}</style>
	</section>
}

export default Simulador