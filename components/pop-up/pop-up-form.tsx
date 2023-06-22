"use client";

import { FormInput } from "@/interfaces";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

const PopUpForm = ({ inputs }: { inputs: FormInput[] }) => {
	const form = useForm<any>({
		defaultValues: inputs.reduce((acc, input) => {
			return { ...acc, [input.name]: input.defaultValue };
		}, {}),
	});

	const onSubmit: SubmitHandler<any> = (values) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
				{inputs.map(({ name, label, placeholder, type, rules, options }) => (
					<FormField
						key={name}
						control={form.control}
						name={name}
						rules={rules}
						render={({ field }) => (
							<FormItem>
								<FormLabel>{label}</FormLabel>
								{(() => {
									switch (type) {
										case "radio":
											return (
												<FormControl>
													<RadioGroup
														className="flex flex-col"
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														{options?.map((opt) => (
															<FormItem
																className="flex items-center space-x-3 space-y-0"
																key={opt}
															>
																<FormControl>
																	<RadioGroupItem value={opt}>
																		{opt}
																	</RadioGroupItem>
																</FormControl>
																<FormLabel>{opt}</FormLabel>
															</FormItem>
														))}
													</RadioGroup>
												</FormControl>
											);

										case "checkbox":
											return (
												<FormControl>
													<Checkbox
														checked={field.value as CheckedState}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
											);

										default:
											return (
												<FormControl>
													<Input
														type={type}
														placeholder={placeholder}
														{...field}
														value={String(field.value)}
													/>
												</FormControl>
											);
									}
								})()}
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<div className="flex justify-end">
					<Button type="submit">Enviar</Button>
				</div>
			</form>
		</Form>
	);
};

export default PopUpForm;
