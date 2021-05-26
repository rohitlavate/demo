import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cardFilter'
})
export class CardFilter implements PipeTransform {
    transform(cards: any[], filterText: string){
        if(filterText){
            filterText = filterText.replace(/^\s+|\s+$/gm,'');  
        }
        return cards ? cards.filter(item => item.title.search(new RegExp(filterText, 'i')) > -1) : [];
    }
}