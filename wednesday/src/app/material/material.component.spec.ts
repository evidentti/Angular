import { TestBed } from '@angular/core/testing';

import { MaterialComponent } from './material.component';

describe('MaterialComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [MaterialComponent] }));

    it('should instantiate the MaterialComponent', () => {
        let fixture = TestBed.createComponent(MaterialComponent);
        expect(fixture.componentInstance instanceof MaterialComponent).toBe(true, 'should create MaterialComponent');
    });
});
