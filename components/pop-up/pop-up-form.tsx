"use client";

import { FormInput } from "@/interfaces";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

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

	const onSubmit: SubmitHandler<any> = (data) => {
		toast({
			title: "Voce enviou os seguintes valores:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-secondary p-4 border border-primary">
					<code>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
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
						render={({ field }) => {
							switch (type) {
								case "radio":
									return (
										<FormItem>
											<FormLabel>{label}</FormLabel>
											<FormControl>
												<RadioGroup
													className="flex flex-col !mt-3"
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
											<FormMessage />
										</FormItem>
									);

								case "checkbox":
									return (
										<FormItem className="flex items-center gap-3 !mt-8">
											<FormControl>
												<Checkbox
													checked={field.value as CheckedState}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<FormLabel className="!mt-0">{label}</FormLabel>
											<FormMessage />
										</FormItem>
									);

								default:
									return (
										<FormItem>
											<FormLabel>{label}</FormLabel>
											<FormControl>
												<Input
													type={type}
													placeholder={placeholder}
													{...field}
													value={String(field.value)}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
							}
						}}
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
