let Presenter = require('./presenter');
let hasImages = require('./hasImages');
const PRESENTER = 'presenter';

exports.BasePresenter = Presenter;

exports.hasImages = hasImages;

exports.mixin = superclass => class extends superclass {

    /**
     * Boot another possible mixins.
     *
     * @return void
     */
    boot()
    {
        if (super.boot) super.boot();
    }

    /**
     * Serialize presenter.
     *
     * @return {Presenter|null}
     */
    present()
    {
        let presenter = this[PRESENTER];

        if(! presenter)
        {
            console.log(`Unable to init Presenter for ${this.model.constructor.name} model.`);

            return null;
        }

        return new presenter(this);
    }
};