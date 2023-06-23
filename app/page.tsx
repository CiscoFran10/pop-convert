import PopUp from "@/components/pop-up";
import { Data } from "@/interfaces";
import Image from "next/image";
import Coins from "./coins.webp";

const getPopUpData = async () => {
	const res = await fetch("http://localhost:3000/api", { cache: "no-store" });
	return res.json();
};

export default async function Home() {
	const data: Data = await getPopUpData();

	if (data)
		return (
			<main className="flex min-h-screen flex-col justify-center items-center p-4 sm:p-10  md:p-24">
				<div className="grid gap-10 bg-white shadow-md p-3 rounded-xl">
					<Image
						className="w-full h-[300px] rounded-xl object-cover"
						src={Coins}
						alt="ilustration"
					/>
					<div className="flex items-center justify-center gap-10">
						<PopUp trigger="Abrir Jogo" data={data.game} />
						<PopUp trigger="Abrir Video" data={data.video} />
					</div>
				</div>
			</main>
		);
	return null;
}
