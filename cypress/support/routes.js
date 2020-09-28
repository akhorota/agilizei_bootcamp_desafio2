class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTile: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',
        postUser: 'POSTUser',
        postUserLogin: 'POSTUserLogin',
        getTags: 'GETTags',
        getFeed: 'GETFeed'

    }

    init(){
        cy.server();
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/**').as(this.as.getArticlesTile);
        cy.route('GET', '**/api/articles/**/comments').as(this.as.getArticlesTitleComments);
        cy.route('POST', '**/api/users').as(this.as.postUser);
        cy.route('POST', '**/api/users/login').as(this.as.postUserLogin);
        cy.route('GET', '**/api/tags').as(this.as.getTags);
        cy.route('GET', '**/api/articles/feed**').as(this.as.getFeed);

    }


}

export default new Routes();