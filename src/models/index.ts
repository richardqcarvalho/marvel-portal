export type CharacterT = {
  id?: number;
  name?: string;
  description?: string;
  modified?: string;
  resourceURI?: string;
  urls?: Array<UrlT>;
  thumbnail?: ImageT;
  comics?: ComicListT;
  stories?: StoryListT;
  events?: EventListT;
  series?: SeriesListT;
};

type UrlT = {
  type?: string;
  url?: string;
};

type ImageT = {
  path?: string;
  extension?: string;
};

export type ComicListT = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<ComicSummaryT>;
};

type ComicSummaryT = {
  resourceURI?: string;
  name?: string;
};

export type StoryListT = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<StorySummaryT>;
};

type StorySummaryT = {
  resourceURI?: string;
  name?: string;
  type?: string;
};

export type EventListT = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<EventSummaryT>;
};

type EventSummaryT = {
  resourceURI?: string;
  name?: string;
};

export type SeriesListT = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<SeriesSummaryT>;
};

type SeriesSummaryT = {
  resourceURI?: string;
  name?: string;
};

export type EventT = {
  id?: number;
  title?: string;
  description?: string;
  resourceURI?: string;
  urls?: Array<UrlT>;
  modified?: string;
  start?: string;
  end?: string;
  thumbnail?: ImageT;
  comics?: ComicListT;
  stories?: StoryListT;
  series?: SeriesListT;
  characters?: CharacterListT;
  creators?: CreatorListT;
  next?: EventSummaryT;
  previous?: EventSummaryT;
};

export type CharacterListT = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<CharacterSummaryT>;
};

type CharacterSummaryT = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type CreatorListT = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<CreatorSummaryT>;
};

type CreatorSummaryT = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type ItemT = CharacterT & EventT;

export type ColumnT = {
  title: string;
  data: "title" | "name" | "description";
};

export type PaginationT = {
  count: number;
  page: number;
};
