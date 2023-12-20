import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PerAddEditComponent } from './per-add-edit/per-add-edit.component';
import { MatToolbar } from '@angular/material/toolbar';
import { PersonService } from './services/person.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
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


  constructor(private _dialog: MatDialog, private _personService: PersonService) { }
  openAddEditPersonForm() {
    const dialogRef=this._dialog.open(PerAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.updateList();
        }
      }
    })
  }
  ngOnInit(): void {
    this.updateList();
  }
  getPersonList() {
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
  deletePerson(id: number) {
    this._personService.deletePerson(id).subscribe({
      next: (res) => {
        this.updateList();
        alert('Person Deleted');
      },
      error: console.log,
    });
  }
  openEditForm(data:any){
    const dialogRef=this._dialog.open(PerAddEditComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.updateList();
        }
      }
    })

  }

  // A method to update the List, we can call it whenever
  // a change to the list happends.
  updateList(){
    this.getPersonList();
  }
}

