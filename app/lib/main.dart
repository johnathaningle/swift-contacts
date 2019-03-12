import 'dart:async';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'swift_home.dart';

Future<Null> main() async {
  _currentUser = await _signInAnon();
  runApp(new SwiftApp());
}

final FirebaseAuth _auth = FirebaseAuth.instance;

//represents a new user
FirebaseUser _currentUser;

Future<FirebaseUser> _signInAnon() async {
  final user = await _auth.signInAnonymously();
  return user;
}



class SwiftApp extends StatelessWidget {
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