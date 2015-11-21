package net.coderhythm.articleservice;

import net.coderhythm.articleservice.dao.ArticleDao;
import net.coderhythm.articleservice.model.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class ArticleServiceApplication {

    @Autowired
    private ArticleDao articleDao;

    public static void main(String[] args) {
        SpringApplication.run(ArticleServiceApplication.class, args);
    }

    @PostConstruct
    public void init() {
        Article article = new Article();
        article.setTitle("Xampp, set up vhosts in Mac OSX");
        article.setContent(
                "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
                        + "<h4>Hi from the Article Service!</h4><p><span class=\"italic\">This article won’t cover the setup and securing of a local installation of XAMPP in Mac OS X</span>"
        );

        articleDao.save(article);
    }


}
