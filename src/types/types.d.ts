export interface StatModifiers {
  STR: number;
  STA: number;
  DEX: number;
  WIS: number;
  INT: number;
  CHA: number;
}

export interface Race {
  name: string;
  size: 'sm' | 'md' | 'lg';
  statModifiers: StatModifiers;
}

export interface Ability {
  [level: number]: string;
}

export interface Class {
  name: string;
  specialClasses: string[];
  abilities: Ability;
  statModifiers: StatModifiers;
}
