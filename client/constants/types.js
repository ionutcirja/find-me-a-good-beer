export type Action = {
  +type: string,
  +meta?: {},
  +payload?: {},
};

export type Dispatch = (action: Action) => any;

export type BeerList = Array<{}>;

export type State = {
  +beerList: BeerList,
};
