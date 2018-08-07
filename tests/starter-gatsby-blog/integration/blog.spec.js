context('Blog', () => {
  beforeEach(() => {
    cy.visit('/blog/')
  })
  it('renders hero', () => {
    const hero = cy
      .get('div[class*=src-pages----blog-module---hero]')
      .should('have.text', 'Blog')
  })
  it('renders recent articles', () => {
    cy.get('.wrapper h2.section-headline').should(
      'have.text',
      'Recent articles'
    )
    cy.get('.wrapper .article-list li').should($lis => {
      // 3 articles
      expect($lis).to.have.length(3)

      // Linked to their detail pages
      expect($lis.find('h3 a[href^="/blog/"]')).to.have.length(3)

      // Ordered by date
      const titles = $lis.map((i, el) => {
        return Cypress.$(el)
          .find('h3')
          .text()
      })

      expect(titles.get()).to.deep.eq([
        'Static sites are great',
        'Hello world',
        'Automate with webhooks'
      ])
    })
  })
})
