export default class BaseController {

    constructor(model) {
        this._model = model;
    }

    create = (req, res) => {
        new this._model(req.body)
            .save()
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json(err));
    };

    read = (req, res) => {
        this._model
            .find(req.params)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(404).json(err));
    };

    readById = (req, res) => {
        this._model
            .findById(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(404).json(err));
    };

    update = (req, res) => {
        this._model
            .findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(result => res.status(200).json(result))
            .catch(err => res.status(404).json(err));
    };

    delete = (req, res) => {
        this._model
            .findByIdAndRemove(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(404).json(err));
    };

}
