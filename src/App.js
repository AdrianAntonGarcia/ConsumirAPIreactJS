import React,{useState, useEffect} from "react";
import Styled from "@emotion/styled";
import Frase from './components/Frase';

const Contenedor = Styled.div`
	display: flex;
	align-items: center;
	padding-top: 5rem;
	flex-direction: column;
`;

const Boton = Styled.button`
	background: -webkit-linear-gradient(
		top left,
		#007d35 0%,
		#007d35 44%,
		#0f574e 100%
	);
	background-size: 300px;
	font-family: Arial, Helvetica, sans-serif;
	color: #fff;
	margin-top: 3rem;
	padding: 1rem 3rem;
	font-size: 2rem;
	border: 2px solid black;
	transition: background-size .8s ease;
	:hover{
		cursor:pointer;
		background-size:400px;
	}
`;

function App() {

	// state de frases
	const [frase, guardarFrase] = useState({

	});

	useEffect(()=>{
		consultarAPI();
	}, []);
	const consultarAPI = async() => {
		const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
		console.log(api);
		const frase = await api.json();
		guardarFrase(frase[0]);
	};
/*
	const consultarAPI = () => {
		const api = fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
		console.log(api);
		const frase = api.then( respuesta =>{
			return respuesta.json();
		});
		frase.then(resultado =>{
			console.log(resultado);
		})
		console.log(frase);
	};*/
	// <Boton onClick={() => consultarAPI()}>Obtener frase</Boton>
	return (
		<Contenedor>
			<Frase
				frase={frase}
			/>
			<Boton onClick={consultarAPI}>Obtener frase</Boton>
		</Contenedor>
	);
}

export default App;
