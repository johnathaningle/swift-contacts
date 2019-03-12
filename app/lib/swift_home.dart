import 'package:flutter/material.dart';
import 'swift_body.dart';
class SwiftHome extends StatelessWidget {
  final topBar = new AppBar(
    backgroundColor: Colors.white,
    centerTitle: true,
    elevation: 1.0,
    leading: new Icon(Icons.menu),
    title: SizedBox(
      height: 35.0,
      child: Text("Swift Contacts"),
    ),
    actions: <Widget>[
      Padding(
        padding: const EdgeInsets.only(right: 12.0),
        child: Icon(Icons.send),
      )
    ],
  );
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: topBar,
      body: new SwiftBody(),
      bottomNavigationBar: new Container(
        color: Colors.white,
        height: 50.0,
        child: new BottomAppBar(
          child: new Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              new IconButton(icon: Icon(Icons.home), onPressed: null),
              new IconButton(icon: Icon(Icons.contact_mail), onPressed: null),
              new IconButton(icon: Icon(Icons.access_time), onPressed: null),
              new IconButton(icon: Icon(Icons.grade), onPressed: null),
              new IconButton(icon: Icon(Icons.insert_chart), onPressed: null),
            ],
          ),
        ),
      ),
    );
  }
}