import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';
import { MembersService } from 'src/app/_services/members.service';
import { MemberDetailComponent } from '../member-detail/member-detail.component';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    })
  }

}
