import Eukaryota from './Eukaryota';

export default class Plant extends Eukaryota{

  constructor (name) {
    super(name, false, true, false, false);
  }
}