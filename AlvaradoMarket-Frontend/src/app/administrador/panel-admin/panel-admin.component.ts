import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.sass'
})
export class PanelAdminComponent { }
