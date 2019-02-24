var path = require('path');

describe('add contact app contact list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		// element(by.model('contact.name')).sendKeys('Glick');
		// element(by.model('contact.phone')).sendKeys('0208 666 1313');
		element(by.css('[class="button"]')).click();

		let contactList = element.all(by.repeater('contact in vm.contacts'));
		expect(contactList.count()).toEqual(4);
		expect(contactList.get(1).element(by.model('contact.name')).getAttribute('value')).toEqual('Tim');
		expect(contactList.get(1).element(by.model('contact.phone')).getAttribute('value')).toEqual('3934203242');

	});
});
