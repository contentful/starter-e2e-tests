context('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('renders hero image', () => {
    const hero = cy.get('div[class*=src-components----hero-module]')
    const heroImage = hero.get('div[class*=hero-module---heroImage]')
    heroImage.find('img').should('have.length', 2)
  })
  it('renders hero content', () => {
    const hero = cy.get('div[class*=src-components----hero-module]')
    const heroDetails = hero.get('div[class*=hero-module---heroDetails]')
    heroDetails
      .get('h3[class*=hero-module---heroHeadline]')
      .should('have.text', 'John Doe')
    heroDetails
      .get('p[class*=hero-module---heroTitle]')
      .should('have.text', 'Web Developer')
    heroDetails
      .get('p:last-child')
      .should(
        'have.text',
        'Hipster web developer, at the intersection between beautiful code and overinflated narcissism.'
      )
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
