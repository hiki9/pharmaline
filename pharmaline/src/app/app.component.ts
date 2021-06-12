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
                        {
                            label: 'les catégories de médicament',
                            items: [{label: 'catégorie'}, ]
                        }
                    ],
                   
                ]
            },
            {
                label: 'pharmacie', icon: 'pi pi-fw pi-users',
                items: [
                    [
                        {
                            label: 'adresse',
                            items: [{label: 'adresse 1.1', routerLink :'pharmacie'}]
                        },
                        
                    ],
                    [
                        {
                            label: 'code',
                            items: [{label: 'code de la pharmacie'}]
                        },
                       
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
                            items: [{label: 'nom du pharmacien',routerLink :'pharmaciens'}]
                        },
                        {
                            label: 'prénom',
                            items: [{label: 'prénom du pharmacien'}]
                        },
                        {
                            label: 'code',
                            items: [{label: 'code du pharmacien'}]
                        }
                    ],
                    [
                       
                    ]
                ]
            },
            {
                label: 'catégories', icon: 'pi pi-fw pi-calendar',
                items: [
                    [
                        {
                            label: 'nom',
                            items: [{label: 'nom de la catégorie',routerLink :'categories'}]
                        },
                       
                        {
                            label: 'code',
                            items: [{label: 'code de la catégorie'}]
                        }
                    ],
                    [
                       
                    ]
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