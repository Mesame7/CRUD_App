import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PerAddEditComponent } from './per-add-edit/per-add-edit.component';
import { PersonService } from './services/person.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CRUD_App';

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _dialog: MatDialog,
    private _personService: PersonService,
    private _coreService: CoreService) { }

  /**
* Handles the event when the user clicks on AddPerson or the Edit icon.
*/
  openAddEditPersonForm() {
    const dialogRef = this._dialog.open(PerAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.updateList();
        }
      }
    })
  }
  ngOnInit(): void {
    this.updateList();
  }
      /**
* A method to update the List, we can call it whenever 
* a change to the list happends.
*/
  updateList() {
    this._personService.getAllPerson().subscribe({
      next: (res: any[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    /**
* Handles the event when the user clicks on the delete icon.
*
* @param {number} id - ID of Person instance in that row.
*/
  deletePerson(id: number) {
    this._personService.deletePerson(id).subscribe({
      next: (res) => {
        this.updateList();
        this._coreService.openSnackBar('Person Deleted');
      },
      error: console.log,
    });
  }
  /**
* Handles the event when the user clicks on the edit icon.
*
* @param {any} data - Person instance in that row.
*/
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(PerAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.updateList();
        }
      }
    })

  }

}

