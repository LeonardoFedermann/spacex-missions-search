import { GenericObject } from "./types";

export const TABLE_CELL_WIDTH_DESKTOP: number = 200;
export const TABLE_CELL_HEIGHT_DESKTOP: number = 50;

export const MAIN_TITLE: string = "SpaceX Missions Search";
export const SEARCH_FIELD_PLACEHOLDER: string = "Example:  Iridium";
export const SEARCH_FIELD_LABEL: string = "Search a mission";
export const TABLE_TITLE_NAME: string = "Name";
export const TABLE_TITLE_ID: string = "ID";
export const TABLE_TITLE_WEBSITE: string = "Website";
export const TABLE_TITLE_FAVORITE: string = "Favorite";
export const NO_MATCH_WITH_SEARCH_MESSAGE: string =
	"No missions match this search";
export const LOADING_ARIA_LABEL: string = "Loading...";
export const REQUEST_ERROR_MESSAGE: string =
	"There was an error in SpaceX system. Please try again later.";
export const MISSION_NOT_FOUND_ERROR_MESSAGE: string = "Mission not found";
export const HEADER_BACKGROUND_IMAGE_URL: string =
	"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D";

export const MISSION_DESSERIALIZED_PROPERTIES: GenericObject<string> = {
	mission_name: "name",
	mission_id: "id",
	manufacturers: "manufacturers",
	payload_ids: "payloadIds",
	wikipedia: "wikipedia",
	website: "website",
	twitter: "twitter",
	description: "description",
};
