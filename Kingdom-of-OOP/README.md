# Kingdom of OOP

ES6 OOP Exercise

## Goal

Setup all required classes and subclasses of the animal kingdom.  
Make tests pass.

## Setup project

### Install Dependencies

```bash
npm install
```

### Run tests

```bash
gulp
```

## Classes and Subclasses

all class files will be saved to the `lib/` subdirectory.  
each class file will be named after it's class name, for example the `Protista` class will be saved in `lib/Protista.js`  
each class file will define only one class, and export it as `default`  

### LivingThing

#### constructor

defined with the following parameters
- name
- uniCellular
- trueNucleus
- anaerobic
- asexual
- mobile

declares and assigns the following private properties

- _name = name
- _uniCellular = uniCellular
- _trueNucleus = trueNucleus
- _anaerobic = anaerobic
- _asexual = asexual
- _mobile = mobile

#### methods

- should have a method named `name` that returns the value of the private property `_name`
- should have a method named `name` that sets the value of the private property `_name`
- should have a method named `uniCellular` that returns a boolean value based on the private property `_uniCellular`
- should have a method named `uniCellular` that sets the value of the private property `_uniCellular`
- should have a method named `multiCellular` that returns a boolean value based on the private property `_uniCellular`
- should have a method named `multiCellular` that sets the value of the private property `_uniCellular`
- should have a method named `eukaryote` that returns a boolean value based on the private property `_trueNucleus`
- should have a method named `eukaryote` that sets the value of the private property `_trueNucleus`
- should have a method named `prokaryote` that returns a boolean value based on the private property `_trueNucleus`
- should have a method named `prokaryote` that sets the value of the private property `_trueNucleus`
- should have a method named `anaerobic` that returns a boolean value based on the private property `_anaerobic`
- should have a method named `anaerobic` that sets the value of the private property `_anaerobic`
- should have a method named `aerobic` that returns a boolean value based on the private property `_anaerobic`
- should have a method named `aerobic` that sets the value of the private property `_anaerobic`
- should have a method named `asexual` that returns a boolean value based on the private property `_asexual`
- should have a method named `asexual` that sets the value of the private property `_asexual`
- should have a method named `sexual` that returns a boolean value based on the private property `_asexual`
- should have a method named `sexual` that sets the value of the private property `_asexual`
- should have a method named `mobile` that returns a boolean value based on the private `_mobile`
- should have a method named `mobile` that sets the value of the private `_mobile`
- should have a method named `immobile` that returns a boolean value based on the private `
- should have a method named `immobile` that sets the value of the private `_mobile`

---

### Archaea

is a subclass of `LivingThing`

#### constructor

defined with the following parameters
- name

invokes the super constructor with all required arguments using the following hard coded values

- uniCellular = true
- trueNucleus = false
- anaerobic = true
- asexual = true
- mobile = false

---

### Bacteria

is a subclass of `LivingThing`

#### constructor

defined with the following parameters
- name

invokes the super constructor with all required arguments using the following hard coded values

- uniCellular = true
- trueNucleus = false
- anaerobic = false
- asexual = true
- mobile = false

---

### Eukaryota

is a subclass of `LivingThing`

#### constructor

defined with the following parameters
- name
- uniCellular
- asexual
- mobile
- heterotroph

invokes the super constructor with all required arguments using the following hard coded values

- trueNucleus = true
- anaerobic = false

declares and assigns the following private properties

- _heterotroph = heterotroph

#### methods

- should have a method named `heterotroph` that returns a boolean value based on the private property `_heterotroph`
- should have a method named `heterotroph` that sets the value of the private property `_heterotroph`
- should have a method named `autotroph` that returns a boolean value based on the private property `_heterotroph`
- should have a method named `autotroph` that sets the value of the private property `_heterotroph`

---

### Fungi

is a subclass of `Eukaryota`

#### constructor

defined with the following parameters
- name

invokes the super constructor with all required arguments using the following hard coded values

- uniCellular = false
- asexual = true
- mobile = false
- heterotroph = true

---

### Protista

is a subclass of `Eukaryota`

#### constructor

defined with the following parameters
- name
- uniCellular
- mobile
- heterotroph

invokes the super constructor with all required arguments using the following hard coded values

- asexual = true

---

### Plant

is a subclass of `Eukaryota`

#### constructor

defined with the following parameters
- name

invokes the super constructor with all required arguments using the following hard coded values

- uniCellular = false
- asexual = true
- mobile = false
- heterotroph = false

---

### Animal

is a subclass of `Eukaryota`

#### constructor

defined with the following parameters
- name
- symmetry

invokes the super constructor with all required arguments using the following hard coded values

- uniCellular = false
- asexual = false
- mobile = true
- heterotroph = true

declares and assigns the following private properties

- _symmetry = symmetry

#### methods

- should have a method named `symmetry` that returns a string value based on the private property `_symmetry`
- should have a method named `symmetry` that sets the value of the private property `_symmetry`

---

### Cnidarian

is a subclass of `Animal`

#### constructor

defined with the following parameters
- name

invokes the super constructor with all required arguments using the following hard coded values

- symmetry = 'radial'

---

### Bilateral

is a subclass of `Animal`

#### constructor

defined with the following parameters
- name
- body

invokes the super constructor with all required arguments using the following hard coded values

- symmetry = 'bilateral'

declares and assigns the following private properties

- _body = body

#### methods

- should have a method named `body` that returns a string value based on the private property `_body`
- should have a method named `body` that sets the value of the private property `_body`

---

### Mollusk

is a subclass of `Bilateral`

#### constructor

defined with the following parameters
- name

invokes the super constructor with all required arguments using the following hard coded values

- body = 'soft-bodied'

---

### Anthropod

is a subclass of `Bilateral`

#### constructor

defined with the following parameters
- name

invokes the super constructor with all required arguments using the following hard coded values

- body = 'exoskeleton'

---

### Vertebrate

is a subclass of `Bilateral`

#### constructor

defined with the following parameters
- name

invokes the super constructor with all required arguments using the following hard coded values

- body = 'vertebral-column'

## When all tests pass

Play with instantiating objects in `./example/index.js`  
there is one example of each class already written

```bash
gulp run
```
