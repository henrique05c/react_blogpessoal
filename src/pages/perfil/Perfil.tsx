import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Perfil() {
	const navigate = useNavigate()
	const { usuario } = useContext(AuthContext)

	useEffect(() => {
		if (usuario.token === "") {
			alert("Você precisa estar logado")
			navigate("/")
		}
	}, [usuario.token])

	return (
		<div className="flex justify-center mx-4">
			<div className="container mx-auto my-4 rounded-2xl overflow-hidden">

				<img
					className="w-full h-48 object-cover"
					src="https://i.imgur.com/ZZFAmzo.jpg"
					alt="Capa do Perfil"
				/>

				<div className="relative bg-sky-500 text-white flex flex-col items-center pb-8 gap-1">

					<img
						className="rounded-full w-36 h-36 object-cover border-8 border-white
						           absolute -top-16 left-1/2 -translate-x-1/2"
						src={usuario.foto || "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.png"}
						alt={`Foto de perfil de ${usuario.nome}`}
					/>

					<div className="h-24" />

					<p className="text-xl">Nome: {usuario.nome}</p>
					<p className="text-xl">Email: {usuario.usuario}</p>
				</div>

			</div>
		</div>
	)
}

export default Perfil