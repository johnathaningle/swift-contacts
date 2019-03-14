import 'dart:async';
import 'package:flutter/material.dart';
import 'swift_home.dart';

Future<Null> main() async {
  runApp(new SwiftApp());
}

class SwiftApp extends StatefulWidget {
  State<StatefulWidget> createState() {
    return _SwiftAppState();
  }
}




class _SwiftAppState extends State<SwiftApp> {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: "Swift",
      debugShowCheckedModeBanner: false,
      theme: new ThemeData(
        primaryColor: Colors.grey[100],
        primaryIconTheme: IconThemeData(
            color: Colors.black
        ),
        primaryTextTheme: TextTheme(
          title: TextStyle(
              color: Colors.black
          ),
        ),
        textTheme: TextTheme(
            title: TextStyle(
                color: Colors.black
            ),
        ),
      ),
      home: new SwiftHome(),
    );
  }
}