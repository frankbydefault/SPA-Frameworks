'use strict'

const validator = require('validator');
const Article = require('../models/article');

const controller = {

    datosCurso: (req, res) => {
        return res.status(200).send({
            nombre: 'pedro',
            curso: 'Angular',
            url: 'pedro.cl'
        });
    },

    //------------------------------------

    test: (req, res) => {
        return res.status(200).send({
            message: 'Test action from article-controller'
        });
    },

    //------------------------------------

    save: (req, res) => {

        //get post parameters
        let params = req.body;

        //Validate data
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar.'
            });
        }

        if (validate_title && validate_content) {
            //Create object to save
            let article = new Article();

            //Assign values
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Save Object
            article.save((err, ArticleStored) => {
                if (err || !ArticleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado'
                    });
                }

                //Return response
                return res.status(200).send({
                    status: 'success',
                    message: ArticleStored
                });
            });

        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos.'
            });
        }

    },

    //------------------------------------

    getArticles: (req, res) => {

        let last = req.params.last;
        let query = Article.find({});

        if (last || last != undefined) {
            query.limit(5);
        }

        //find all and sort newer to oldest
        query.sort('-_id').exec((err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }

            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        });
    },

    //------------------------------------

    getArticle: (req, res) => {

        //get id from url
        let articleId = req.params.id;

        //exists
        if (!articleId || articleId == null || articleId == undefined) {
            return res.status(404).send({
                status: 'error',
                message: 'El articulo no existe.'
            });
        }

        //search article
        Article.findById(articleId, (err, article) => {

            if (err || !article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo'
                });
            }

            //return article
            return res.status(200).send({
                status: 'success',
                article
            });
        });
    },

    //------------------------------------

    update: (req, res) => {

        //get id from url
        let articleId = req.params.id;

        //get data from put
        let params = req.body;

        //Validate data
        try {

            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {

            //find and update
            Article.findByIdAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {

                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    });
                }

                if (!articleUpdated) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No esxiste el articulo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });

        } else {
            return res.status(500).send({
                status: 'error',
                message: 'La validacion no es correcta'
            });
        }
    },

    //------------------------------------

    delete: (req, res) => {

        //get id from url
        let articleId = req.params.id;

        //find and delete
        Article.findOneAndDelete({_id : articleId}, (err, articleRemoved) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se pudo borrar el articulo, posiblemente no existe'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
            
        });
    },
};

module.exports = controller;
