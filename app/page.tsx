import PopUp from "@/components/pop-up";
import { PopUpData } from "@/interfaces";

const getPopUpData = async () => {
	const res = await fetch("http://localhost:3001/api", { cache: "no-store" });
	return res.json();
};

export default async function Home() {
	const data: PopUpData = await getPopUpData();

	if (data)
		return (
			<main className="flex min-h-screen flex-col justify-center items-center p-10  md:p-24">
				<div className="flex items-center gap-10">
					<PopUp trigger="Abrir Jogo" data={data} />
					<PopUp trigger="Abrir Video" data={data} />
				</div>
			</main>
		);
	return null;
}
