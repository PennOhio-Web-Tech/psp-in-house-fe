/// <reference types="cypress"/>

const visitHomePage = (subdomain: string) => cy.visit(`http://${subdomain}.localhost:3000/`)
const getPageTitle = () => cy.get('h1')
const getDashboardLink = () => cy.get('[data-testid=app-navigation-dashboard]')
const waitForRoute = (path: string) =>
	cy.location('pathname', { timeout: 20000 }).should('include', path)

context('Home Page', () => {
	const tenant = { id: '1', name: 'Tenant A', subdomain: 'tenant-a' }

	beforeEach(() => {
		visitHomePage(tenant.subdomain)
	})

	it('should render home page with correct tenant information', () => {
		getPageTitle().contains(`Hello ${tenant.name}`)
	})

	it('should navigate to dashboard', () => {
		getDashboardLink().click()
		waitForRoute('/dashboard')
		getPageTitle().contains(`${tenant.name} - Dashboard`)
	})
})

// to convert to isolated module
export {}
