import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CardComponent } from "./card.component";

describe('card component testing', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardComponent]   
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(CardComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should test card component template bindings', () => {
        component.cardDetails = {
            'catColor': '#ebf0e4',
            'category': 'Financial',
            'title': 'Customer Onboarding'
        };
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.category').textContent).toEqual('Financial');
     // rgb(235, 240, 228) = #ebf0e4
        expect(compiled.querySelector('.category').style.backgroundColor).toEqual('rgb(235, 240, 228)');
        expect(compiled.querySelector('.card-title').textContent).toEqual('Customer Onboarding');

    });
});
