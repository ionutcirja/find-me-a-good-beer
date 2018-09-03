export type Action = {
  +type: string,
  +meta?: {},
  +payload?: {},
};

export type Dispatch = (action: Action) => any;

export type BeerList = Array<{
  +name: string,
  +description: string,
  +first_brewed: string,
}>;

export type State = {
  +beerList: BeerList,
};
