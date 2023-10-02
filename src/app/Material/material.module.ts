import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import {MatIconModule } from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    declarations: [],
    imports: [],
    exports: [
        MatTableModule,
        MatIconModule,
        MatDialogModule,
        MatSnackBarModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule
    ]
})

export class MaterialModule {}