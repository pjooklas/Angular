import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptas } from 'src/app/models/receptas';
import { ReceptaiServiceService } from 'src/app/services/receptai-service.service';

@Component({
  selector: 'app-receptas-details',
  templateUrl: './receptas-details.component.html',
  styleUrls: ['./receptas-details.component.css']
})
export class ReceptasDetailsComponent implements OnInit {

  public receptas:Receptas|null=null;

  constructor(
    public receptaiService:ReceptaiServiceService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.receptas=this.receptaiService.getReceptas(id);
  }

  public pridetiLike(id?:string){
    if (id!=null){
      this.receptaiService.increaseLikes(id);
      this.router.navigate(["/"]);
    }
  }

}
