/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: queryRecommended
// ====================================================

export interface queryRecommended_recommended_section_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface queryRecommended_recommended_section_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface queryRecommended_recommended_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: queryRecommended_recommended_section_highlight_background | null;
  floatImage: queryRecommended_recommended_section_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface queryRecommended_recommended_section_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface queryRecommended_recommended_section_games_developers {
  __typename: "Developer";
  name: string;
}

export interface queryRecommended_recommended_section_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: queryRecommended_recommended_section_games_cover | null;
  developers: queryRecommended_recommended_section_games_developers[];
  price: number;
}

export interface queryRecommended_recommended_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: queryRecommended_recommended_section_highlight | null;
  games: queryRecommended_recommended_section_games[];
}

export interface queryRecommended_recommended {
  __typename: "Recommended";
  section: queryRecommended_recommended_section | null;
}

export interface queryRecommended {
  recommended: queryRecommended_recommended | null;
}
