import { CardFilter } from "./cardFilter.pipe"

describe('CardFilter pipe testing', () => {
    const sampleCards = [{'title':'Terminal Instructables', 'category': 'Technical', 'catColor': '#f2e6f2'},
    {'title':'Installation Guides', 'category': 'Technical', 'catColor': '#f2e6f2'},
    {'title':'Career Opportunities', 'category': 'Human Resource', 'catColor': '#bff2e6'},
    {'title':'Customer Onboarding', 'category': 'Financial', 'catColor': '#ebf0e4'}]

    it('should create an instance of pipe', () => {
        const cf = new CardFilter();
        expect(cf).toBeTruthy();
    });

    it('should display filtered cards', () => {
        const cf = new CardFilter();
        const result = cf.transform(sampleCards, 'terminal');
        expect(result).toEqual([{'title':'Terminal Instructables', 'category': 'Technical', 'catColor': '#f2e6f2'}]);
    });
})