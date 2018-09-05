import { UserInfo } from './../../../Models/UserModel';
import { Notification } from './../../../Models/NotificationModel';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../../Models/MessageModel';

@Component({
  selector: 'mc-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  userName: UserInfo = { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar"  };
  prefix: string = "MC-Host";
  sufix: string = "Base";
  prefixMin: string = "MC";
  sufixMin: string = "Host";
  messages: Message[] = 
  [
    {
      message: "Why not buy a new awesome theme?",
      subject: "Support Team",
      from: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
      sent: new Date(2018, 10, 15),
      to: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
    },
    {
      message: "Why not buy a new awesome theme?",
      subject: "Admin support request",
      from: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
      sent: new Date(2018, 10, 15),
      to: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
    },
    {
      message: "Why not buy a new awesome theme?",
      subject: "Ask me about",
      from: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
      sent: new Date(2018, 10, 15),
      to: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
    },
    {
      message: "Why not buy a new awesome theme?",
      subject: "System help",
      from: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
      sent: new Date(2018, 10, 15),
      to: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
    },
    {
      message: "Why not buy a new awesome theme?",
      subject: "System options use",
      from: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
      sent: new Date(2018, 10, 15),
      to: { id: "teste", firstName: "Willimar", lastName: "Rocha", nickName: "Willimar" },
    }
  ];
  notications: Notification[] = [
    {
      message: "5 new members joined today",
      notificationType: 0
    },
    {
      message: " Very long description here that may not fit into the page and may cause design problems.",
      notificationType: 0
    },
    {
      message: "25 sales made",
      notificationType: 0
    },
    {
      message: "you change your user name",
      notificationType: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
