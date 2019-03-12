import 'package:flutter/material.dart';
import 'swift_home.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
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