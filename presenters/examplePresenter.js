let Presenter = require('presenter').BasePresenter;

class ExamplePresenter extends Presenter {

    /**
     * ExamplePresenter constructor.
     *
     * @param model
     * @return ExamplePresenter
     */
    constructor(model)
    {
        super(model);
    }

    /**
     * Render name.
     *
     * @return string
     */
    renderName()
    {
        return this.helper().uc_first(this.model.name);
    }
}

module.exports = ExamplePresenter;