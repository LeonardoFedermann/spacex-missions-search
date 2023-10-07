import { ObjectOfLabels } from "./types";

export const TABLE_CELL_WIDTH: number = 200;
export const TABLE_CELL_HEIGHT: number = 50;

export const MAIN_TITLE: string = "SpaceX Missions Search";
export const SEARCH_FIELD_PLACEHOLDER: string = "Example:  Iridium";
export const SEARCH_FIELD_LABEL: string = "Search a mission";
export const TABLE_TITLE_NAME: string = "Name";
export const TABLE_TITLE_ID: string = "ID";
export const TABLE_TITLE_WEBSITE: string = "Website";
export const TABLE_TITLE_FAVORITE: string = "Favorite";
export const NO_MATCH_WITH_SEARCH_MESSAGE: string =
	"No missions match this search";

export const MISSION_DESSERIALIZED_PROPERTIES: ObjectOfLabels = {
	mission_name: "name",
	mission_id: "id",
	manufacturers: "manufacturers",
	payload_ids: "payloadIds",
	wikipedia: "wikipedia",
	website: "website",
	twitter: "twitter",
	description: "description",
};
