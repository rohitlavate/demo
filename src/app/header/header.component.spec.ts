import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";

describe('header component testing', () => {
    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
    });

    it('should test component instance', () => {
        expect(component).toBeTruthy();
    });

    it('should test template', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toEqual('Documents');
        expect(compiled.querySelector('h4').textContent).toEqual('Search document or select category');
    });
});