# Captains Log HM

### Restful Routes 

Action | URL | HTTP Verb | JSX view filename | mongoose method 
--- | --- | --- | --- |--- 
Index | /logs/ | GET | Index.jsx | Log.find() | Log.find()
Show | /logs/:id/ | READ | Show.jsx |  | 
New | /logs/new | GET | New.jsx | none | 
Create | /logs/ | POST | none | Log.create(req.body) | 
Edit | /logs/:id/edit | PATCH | Edit.jsx |  | 
Update | /logs/:id | PUT |  |  | 
Destroy | /logs/:id | DELETE |  |  | 

---

![](https://i.imgflip.com/2kvyk8.jpg)