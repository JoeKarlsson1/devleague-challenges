import Eukaryota from './Eukaryota';

export default class Fungi extends Eukaryota{

  constructor (name) {
    super(name, false, true, false, true);
  }
}