import React from "react";
import "./App.css";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
let personName: unknown;

let printName: Function;
let printName2: (name: string) => void;
let printName3: (name: string) => Person;
let printName4: (name: string) => never;

type Person = {
  name: string;
  age?: number;
};

type Person3 = Person & {
  name2: string;
  age2?: number;
};

interface X {
  name: string;
  age?: number;
}

interface Y extends X {
  profession: string;
}

let person: Person = {
  name: "Mia",
};

let lotsOfPeople: Person[];

role = [5, "Software Developer"];
name = "Mia";
