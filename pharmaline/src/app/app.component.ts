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
                label: 'Médicaments', icon: 'pi pi-fw pi-video',
                items: [
                    [
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
                            label: 'adresse',
                            items: [{label: 'Liste des pharmacies', routerLink :'pharmacie'}]
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
                            items: [{label: 'ajouter  des  catégories',routerLink :'addcategory'}]
                        },
                       
                    ],
                    
                ]
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
                items: [
                    [
                        {
                            label: 'Setting 1',
                            items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                        },
                        {
                            label: 'Setting 2',
                            items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                        },
                        {
                            label: 'Setting 3',
                            items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                        }
                    ],
                    [
                        
                    ]
                ]
            }
        ]
    }
}
8