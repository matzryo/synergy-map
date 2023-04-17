import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 mins 50.52 secs after the 23rd hour of Apr 12th 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};

export type AddMtgCardInput = {
  collectorNumber: Scalars['String'];
  colors: Array<InputMaybe<Color>>;
  imageUrlEn: Scalars['String'];
  imageUrlJa?: InputMaybe<Scalars['String']>;
  nameEn: Scalars['String'];
  nameJa?: InputMaybe<Scalars['String']>;
  rarity: Rarity;
  setcode: Scalars['String'];
};

export type AddMtgCardPayload = {
  __typename?: 'AddMtgCardPayload';
  mtgCard?: Maybe<Array<Maybe<MtgCard>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddMtgCardPayloadMtgCardArgs = {
  filter?: InputMaybe<MtgCardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MtgCardOrder>;
};

export type AddSynergyInput = {
  cards: Array<MtgCardRef>;
  explanationEn?: InputMaybe<Scalars['String']>;
  explanationJa?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type AddSynergyPayload = {
  __typename?: 'AddSynergyPayload';
  numUids?: Maybe<Scalars['Int']>;
  synergy?: Maybe<Array<Maybe<Synergy>>>;
};


export type AddSynergyPayloadSynergyArgs = {
  filter?: InputMaybe<SynergyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SynergyOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']>;
};

export enum Color {
  Black = 'BLACK',
  Blue = 'BLUE',
  Green = 'GREEN',
  Red = 'RED',
  White = 'WHITE'
}

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']>>;
  graphql?: InputMaybe<Scalars['String']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  ge?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  le?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteMtgCardPayload = {
  __typename?: 'DeleteMtgCardPayload';
  msg?: Maybe<Scalars['String']>;
  mtgCard?: Maybe<Array<Maybe<MtgCard>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteMtgCardPayloadMtgCardArgs = {
  filter?: InputMaybe<MtgCardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MtgCardOrder>;
};

export type DeleteSynergyPayload = {
  __typename?: 'DeleteSynergyPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  synergy?: Maybe<Array<Maybe<Synergy>>>;
};


export type DeleteSynergyPayloadSynergyArgs = {
  filter?: InputMaybe<SynergyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SynergyOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']>;
  ge?: InputMaybe<Scalars['Int64']>;
  gt?: InputMaybe<Scalars['Int64']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']>>>;
  le?: InputMaybe<Scalars['Int64']>;
  lt?: InputMaybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MtgCard = {
  __typename?: 'MtgCard';
  collectorNumber: Scalars['String'];
  colors: Array<Maybe<Color>>;
  id: Scalars['ID'];
  imageUrlEn: Scalars['String'];
  imageUrlJa?: Maybe<Scalars['String']>;
  nameEn: Scalars['String'];
  nameJa?: Maybe<Scalars['String']>;
  rarity: Rarity;
  setcode: Scalars['String'];
};

export type MtgCardAggregateResult = {
  __typename?: 'MtgCardAggregateResult';
  collectorNumberMax?: Maybe<Scalars['String']>;
  collectorNumberMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  imageUrlEnMax?: Maybe<Scalars['String']>;
  imageUrlEnMin?: Maybe<Scalars['String']>;
  imageUrlJaMax?: Maybe<Scalars['String']>;
  imageUrlJaMin?: Maybe<Scalars['String']>;
  nameEnMax?: Maybe<Scalars['String']>;
  nameEnMin?: Maybe<Scalars['String']>;
  nameJaMax?: Maybe<Scalars['String']>;
  nameJaMin?: Maybe<Scalars['String']>;
  setcodeMax?: Maybe<Scalars['String']>;
  setcodeMin?: Maybe<Scalars['String']>;
};

export type MtgCardFilter = {
  and?: InputMaybe<Array<InputMaybe<MtgCardFilter>>>;
  has?: InputMaybe<Array<InputMaybe<MtgCardHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  nameEn?: InputMaybe<StringRegExpFilter>;
  nameJa?: InputMaybe<StringRegExpFilter>;
  not?: InputMaybe<MtgCardFilter>;
  or?: InputMaybe<Array<InputMaybe<MtgCardFilter>>>;
};

export enum MtgCardHasFilter {
  CollectorNumber = 'collectorNumber',
  Colors = 'colors',
  ImageUrlEn = 'imageUrlEn',
  ImageUrlJa = 'imageUrlJa',
  NameEn = 'nameEn',
  NameJa = 'nameJa',
  Rarity = 'rarity',
  Setcode = 'setcode'
}

export type MtgCardOrder = {
  asc?: InputMaybe<MtgCardOrderable>;
  desc?: InputMaybe<MtgCardOrderable>;
  then?: InputMaybe<MtgCardOrder>;
};

export enum MtgCardOrderable {
  CollectorNumber = 'collectorNumber',
  ImageUrlEn = 'imageUrlEn',
  ImageUrlJa = 'imageUrlJa',
  NameEn = 'nameEn',
  NameJa = 'nameJa',
  Setcode = 'setcode'
}

export type MtgCardPatch = {
  collectorNumber?: InputMaybe<Scalars['String']>;
  colors?: InputMaybe<Array<InputMaybe<Color>>>;
  imageUrlEn?: InputMaybe<Scalars['String']>;
  imageUrlJa?: InputMaybe<Scalars['String']>;
  nameEn?: InputMaybe<Scalars['String']>;
  nameJa?: InputMaybe<Scalars['String']>;
  rarity?: InputMaybe<Rarity>;
  setcode?: InputMaybe<Scalars['String']>;
};

export type MtgCardRef = {
  collectorNumber?: InputMaybe<Scalars['String']>;
  colors?: InputMaybe<Array<InputMaybe<Color>>>;
  id?: InputMaybe<Scalars['ID']>;
  imageUrlEn?: InputMaybe<Scalars['String']>;
  imageUrlJa?: InputMaybe<Scalars['String']>;
  nameEn?: InputMaybe<Scalars['String']>;
  nameJa?: InputMaybe<Scalars['String']>;
  rarity?: InputMaybe<Rarity>;
  setcode?: InputMaybe<Scalars['String']>;
};

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMtgCard?: Maybe<AddMtgCardPayload>;
  addSynergy?: Maybe<AddSynergyPayload>;
  deleteMtgCard?: Maybe<DeleteMtgCardPayload>;
  deleteSynergy?: Maybe<DeleteSynergyPayload>;
  updateMtgCard?: Maybe<UpdateMtgCardPayload>;
  updateSynergy?: Maybe<UpdateSynergyPayload>;
};


export type MutationAddMtgCardArgs = {
  input: Array<AddMtgCardInput>;
};


export type MutationAddSynergyArgs = {
  input: Array<AddSynergyInput>;
};


export type MutationDeleteMtgCardArgs = {
  filter: MtgCardFilter;
};


export type MutationDeleteSynergyArgs = {
  filter: SynergyFilter;
};


export type MutationUpdateMtgCardArgs = {
  input: UpdateMtgCardInput;
};


export type MutationUpdateSynergyArgs = {
  input: UpdateSynergyInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Query = {
  __typename?: 'Query';
  aggregateMtgCard?: Maybe<MtgCardAggregateResult>;
  aggregateSynergy?: Maybe<SynergyAggregateResult>;
  getMtgCard?: Maybe<MtgCard>;
  getSynergy?: Maybe<Synergy>;
  queryMtgCard?: Maybe<Array<Maybe<MtgCard>>>;
  querySynergy?: Maybe<Array<Maybe<Synergy>>>;
};


export type QueryAggregateMtgCardArgs = {
  filter?: InputMaybe<MtgCardFilter>;
};


export type QueryAggregateSynergyArgs = {
  filter?: InputMaybe<SynergyFilter>;
};


export type QueryGetMtgCardArgs = {
  id: Scalars['ID'];
};


export type QueryGetSynergyArgs = {
  id: Scalars['ID'];
};


export type QueryQueryMtgCardArgs = {
  filter?: InputMaybe<MtgCardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MtgCardOrder>;
};


export type QueryQuerySynergyArgs = {
  filter?: InputMaybe<SynergyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SynergyOrder>;
};

export enum Rarity {
  Common = 'COMMON',
  Mythic = 'MYTHIC',
  Rare = 'RARE',
  Uncommon = 'UNCOMMON'
}

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
};

export type Synergy = {
  __typename?: 'Synergy';
  cards: Array<MtgCard>;
  cardsAggregate?: Maybe<MtgCardAggregateResult>;
  explanationEn?: Maybe<Scalars['String']>;
  explanationJa?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  weight?: Maybe<Scalars['Float']>;
};


export type SynergyCardsArgs = {
  filter?: InputMaybe<MtgCardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MtgCardOrder>;
};


export type SynergyCardsAggregateArgs = {
  filter?: InputMaybe<MtgCardFilter>;
};

export type SynergyAggregateResult = {
  __typename?: 'SynergyAggregateResult';
  count?: Maybe<Scalars['Int']>;
  explanationEnMax?: Maybe<Scalars['String']>;
  explanationEnMin?: Maybe<Scalars['String']>;
  explanationJaMax?: Maybe<Scalars['String']>;
  explanationJaMin?: Maybe<Scalars['String']>;
  weightAvg?: Maybe<Scalars['Float']>;
  weightMax?: Maybe<Scalars['Float']>;
  weightMin?: Maybe<Scalars['Float']>;
  weightSum?: Maybe<Scalars['Float']>;
};

export type SynergyFilter = {
  and?: InputMaybe<Array<InputMaybe<SynergyFilter>>>;
  has?: InputMaybe<Array<InputMaybe<SynergyHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<SynergyFilter>;
  or?: InputMaybe<Array<InputMaybe<SynergyFilter>>>;
};

export enum SynergyHasFilter {
  Cards = 'cards',
  ExplanationEn = 'explanationEn',
  ExplanationJa = 'explanationJa',
  Weight = 'weight'
}

export type SynergyOrder = {
  asc?: InputMaybe<SynergyOrderable>;
  desc?: InputMaybe<SynergyOrderable>;
  then?: InputMaybe<SynergyOrder>;
};

export enum SynergyOrderable {
  ExplanationEn = 'explanationEn',
  ExplanationJa = 'explanationJa',
  Weight = 'weight'
}

export type SynergyPatch = {
  cards?: InputMaybe<Array<MtgCardRef>>;
  explanationEn?: InputMaybe<Scalars['String']>;
  explanationJa?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type SynergyRef = {
  cards?: InputMaybe<Array<MtgCardRef>>;
  explanationEn?: InputMaybe<Scalars['String']>;
  explanationJa?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type UpdateMtgCardInput = {
  filter: MtgCardFilter;
  remove?: InputMaybe<MtgCardPatch>;
  set?: InputMaybe<MtgCardPatch>;
};

export type UpdateMtgCardPayload = {
  __typename?: 'UpdateMtgCardPayload';
  mtgCard?: Maybe<Array<Maybe<MtgCard>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateMtgCardPayloadMtgCardArgs = {
  filter?: InputMaybe<MtgCardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MtgCardOrder>;
};

export type UpdateSynergyInput = {
  filter: SynergyFilter;
  remove?: InputMaybe<SynergyPatch>;
  set?: InputMaybe<SynergyPatch>;
};

export type UpdateSynergyPayload = {
  __typename?: 'UpdateSynergyPayload';
  numUids?: Maybe<Scalars['Int']>;
  synergy?: Maybe<Array<Maybe<Synergy>>>;
};


export type UpdateSynergyPayloadSynergyArgs = {
  filter?: InputMaybe<SynergyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SynergyOrder>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddMtgCardInput: AddMtgCardInput;
  AddMtgCardPayload: ResolverTypeWrapper<AddMtgCardPayload>;
  AddSynergyInput: AddSynergyInput;
  AddSynergyPayload: ResolverTypeWrapper<AddSynergyPayload>;
  AuthRule: AuthRule;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Color: Color;
  ContainsFilter: ContainsFilter;
  CustomHTTP: CustomHttp;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeFilter: DateTimeFilter;
  DateTimeRange: DateTimeRange;
  DeleteMtgCardPayload: ResolverTypeWrapper<DeleteMtgCardPayload>;
  DeleteSynergyPayload: ResolverTypeWrapper<DeleteSynergyPayload>;
  DgraphIndex: DgraphIndex;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatFilter: FloatFilter;
  FloatRange: FloatRange;
  GenerateMutationParams: GenerateMutationParams;
  GenerateQueryParams: GenerateQueryParams;
  HTTPMethod: HttpMethod;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int64: ResolverTypeWrapper<Scalars['Int64']>;
  Int64Filter: Int64Filter;
  Int64Range: Int64Range;
  IntFilter: IntFilter;
  IntRange: IntRange;
  IntersectsFilter: IntersectsFilter;
  Mode: Mode;
  MtgCard: ResolverTypeWrapper<MtgCard>;
  MtgCardAggregateResult: ResolverTypeWrapper<MtgCardAggregateResult>;
  MtgCardFilter: MtgCardFilter;
  MtgCardHasFilter: MtgCardHasFilter;
  MtgCardOrder: MtgCardOrder;
  MtgCardOrderable: MtgCardOrderable;
  MtgCardPatch: MtgCardPatch;
  MtgCardRef: MtgCardRef;
  MultiPolygon: ResolverTypeWrapper<MultiPolygon>;
  MultiPolygonRef: MultiPolygonRef;
  Mutation: ResolverTypeWrapper<{}>;
  NearFilter: NearFilter;
  Point: ResolverTypeWrapper<Point>;
  PointGeoFilter: PointGeoFilter;
  PointList: ResolverTypeWrapper<PointList>;
  PointListRef: PointListRef;
  PointRef: PointRef;
  Polygon: ResolverTypeWrapper<Polygon>;
  PolygonGeoFilter: PolygonGeoFilter;
  PolygonRef: PolygonRef;
  Query: ResolverTypeWrapper<{}>;
  Rarity: Rarity;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringExactFilter: StringExactFilter;
  StringFullTextFilter: StringFullTextFilter;
  StringHashFilter: StringHashFilter;
  StringRange: StringRange;
  StringRegExpFilter: StringRegExpFilter;
  StringTermFilter: StringTermFilter;
  Synergy: ResolverTypeWrapper<Synergy>;
  SynergyAggregateResult: ResolverTypeWrapper<SynergyAggregateResult>;
  SynergyFilter: SynergyFilter;
  SynergyHasFilter: SynergyHasFilter;
  SynergyOrder: SynergyOrder;
  SynergyOrderable: SynergyOrderable;
  SynergyPatch: SynergyPatch;
  SynergyRef: SynergyRef;
  UpdateMtgCardInput: UpdateMtgCardInput;
  UpdateMtgCardPayload: ResolverTypeWrapper<UpdateMtgCardPayload>;
  UpdateSynergyInput: UpdateSynergyInput;
  UpdateSynergyPayload: ResolverTypeWrapper<UpdateSynergyPayload>;
  WithinFilter: WithinFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddMtgCardInput: AddMtgCardInput;
  AddMtgCardPayload: AddMtgCardPayload;
  AddSynergyInput: AddSynergyInput;
  AddSynergyPayload: AddSynergyPayload;
  AuthRule: AuthRule;
  Boolean: Scalars['Boolean'];
  ContainsFilter: ContainsFilter;
  CustomHTTP: CustomHttp;
  DateTime: Scalars['DateTime'];
  DateTimeFilter: DateTimeFilter;
  DateTimeRange: DateTimeRange;
  DeleteMtgCardPayload: DeleteMtgCardPayload;
  DeleteSynergyPayload: DeleteSynergyPayload;
  Float: Scalars['Float'];
  FloatFilter: FloatFilter;
  FloatRange: FloatRange;
  GenerateMutationParams: GenerateMutationParams;
  GenerateQueryParams: GenerateQueryParams;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int64: Scalars['Int64'];
  Int64Filter: Int64Filter;
  Int64Range: Int64Range;
  IntFilter: IntFilter;
  IntRange: IntRange;
  IntersectsFilter: IntersectsFilter;
  MtgCard: MtgCard;
  MtgCardAggregateResult: MtgCardAggregateResult;
  MtgCardFilter: MtgCardFilter;
  MtgCardOrder: MtgCardOrder;
  MtgCardPatch: MtgCardPatch;
  MtgCardRef: MtgCardRef;
  MultiPolygon: MultiPolygon;
  MultiPolygonRef: MultiPolygonRef;
  Mutation: {};
  NearFilter: NearFilter;
  Point: Point;
  PointGeoFilter: PointGeoFilter;
  PointList: PointList;
  PointListRef: PointListRef;
  PointRef: PointRef;
  Polygon: Polygon;
  PolygonGeoFilter: PolygonGeoFilter;
  PolygonRef: PolygonRef;
  Query: {};
  String: Scalars['String'];
  StringExactFilter: StringExactFilter;
  StringFullTextFilter: StringFullTextFilter;
  StringHashFilter: StringHashFilter;
  StringRange: StringRange;
  StringRegExpFilter: StringRegExpFilter;
  StringTermFilter: StringTermFilter;
  Synergy: Synergy;
  SynergyAggregateResult: SynergyAggregateResult;
  SynergyFilter: SynergyFilter;
  SynergyOrder: SynergyOrder;
  SynergyPatch: SynergyPatch;
  SynergyRef: SynergyRef;
  UpdateMtgCardInput: UpdateMtgCardInput;
  UpdateMtgCardPayload: UpdateMtgCardPayload;
  UpdateSynergyInput: UpdateSynergyInput;
  UpdateSynergyPayload: UpdateSynergyPayload;
  WithinFilter: WithinFilter;
};

export type AuthDirectiveArgs = {
  add?: Maybe<AuthRule>;
  delete?: Maybe<AuthRule>;
  password?: Maybe<AuthRule>;
  query?: Maybe<AuthRule>;
  update?: Maybe<AuthRule>;
};

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CacheControlDirectiveArgs = {
  maxAge: Scalars['Int'];
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CascadeDirectiveArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CascadeDirectiveResolver<Result, Parent, ContextType = any, Args = CascadeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CustomDirectiveArgs = {
  dql?: Maybe<Scalars['String']>;
  http?: Maybe<CustomHttp>;
};

export type CustomDirectiveResolver<Result, Parent, ContextType = any, Args = CustomDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DgraphDirectiveArgs = {
  pred?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type DgraphDirectiveResolver<Result, Parent, ContextType = any, Args = DgraphDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GenerateDirectiveArgs = {
  mutation?: Maybe<GenerateMutationParams>;
  query?: Maybe<GenerateQueryParams>;
  subscription?: Maybe<Scalars['Boolean']>;
};

export type GenerateDirectiveResolver<Result, Parent, ContextType = any, Args = GenerateDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HasInverseDirectiveArgs = {
  field: Scalars['String'];
};

export type HasInverseDirectiveResolver<Result, Parent, ContextType = any, Args = HasInverseDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LambdaDirectiveArgs = { };

export type LambdaDirectiveResolver<Result, Parent, ContextType = any, Args = LambdaDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LambdaOnMutateDirectiveArgs = {
  add?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type LambdaOnMutateDirectiveResolver<Result, Parent, ContextType = any, Args = LambdaOnMutateDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RemoteDirectiveArgs = { };

export type RemoteDirectiveResolver<Result, Parent, ContextType = any, Args = RemoteDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RemoteResponseDirectiveArgs = {
  name?: Maybe<Scalars['String']>;
};

export type RemoteResponseDirectiveResolver<Result, Parent, ContextType = any, Args = RemoteResponseDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SearchDirectiveArgs = {
  by?: Maybe<Array<DgraphIndex>>;
};

export type SearchDirectiveResolver<Result, Parent, ContextType = any, Args = SearchDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SecretDirectiveArgs = {
  field: Scalars['String'];
  pred?: Maybe<Scalars['String']>;
};

export type SecretDirectiveResolver<Result, Parent, ContextType = any, Args = SecretDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type WithSubscriptionDirectiveArgs = { };

export type WithSubscriptionDirectiveResolver<Result, Parent, ContextType = any, Args = WithSubscriptionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddMtgCardPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddMtgCardPayload'] = ResolversParentTypes['AddMtgCardPayload']> = {
  mtgCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['MtgCard']>>>, ParentType, ContextType, Partial<AddMtgCardPayloadMtgCardArgs>>;
  numUids?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddSynergyPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddSynergyPayload'] = ResolversParentTypes['AddSynergyPayload']> = {
  numUids?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  synergy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Synergy']>>>, ParentType, ContextType, Partial<AddSynergyPayloadSynergyArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteMtgCardPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteMtgCardPayload'] = ResolversParentTypes['DeleteMtgCardPayload']> = {
  msg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mtgCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['MtgCard']>>>, ParentType, ContextType, Partial<DeleteMtgCardPayloadMtgCardArgs>>;
  numUids?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteSynergyPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteSynergyPayload'] = ResolversParentTypes['DeleteSynergyPayload']> = {
  msg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numUids?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  synergy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Synergy']>>>, ParentType, ContextType, Partial<DeleteSynergyPayloadSynergyArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Int64ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int64'], any> {
  name: 'Int64';
}

export type MtgCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['MtgCard'] = ResolversParentTypes['MtgCard']> = {
  collectorNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colors?: Resolver<Array<Maybe<ResolversTypes['Color']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrlEn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrlJa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameEn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameJa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rarity?: Resolver<ResolversTypes['Rarity'], ParentType, ContextType>;
  setcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MtgCardAggregateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MtgCardAggregateResult'] = ResolversParentTypes['MtgCardAggregateResult']> = {
  collectorNumberMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectorNumberMin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imageUrlEnMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrlEnMin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrlJaMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrlJaMin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameEnMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameEnMin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameJaMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameJaMin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  setcodeMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  setcodeMin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiPolygonResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultiPolygon'] = ResolversParentTypes['MultiPolygon']> = {
  polygons?: Resolver<Array<ResolversTypes['Polygon']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addMtgCard?: Resolver<Maybe<ResolversTypes['AddMtgCardPayload']>, ParentType, ContextType, RequireFields<MutationAddMtgCardArgs, 'input'>>;
  addSynergy?: Resolver<Maybe<ResolversTypes['AddSynergyPayload']>, ParentType, ContextType, RequireFields<MutationAddSynergyArgs, 'input'>>;
  deleteMtgCard?: Resolver<Maybe<ResolversTypes['DeleteMtgCardPayload']>, ParentType, ContextType, RequireFields<MutationDeleteMtgCardArgs, 'filter'>>;
  deleteSynergy?: Resolver<Maybe<ResolversTypes['DeleteSynergyPayload']>, ParentType, ContextType, RequireFields<MutationDeleteSynergyArgs, 'filter'>>;
  updateMtgCard?: Resolver<Maybe<ResolversTypes['UpdateMtgCardPayload']>, ParentType, ContextType, RequireFields<MutationUpdateMtgCardArgs, 'input'>>;
  updateSynergy?: Resolver<Maybe<ResolversTypes['UpdateSynergyPayload']>, ParentType, ContextType, RequireFields<MutationUpdateSynergyArgs, 'input'>>;
};

export type PointResolvers<ContextType = any, ParentType extends ResolversParentTypes['Point'] = ResolversParentTypes['Point']> = {
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PointListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PointList'] = ResolversParentTypes['PointList']> = {
  points?: Resolver<Array<ResolversTypes['Point']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PolygonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Polygon'] = ResolversParentTypes['Polygon']> = {
  coordinates?: Resolver<Array<ResolversTypes['PointList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  aggregateMtgCard?: Resolver<Maybe<ResolversTypes['MtgCardAggregateResult']>, ParentType, ContextType, Partial<QueryAggregateMtgCardArgs>>;
  aggregateSynergy?: Resolver<Maybe<ResolversTypes['SynergyAggregateResult']>, ParentType, ContextType, Partial<QueryAggregateSynergyArgs>>;
  getMtgCard?: Resolver<Maybe<ResolversTypes['MtgCard']>, ParentType, ContextType, RequireFields<QueryGetMtgCardArgs, 'id'>>;
  getSynergy?: Resolver<Maybe<ResolversTypes['Synergy']>, ParentType, ContextType, RequireFields<QueryGetSynergyArgs, 'id'>>;
  queryMtgCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['MtgCard']>>>, ParentType, ContextType, Partial<QueryQueryMtgCardArgs>>;
  querySynergy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Synergy']>>>, ParentType, ContextType, Partial<QueryQuerySynergyArgs>>;
};

export type SynergyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Synergy'] = ResolversParentTypes['Synergy']> = {
  cards?: Resolver<Array<ResolversTypes['MtgCard']>, ParentType, ContextType, Partial<SynergyCardsArgs>>;
  cardsAggregate?: Resolver<Maybe<ResolversTypes['MtgCardAggregateResult']>, ParentType, ContextType, Partial<SynergyCardsAggregateArgs>>;
  explanationEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  explanationJa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SynergyAggregateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SynergyAggregateResult'] = ResolversParentTypes['SynergyAggregateResult']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  explanationEnMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  explanationEnMin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  explanationJaMax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  explanationJaMin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weightAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weightMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weightMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weightSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMtgCardPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateMtgCardPayload'] = ResolversParentTypes['UpdateMtgCardPayload']> = {
  mtgCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['MtgCard']>>>, ParentType, ContextType, Partial<UpdateMtgCardPayloadMtgCardArgs>>;
  numUids?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSynergyPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateSynergyPayload'] = ResolversParentTypes['UpdateSynergyPayload']> = {
  numUids?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  synergy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Synergy']>>>, ParentType, ContextType, Partial<UpdateSynergyPayloadSynergyArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddMtgCardPayload?: AddMtgCardPayloadResolvers<ContextType>;
  AddSynergyPayload?: AddSynergyPayloadResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteMtgCardPayload?: DeleteMtgCardPayloadResolvers<ContextType>;
  DeleteSynergyPayload?: DeleteSynergyPayloadResolvers<ContextType>;
  Int64?: GraphQLScalarType;
  MtgCard?: MtgCardResolvers<ContextType>;
  MtgCardAggregateResult?: MtgCardAggregateResultResolvers<ContextType>;
  MultiPolygon?: MultiPolygonResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Point?: PointResolvers<ContextType>;
  PointList?: PointListResolvers<ContextType>;
  Polygon?: PolygonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Synergy?: SynergyResolvers<ContextType>;
  SynergyAggregateResult?: SynergyAggregateResultResolvers<ContextType>;
  UpdateMtgCardPayload?: UpdateMtgCardPayloadResolvers<ContextType>;
  UpdateSynergyPayload?: UpdateSynergyPayloadResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
  cascade?: CascadeDirectiveResolver<any, any, ContextType>;
  custom?: CustomDirectiveResolver<any, any, ContextType>;
  dgraph?: DgraphDirectiveResolver<any, any, ContextType>;
  generate?: GenerateDirectiveResolver<any, any, ContextType>;
  hasInverse?: HasInverseDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  lambda?: LambdaDirectiveResolver<any, any, ContextType>;
  lambdaOnMutate?: LambdaOnMutateDirectiveResolver<any, any, ContextType>;
  remote?: RemoteDirectiveResolver<any, any, ContextType>;
  remoteResponse?: RemoteResponseDirectiveResolver<any, any, ContextType>;
  search?: SearchDirectiveResolver<any, any, ContextType>;
  secret?: SecretDirectiveResolver<any, any, ContextType>;
  withSubscription?: WithSubscriptionDirectiveResolver<any, any, ContextType>;
};
