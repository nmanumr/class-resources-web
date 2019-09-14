import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProviderButtonComponent} from './provider-button.component';

describe('ProviderButtonComponent', () => {
    let component: ProviderButtonComponent;
    let fixture: ComponentFixture<ProviderButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProviderButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProviderButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
