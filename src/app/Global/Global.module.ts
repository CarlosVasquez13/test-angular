import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        //modules

    ],
    declarations: [
        //declarations
        HeaderComponent,
        

    HeaderComponent],
    exports: [
        HeaderComponent,
    ],
    entryComponents: [],
    providers: []

})

export class GlobalModule {}