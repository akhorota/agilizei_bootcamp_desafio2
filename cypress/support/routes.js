class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTile: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments'

    }

    init(){
        cy.server();
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTile);
        cy.route('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesTitleComments);
    }


}

export default new Routes();