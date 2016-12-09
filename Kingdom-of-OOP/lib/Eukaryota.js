import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing{
//ame, uniCellular, trueNucleus, anaerobic, asexual, mobile
  constructor (name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph () {
    return this._heterotroph;
  }

  set heterotroph ( heterotroph ) {
    this._heterotroph = heterotroph;
  }

  get autotroph () {
    return !this._heterotroph;
  }

  set autotroph ( autotroph ) {
    this._heterotroph = !autotroph;
  }
}