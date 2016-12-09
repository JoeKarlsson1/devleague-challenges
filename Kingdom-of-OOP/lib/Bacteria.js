import LivingThing from './LivingThing';

export default class Bacteria extends LivingThing{

  constructor (name) {
    super(name);
    this._uniCellular = true;
    this._trueNucleus = false;
    this._anaerobic = false;
    this._asexual = true;
    this._mobile = false;
  }
}