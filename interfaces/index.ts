export interface Data {
	game: PopUpData;
	video: PopUpData;
}

export interface PopUpData {
	info: Info;
	inputs: FormInput[];
}

export interface Info {
	video_url?: string;
	title: string;
	subtitle: string;
}

export interface FormInput {
	name: string;
	label: string;
	type: string;
	placeholder?: string;
	options?: string[];
	defaultValue: string | boolean;
	rules?: {
		required: boolean | string;
	};
}
