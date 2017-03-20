# Presenter, present the data of object. Meet with [decorator presenter pattern](https://en.wikipedia.org/wiki/Decorator_pattern)

[![Build Status](https://scrutinizer-ci.com/g/npmatichs/presenter/badges/build.png?b=master)](https://scrutinizer-ci.com/g/npmatichs/presenter/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/npmatichs/presenter/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/npmatichs/presenter/?branch=master)

# API docs will be soon ..

# Install

SSH: 
``` 
npm install git+ssh://git@10.1.1.159:npm-packages/presenter.git --save
```

HTTP:

```
npm install git+http://git.devebs.net/npm-packages/presenter.git --save
```

# Hot to use:

The ```object``` must be a class !!! and the presenter ```MUST``` extends base presenter

Example:

```
let Presenter = require('presenter').BasePresenter;

class SecretPresenter extends Presenter {
	
	/**
	 * SecretPresenter constructor
	 * 
	 * @param {Object} model Require to be passed and sendent to parent constructor.
	 * @return {SecretPresenter}
	 */
	constructor(model)
	{
		super(model);
	}

	/**
	 * Print the presenter's welcome.
	 * 
	 * @return {string}
	 */
	testPresenter()
	{
		// access mdoel attributes from this.model

		return 'Hello from presenter !!!';
	}
}
```
2. Create a class instance which will ```extends``` the presenter mixin like in example below:

```
// the object instance must be extends from some class, if it doesn't so extends from an empty class.
// It need for adding mixin to a class. 
let AbstractClass = class AbstractClass {};
let HasPresenter = require('presenter').mixin;

class Secret extends HasPresenter(AbstractClass) 
{	
	/**
	 * Secret constructor
	 * 
	 * @return {Secret}
	 */
	constructor()
	{
		this.presenter = SecretPresenter;
	}
}

```

3. How it to use :


```
// For example if the Secret an a model, make the db request whitch will get the first row from db.

let Secret = (new Secret()).first();

// now we can render some text from presenter with accessing the "present()" method.

secret.present().testPresenter();

// it will print
// Hello from presenter !!!

```

# In conclusion:

Why I need it?

Sometimes you need to perform some data from object, and actualy we make it in views or controller, and this can be repeat in many places. For example I need a render user's name, I want to concatinate the user's firstname with the user's lastname like this ```secret.firstname + ' ' + secret.lastname```, so with presenter I make it only one time, and in the future it can be accessed from the presenter.