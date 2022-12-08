import { Gegenstand } from "./gegenstand";

export class aktie extends Gegenstand{

  constructor(id: number, wert: number, public unternehmen: string, public nennwert: number) {
    super(id,wert);
  }
  toString(): string {
    let text: string = super.toString();
   text += "\nunternehemen" + this.unternehmen;
    text += "\nnennwert: " + this.nennwert;
    return text;
  }
}