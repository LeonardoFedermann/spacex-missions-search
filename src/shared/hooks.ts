import { ChangeEvent, useState, useMemo, useEffect } from "react";

import { GenericObject, Mission, RequestPossibleStatuses } from "./types";

export const useForm = (initialForm: GenericObject) => {
	const [form, setForm] = useState<GenericObject>(initialForm);

	const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setForm({ ...form, [name]: value });
	};

	const resetForm = () => {
		setForm(initialForm);
	};

	return { form, handleFormChange, resetForm };
};

export const useDisplayedMissions = (
	fetchedMissions: Mission[],
	search: string
): Mission[] =>
	useMemo(
		(): Mission[] =>
			fetchedMissions.filter((mission) =>
				mission.name.toLowerCase().includes(search.toLowerCase())
			),
		[fetchedMissions, search]
	);

