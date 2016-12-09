import Eukaryota from './Eukaryota';

export default class Protista extends Eukaryota{

  constructor (name, uniCellular, mobile, heterotroph) {
    super(name, uniCellular, mobile, heterotroph);
    this._asexual = true;
    this._uniCellular = uniCellular;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
  }
}