package net.coderhythm.articleservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by mdoucette on 11/18/15.
 */
@Entity
public class Article {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String content;

    public Article() {
        super();
    }

    public Article(String title, String content) {
        this();
        this.title = title;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
