export type CharacterT = {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
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

type ComicListT = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<ComicSummaryT>;
};

type ComicSummaryT = {
  resourceURI?: string;
  name?: string;
};

type StoryListT = {
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

type EventListT = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: Array<EventSummaryT>;
};

type EventSummaryT = {
  resourceURI?: string;
  name?: string;
};

type SeriesListT = {
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
  modified?: Date;
  start?: Date;
  end?: Date;
  thumbnail?: ImageT;
  comics?: ComicListT;
  stories?: StoryListT;
  series?: SeriesListT;
  characters?: CharacterListT;
  creators?: CreatorListT;
  next?: EventSummaryT;
  previous?: EventSummaryT;
};

type CharacterListT = {
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

type CreatorListT = {
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
