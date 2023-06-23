import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PopUpHeader from "./pop-up-header";
import { PopUpData } from "@/interfaces";
import PopUpForm from "./pop-up-form";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface PopUpProps {
	data: PopUpData;
	trigger: string;
}

const PopUp = ({ trigger, data }: PopUpProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full" variant={"secondary"}>
					{trigger}
				</Button>
			</DialogTrigger>
			<DialogContent className="p-0">
				<PopUpHeader {...data.info} />

				<div className="px-6 pb-6">
					<PopUpForm inputs={data.inputs} />
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default PopUp;
