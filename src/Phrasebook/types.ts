export type ConditionType = { provide?: boolean; require?: boolean };
export type Conditions = Record<string, Record<string, ConditionType>>;
export type Text = {
  plain: string;
  ipa?: string;
  gloss?: string;
  entity?: string;
};
export type Transition = undefined | "next" | number[];
export type State = {
  conditions: Conditions;
  transition: Transition;
  texts: Text[];
};
export type VBlock = {
  state?: State;
  text: string;
};

export type ContextSource = {
  entity: string;
  tags: string[];
};
export type Context = Record<string, Set<string>>;
export type ContextTranslation = Record<string, Record<string, string>>;
export type CorpusPhrase = {
  id: string;
  name: string;
  context: ContextSource[];
  blocks: State[][];
};
export type CorpusSection = {
  id: string;
  name: string;
  phrases: CorpusPhrase[];
};

export type Phrase = {
  notes?: string[];
  context?: ContextTranslation;
  blocks: State[][];
};
export type Phrasebook = Record<string, Phrase>;
