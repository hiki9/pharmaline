import { Component } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    
    items!: MegaMenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Médicaments', icon: 'pi pi-fw pi-thumbs-up',
                items: [
                    [
                        {
                            label: 'Ajouter un  médicament',
                            items: [{label: 'Ajouter un médicament',routerLink :'add-Medicaments'}]
                        },
                        {
                            label: 'Consultation liste des médicament',
                            items: [{label: 'La liste complète',routerLink :'medicaments'}]
                        },
                    ],
                   
                ]
            },
            {
                label: 'pharmacie', icon: 'pi pi-fw pi-users',
                items: [
                    [
                        {
                            label: 'Ajouter une  pharmacie',
                            items: [{label: 'Ajouter une pharmacie ',routerLink :'add-pharmacie'}]
                        },
                        {
                            label: 'médicaments disponibles',
                            items: [{label: 'liste des médicaments', routerLink :'pharmacie'}]
                        }
                        
                        
                    ],
                    
                    [
                       
                    ]
                ]
            },
            {
                label: 'pharmaciens', icon: 'pi pi-fw pi-calendar',
                items: [
                    [
                        {
                            label: 'Ajouter une  pharmacien',
                            items: [{label: 'Ajouter un pharmacien ',routerLink :'add-pharmacien'}]
                        },
                        {
                            label: 'nom',
                            items: [{label: 'Liste des pharmaciens',routerLink :'pharmaciens'}]
                        },
                       
                    ],
                   
                ]
            },
            {
                label: 'catégories', icon: 'pi pi-fw pi-calendar',
                items: [
                    [
                        {
                            label: 'ajout',
                            items: [{label: 'ajouter  des  catégories',routerLink :'add-category'}]
                        },
                        {
                            label: 'liste des catégories',
                            items: [{label: 'lister  des  catégories',routerLink :'categories'}]
                        },
                    ],
                    
                ]
            },
            
        ]
    }
}
