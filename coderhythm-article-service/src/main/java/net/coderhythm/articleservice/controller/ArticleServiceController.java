package net.coderhythm.articleservice.controller;

import net.coderhythm.articleservice.dao.ArticleDao;
import net.coderhythm.articleservice.model.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by mdoucette on 11/18/15.
 */
@RestController
public class ArticleServiceController {

    @Autowired
    private ArticleDao articleDao;

    @CrossOrigin(origins = "http://localhost:8000")
    @RequestMapping("/api/articles")
    public @ResponseBody List<Article> articles() {
        return articleDao.findAll();
    }
}
