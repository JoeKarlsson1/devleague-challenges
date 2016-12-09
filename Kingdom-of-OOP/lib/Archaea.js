import LivingThing from './LivingThing';

export default class Archaea extends LivingThing{

  constructor (name) {
    super(name);
    this._uniCellular = true;
    this._trueNucleus = false;
    this._anaerobic = true;
    this._asexual = true;
    this._mobile = false;
  }
}