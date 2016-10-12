import { Component } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import {FriendsService} from "./friends.service";
import {Friends} from "./friends";
@Component({
   selector: 'my-app',
   template: `
	<ag-grid-ng2 style="width: 20%; margin-left: 10%" #agGrid class="ag-material"
                  rowHeight="50" [gridOptions]="myGridOptions">
    	</ag-grid-ng2>
	`
})
export class AppComponent {
   private myGridOptions: GridOptions = <GridOptions>{};

   constructor(private appService: FriendsService){}

   ngOnInit() {
      let data = this.appService.getDate();
      this.myGridOptions.rowData = data;
      this.myGridOptions.columnDefs = this.createColumnDefs(data[0]);
   }

   private createColumnDefs(friends: Friends) {
      let keyNames = Object.keys(friends);
      let headers = [];
      keyNames.map(key => {
         headers.push({
            headerName: key.toUpperCase(),
            field: key,
            width: 100
         })
      });

      return headers;
   }

  /* private createRowData() {
      return [
         {name: "Geller", age: 30, gender: "Male"},
         {name: "Geller", age: 28, gender: "Female"},
         {name: "Tribbiani", age: 29, gender: "Male"},
         {name: "Bing", age: 30, gender: "Male"},
         {name: "Green", age: 28, gender: "Female"},
         {name: "Buffay", age: 29, gender: "Female"},
      ];
   }*/

}

