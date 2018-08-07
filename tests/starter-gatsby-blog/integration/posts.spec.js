function rendersHeroImage() {
  it('renders hero image', () => {
    const hero = cy.get('div[class*=src-components----hero-module]')
    const heroImage = hero.get('div[class*=hero-module---heroImage]')
    heroImage.find('img').should('have.length', 2)
  })
}
function testPost(title, date, content) {
  cy.get('.wrapper h1.section-headline').should('have.text', title)
  cy.get('.wrapper > p').should('have.text', date)
  cy.get('.wrapper > div').contains(content)
}
context('Posts', () => {
  it('static sites are great', () => {
    cy.visit('/blog/static-sites-are-great')
    rendersHeroImage()
    testPost(
      'Static sites are great',
      'May 15th, 2017',
      'The case for the static site generator'
    )
  })
  it('hello world', () => {
    cy.visit('/blog/hello-world')
    rendersHeroImage()
    testPost(
      'Hello world',
      'May 14th, 2017',
      'These is your very first content with Contentful, pulled in JSON format using the Content Delivery API. Content and presentation are now decoupled, allowing you to focus your efforts in building the perfect app.'
    )
  })
  it('automate with webhooks', () => {
    cy.visit('/blog/automate-with-webhooks')
    rendersHeroImage()
    testPost(
      'Automate with webhooks',
      'May 11th, 2017',
      'How do I configure a webhook?'
    )
  })
})
