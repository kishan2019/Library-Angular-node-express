import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatExpansionModule,
        MatButtonToggleModule
        
    ],

    exports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatExpansionModule,
        MatButtonToggleModule
        
    ]
})

export class MaterialModules { }