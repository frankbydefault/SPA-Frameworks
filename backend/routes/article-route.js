'use strict'

const express = require('express');
const ArticleController = require('../controllers/article-controller');

const router = express.Router();
const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './upload/articles' })

//Test Routes
router.get('/controller-test', ArticleController.test);
router.post('/course-data', ArticleController.datosCurso);

//Article Routes
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles); // ? is optional data
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload-image/:id', md_upload, ArticleController.upload);
router.get('/search/:search', ArticleController.search);



module.exports = router;