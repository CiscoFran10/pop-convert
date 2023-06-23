import React from "react";
import Image from "next/image";
import Machine from "../../app/caca-niquel.png";

import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Info } from "@/interfaces";

const PopUpHeader = ({ video_url, title, subtitle }: Info) => {
	return (
		<DialogHeader>
			<div className="flex justify-center items-center w-full bg-primary/60">
				{video_url ? (
					<iframe src={video_url} allowFullScreen></iframe>
				) : (
					<Image src={Machine} alt="Caça niquel" width={200} height={200} />
				)}
			</div>

			<div className="px-6 py-2">
				<DialogTitle className="text-lg md:text-2xl">{title}</DialogTitle>
				<DialogDescription>{subtitle}</DialogDescription>
			</div>
		</DialogHeader>
	);
};

export default PopUpHeader;
