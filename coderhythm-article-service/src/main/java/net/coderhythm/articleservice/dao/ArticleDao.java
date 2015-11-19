package net.coderhythm.articleservice.dao;

import net.coderhythm.articleservice.model.Article;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by mdoucette on 11/18/15.
 */
public interface ArticleDao extends CrudRepository<Article, Long> {
    List<Article> findAll();
}
