'use strict';

describe('Material Page', () => {
    beforeEach(() => {
        browser.get('/material');
    });

    it('should have h3 header', () => {
        let subject = element(by.tagName('h3')).isPresent();
        expect(subject).toEqual(true);
    });

    it('should have h3 header with "Material Page" text', () => {
        let subject = element(by.tagName('h3'));
        expect(subject.getText()).toBe('Material Page');
    });
});
